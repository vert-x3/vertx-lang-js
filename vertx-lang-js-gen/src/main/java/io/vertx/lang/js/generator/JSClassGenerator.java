package io.vertx.lang.js.generator;

import io.vertx.codegen.*;
import io.vertx.codegen.type.*;
import io.vertx.codegen.writer.CodeWriter;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Collections;
import java.util.Map;

import static io.vertx.codegen.type.ClassKind.*;

public class JSClassGenerator extends AbstractJSClassGenerator<ClassModel> {
  JSClassGenerator() {
    this.name = "JavaScript";
    this.kinds = Collections.singleton("class");
  }

  @Override
  public String filename(ClassModel model) {
    ClassTypeInfo type = model.getType();
    return "resources/" + type.getModuleName() + "-js/" + Helper.convertCamelCaseToUnderscores(type.getRaw().getSimpleName()) + ".js";
  }

  @Override
  public String render(ClassModel model, int index, int size, Map<String, Object> session) {
    ClassTypeInfo type = model.getType();
    String simpleName = type.getSimpleName();
    String ifaceName = Helper.decapitaliseFirstLetter(simpleName);
    StringWriter sw = new StringWriter();
    CodeWriter writer = new CodeWriter(sw);
    genLicenses(writer);
    writer.println();
    writer.format("/** @module %s */\n", getModuleName(type));

    //Generate the requires
    genRequire(model, writer);
    writer.println();
    genDoc(model, writer);

    //The constructor
    writer.format("var %s = function(j_val", simpleName);
    for (TypeParamInfo.Class param : model.getTypeParams()) {
      writer.format(", j_arg_%s", param.getIndex());
    }
    writer.println(") {");
    writer.println();

    writer.indent();
    writer.format("var j_%s = j_val;\n", ifaceName);
    writer.println("var that = this;");
    writer.unindent();

    for (TypeParamInfo.Class param : model.getTypeParams()) {
      writer.format("  var j_%s = typeof j_arg_%s !== 'undefined' ? j_arg_%s : utils.unknown_jtype;", param.getName(), param.getIndex(), param.getIndex());
    }

    writer.indent();

    //Apply any supertypes
    for (TypeInfo superType : model.getSuperTypes()) {
      writer.print(superType.getRaw().getSimpleName());
      writer.print(".call(this, j_val");
      if (superType instanceof ParameterizedTypeInfo && ((ApiTypeInfo) superType.getRaw()).isConcrete()) {
        for (TypeInfo arg : ((ParameterizedTypeInfo) superType).getArgs()) {
          if (arg.getKind() == API) {
            writer.format(", %s._jtype", arg.getSimpleName());
          } else if (arg.isVariable()) {
            writer.format(", j_%s", arg.getName());
          } else {
            writer.print(", undefined");
          }
        }
      }
      writer.append(");\n");
    }
    writer.println();

    //Get refs to parent methods before we overwrite them
    model.getMethods().forEach(method -> {
      writer.format("var __super_%s = this.%s;\n", method.getName(), method.getName());
    });

    //Now iterate through each unique method
    model.getMethods()
      .stream()
      .filter(method -> !method.isStaticMethod())
      .map(MethodInfo::getName).distinct().forEach(methodName -> {
      //Call out to actually generate the method, we only consider non static methods here
      genMethod(model, methodName, false, null, writer);
    });

    //Each object has a _jdel function which gives access to the underlying Java object

    writer
      .append("// A reference to the underlying Java delegate\n")
      .append("// NOTE! This is an internal API and must not be used in user code.\n")
      .append("// If you rely on this property your code is likely to break if we change it / remove it without warning.\n")
      .format("this._jdel = j_%s;\n", ifaceName);

    writer
      .unindent()
      .append("};\n");

    writer.println();

    writer.format("%s._jclass = utils.getJavaClass(\"%s\");\n", simpleName, type.getRaw().getName());

    writer
      .format("%s._jtype = {", simpleName)
      .indent()
      .append("accept: function(obj) {\n")
      .indent()
      .format("return %s._jclass.isInstance(obj._jdel);\n", simpleName)
      .unindent()
      .append("},")
      .append("wrap: function(jdel) {\n")
      .indent() //A bit of jiggery pokery to create the object given a reference to the constructor function
      .format("var obj = Object.create(%s.prototype, {});\n", simpleName)
      .format("%s.apply(obj, arguments);\n", simpleName)
      .append("return obj;\n")
      .unindent()
      .append("},\n").append("unwrap: function(obj) {\n")
      .indent()
      .append("return obj._jdel;\n")
      .unindent()
      .append("}\n")
      .unindent()
      .append("};\n");

    writer
      .format("%s._create = function(jdel) {", simpleName)
      .indent() //A bit of jiggery pokery to create the object given a reference to the constructor function
      .format("var obj = Object.create(%s.prototype, {});\n", simpleName)
      .format("%s.apply(obj, arguments);\n", simpleName)
      .append("return obj;\n")
      .unindent()
      .append("}\n");

    //Iterate through the methods again, this time only considering the static ones
    model.getMethods()
      .stream()
      .filter(MethodInfo::isStaticMethod)
      .map(MethodInfo::getName).distinct().forEach(methodName -> {
      //Call out to actually generate the method, we only consider non static methods here
      genMethod(model, methodName, true, null, writer);
    });

    //Gen constants
    for (ConstantInfo constant : model.getConstants()) {
      genConstant(model, constant, writer);
    }

    //We export the Constructor function
    writer.format("module.exports = %s;", simpleName);

    return sw.toString();
  }


  @Override
  protected void genMethodAdapter(ClassModel model, MethodInfo method, CodeWriter writer) {
    if (method.getReturnType().getKind() != VOID) {
      if (method.isFluent()) {
        writer.format("%s ;\n", genMethodCall(model, method));
        writer.format("return %s;\n", method.isStaticMethod() ? model.getType().getSimpleName() : "that");
      } else if (method.isCacheReturn()) {
        writer
          .format("if (that.cached%s == null) {\n", method.getName())
          .indent()
          .format("that.cached%s = %s;\n", method.getName(), convReturn(model, method, method.getReturnType(), genMethodCall(model, method)))
          .unindent()
          .append("}\n")
          .format("return that.cached%s;\n", method.getName());
      } else {
        writer.format("return %s ;\n", convReturn(model, method, method.getReturnType(), genMethodCall(model, method)));
      }
    } else {
      writer.format("%s;\n", genMethodCall(model, method));
    }
  }

  private String genMethodCall(ClassModel model, MethodInfo method) {
    StringWriter sw = new StringWriter();
    PrintWriter writer = new PrintWriter(sw);
    String simpleName = model.getType().getSimpleName();
    String ifaceName = Helper.decapitaliseFirstLetter(simpleName);
    if (method.isStaticMethod()) {
      writer.format("J%s", simpleName);
    } else {
      writer.format("j_%s", ifaceName);
    }
    writer.format("[\"%s(", method.getName());
    boolean first = true;
    for (ParamInfo param : method.getParams()) {
      if (first) {
        first = false;
      } else {
        writer.print(",");
      }
      if (param.getType().isParameterized()) {
        writer.print(param.getType().getRaw().getName());
      } else if (param.getType().isVariable()) {
        writer.print("java.lang.Object");
      } else {
        writer.print(param.getType().getName());
      }
    }
    writer.print(")\"](");
    int pcnt = 0;
    first = true;
    for (ParamInfo param : method.getParams()) {
      if (first) {
        first = false;
      } else {
        writer.print(", ");
      }
      boolean overloaded = model.getMethods().stream().map(MethodInfo::getName).count() > 1;
      writer.print(convParam(model, method, "__args[" + (pcnt++) + "]", overloaded, param));
    }
    writer.print(")");
    return sw.toString();
  }

  @Override
  protected String convReturn(ClassModel model, MethodInfo method, TypeInfo returnType, String templ) {
    ClassKind kind = returnType.getKind();
    if (kind == LIST || kind == SET) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(0);
      ClassKind elementKind = elementType.getKind();
      if (elementKind.json) {
        return String.format("utils.convReturnListSetJson(%s)", templ);
      } else if (elementKind == OBJECT) {
        return String.format("utils.convReturnListSetObject(%s)", templ);
      } else if (elementKind == DATA_OBJECT) {
        String isJson = (((DataObjectTypeInfo)elementType).getTargetJsonType().getKind().json) ? "true" : "false";
        return String.format("utils.convReturnListSetDataObject(%s, Java.type('%s').INSTANCE, %s)", templ, ((DataObjectTypeInfo)elementType).getJsonEncoderFQCN(), isJson);
      } else if (elementKind == ENUM) {
        return String.format("utils.convReturnListSetEnum(%s)", templ);
      } else if (elementKind == API) {
        return String.format("utils.convReturnListSetVertxGen(%s, %s)", templ, elementType.getRaw().getSimpleName());
      } else if ("java.lang.Long".equals(elementType.getName())) {
        return String.format("utils.convReturnListSetLong(%s)", templ);
      } else {
        if (kind == LIST) {
          return templ;
        } else {
          return String.format("utils.convReturnSet(%s)", templ);
        }
      }
    } else if (kind == MAP) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(1);
      ClassKind elementKind = elementType.getKind();
      if (elementKind == API) {
        return String.format("utils.convReturnMapVertxGen(%s, %s)", templ, elementType.getRaw().getSimpleName());
      } else if (elementKind == ENUM) {
        return String.format("utils.convReturnMap(%s, function(elem) { return elem.toString(); })", templ);
      } else if (elementKind == DATA_OBJECT) {
        DataObjectTypeInfo doTypeInfo = (DataObjectTypeInfo)elementType;
        return String.format("utils.convReturnMapDataObject(%s, Java.type('%s').INSTANCE, Java.type('%s').INSTANCE, %s, %s)",
          templ,
          doTypeInfo.getJsonEncoderFQCN(),
          doTypeInfo.getJsonDecoderFQCN(),
          (doTypeInfo.getTargetJsonType().getKind() == JSON_OBJECT) ? "true" : "false",
          (doTypeInfo.getTargetJsonType().getKind() == JSON_ARRAY) ? "true" : "false"
        );
      } else {
        return String.format("utils.convReturnMapUnknown(%s)", templ);
      }
    } else if (kind.json) {
      return String.format("utils.convReturnJson(%s)", templ);
    } else if (kind.basic) {
      if ("java.lang.Long".equals(returnType.getName())) {
        return String.format("utils.convReturnLong(%s)", templ);
      } else {
        return templ;
      }
    } else if (returnType.getName().equals(Number.class.getCanonicalName())) {
      return templ;
    } else if (kind == API) {
      StringWriter buffer = new StringWriter();
      PrintWriter writer = new PrintWriter(buffer);
      writer.format("utils.convReturnVertxGen(%s, %s", returnType.getRaw().getSimpleName(), templ);
      if (returnType.isParameterized()) {
        for (TypeInfo arg : ((ParameterizedTypeInfo) returnType).getArgs()) {
          ClassKind argKind = arg.getKind();
          if (argKind == API) {
            writer.format(", %s._jtype", arg.getRaw().getSimpleName());
          } else if (argKind == ENUM) {
            writer.format(", utils.enum_jtype(%s)", arg.getName());
          } else if (argKind == OBJECT) {
            ParamInfo classTypeParam = method != null ? method.resolveClassTypeParam((TypeVariableInfo) arg) : null;
            if (classTypeParam != null) {
              writer.format(", utils.get_jtype(__args[%s])", classTypeParam.getIndex());
            } else {
              writer.print(", undefined");
            }
          } else {
            writer.print(", undefined");
          }
        }
      }
      writer.print(")");
      return buffer.toString();
    } else if (kind == ENUM) {
      return String.format("utils.convReturnEnum(%s)", templ);
    } else if (kind == DATA_OBJECT) {
      return String.format("utils.convReturnDataObject(%s, Java.type('%s').INSTANCE, %s)",
        templ,
        ((DataObjectTypeInfo)returnType).getJsonEncoderFQCN(),
        ((DataObjectTypeInfo)returnType).getTargetJsonType().getKind().json ? "true" : "false"
      );
    } else if (kind == THROWABLE) {
      return String.format("utils.convReturnThrowable(%s)", templ);
    } else if (kind == HANDLER) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) returnType;
      if (type.getArg(0).getKind() == ASYNC_RESULT) {
        return String.format("utils.convReturnHandlerAsyncResult(%s, function(result) { return %s; })",
          templ,
          convParam(model, method, null, false, new ParamInfo(0, "result", null, (((ParameterizedTypeInfo) (type).getArg(0))).getArg(0))));
      } else {
        return String.format("utils.convReturnHandler(%s, function(result) { return %s; })",
          templ,
          convParam(model, method, null, false, new ParamInfo(0, "result", null, type.getArg(0))));
      }
    } else if (returnType.isVariable() && (method != null && method.resolveClassTypeParam((TypeVariableInfo) returnType) != null)) {
      ParamInfo classTypeParam = method.resolveClassTypeParam((TypeVariableInfo) returnType);
      return String.format("utils.get_jtype(__args[%s]).wrap(%s)", classTypeParam.getIndex(), templ);
    } else {
      //This will probably happen if the return type is generic
      String wrapper = "utils.convReturnTypeUnknown";
      ClassTypeInfo type = model.getType();
      for (TypeParamInfo.Class param : type.getParams()) {
        if (param.getName().equals(returnType.getName())) {
          wrapper = "j_" + param.getName() + ".wrap";
        }
      }
      return String.format("%s(%s)", wrapper, templ);
    }
  }

  private void genRequire(ClassModel model, PrintWriter writer) {
    ClassTypeInfo type = model.getType();
    writer.println("var utils = require('vertx-js/util/utils');");
    for (ClassTypeInfo referencedType : model.getReferencedTypes()) {
      writer.format("var %s = require('%s');\n", referencedType.getSimpleName(), getModuleName(referencedType));
    }
    writer.println();
    //The top level vars for the module
    writer.println("var io = Packages.io;");
    writer.println("var JsonObject = io.vertx.core.json.JsonObject;");
    writer.println("var JsonArray = io.vertx.core.json.JsonArray;");
    writer.format("var J%s = Java.type('%s');\n", type.getSimpleName(), type.getName());
    for (ClassTypeInfo dataObjectType : model.getReferencedDataObjectTypes()) {
      writer.format("var %s = Java.type('%s');\n", dataObjectType.getSimpleName(), dataObjectType.getName());
    }
  }
}
