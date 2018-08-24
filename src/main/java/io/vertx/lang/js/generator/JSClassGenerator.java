package io.vertx.lang.js.generator;

import io.vertx.codegen.*;
import io.vertx.codegen.type.*;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Collections;
import java.util.Map;
import java.util.function.Consumer;

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
    PrintWriter writer = new PrintWriter(sw);
    genLicenses(writer);
    writer.println();
    writer.print("/** @module ");
    writer.print(getModuleName(type));
    writer.println(" */");

    //Generate the requires
    genRequire(model, writer);
    writer.println();
    genDoc(model, "", writer);

    //The constructor
    writer.print("var ");
    writer.print(simpleName);
    writer.print(" = function(j_val");
    for (TypeParamInfo.Class param : model.getTypeParams()) {
      writer.print(", j_arg_");
      writer.print(param.getIndex());
    }
    writer.println(") {");
    writer.println();

    writer.print("  var j_");
    writer.print(ifaceName);
    writer.println(" = j_val;");
    writer.println("  var that = this;");

    for (TypeParamInfo.Class param : model.getTypeParams()) {
      writer.print("  var j_");
      writer.print(param.getName());
      writer.print(" = typeof j_arg_");
      writer.print(param.getIndex());
      writer.print(" !== 'undefined' ? j_arg_");
      writer.print(param.getIndex());
      writer.println(" : utils.unknown_jtype;");
    }
    //Apply any supertypes
    for (TypeInfo superType : model.getSuperTypes()) {
      writer.print("  ");
      writer.print(superType.getRaw().getSimpleName());
      writer.print(".call(this, j_val");
      if (superType instanceof ParameterizedTypeInfo && ((ApiTypeInfo) superType.getRaw()).isConcrete()) {
        for (TypeInfo arg : ((ParameterizedTypeInfo) superType).getArgs()) {
          if (arg.getKind() == API) {
            writer.print(", ");
            writer.print(arg.getSimpleName());
            writer.print("._jtype");
          } else if (arg.isVariable()) {
            writer.print(", j_");
            writer.print(arg.getName());
          } else {
            writer.print(", undefined");
          }
        }
      }
      writer.println(");");
    }
    writer.println();

    //Now iterate through each unique method
    for (String methodName : model.getMethodMap().keySet()) {
      //Call out to actually generate the method, we only consider non static methods here
      genMethod(model, methodName, "  ", false, null, writer);
    }

    //Each object has a _jdel function which gives access to the underlying Java object

    writer.println("  // A reference to the underlying Java delegate");
    writer.println("  // NOTE! This is an internal API and must not be used in user code.");
    writer.println("  // If you rely on this property your code is likely to break if we change it / remove it without warning.");
    writer.print("  this._jdel = j_");
    writer.print(ifaceName);
    writer.println(";");
    writer.println("};");
    writer.println();

    writer.print(simpleName);
    writer.print("._jclass = utils.getJavaClass(\"");
    writer.print(type.getRaw().getName());
    writer.println("\");");

    writer.print(simpleName);
    writer.println("._jtype = {");
    writer.println("  accept: function(obj) {");
    writer.print("    return ");
    writer.print(simpleName);
    writer.println("._jclass.isInstance(obj._jdel);");
    writer.println("  },");

    writer.println("  wrap: function(jdel) {");
    //A bit of jiggery pokery to create the object given a reference to the constructor function
    writer.print("    var obj = Object.create(");
    writer.print(simpleName);
    writer.println(".prototype, {});");
    writer.print("    ");
    writer.print(simpleName);
    writer.println(".apply(obj, arguments);");
    writer.println("    return obj;");
    writer.println("  },");

    writer.println("  unwrap: function(obj) {");
    writer.println("    return obj._jdel;");
    writer.println("  }");
    writer.println("};");

    writer.print(simpleName);
    writer.println("._create = function(jdel) {");
    //A bit of jiggery pokery to create the object given a reference to the constructor function
    writer.print("  var obj = Object.create(");
    writer.print(simpleName);
    writer.println(".prototype, {});");
    writer.print("  ");
    writer.print(simpleName);
    writer.println(".apply(obj, arguments);");
    writer.println("  return obj;");
    writer.println("}");

    //Iterate through the methods again, this time only considering the static ones
    for (String methodName : model.getMethodMap().keySet()) {
      //Call out to generate the static method
      genMethod(model, methodName, "", true, null, writer);
    }

    //We export the Constructor function
    writer.print("module.exports = ");
    writer.print(simpleName);
    writer.print(";");

    return sw.toString();
  }


  @Override
  protected void genMethodAdapter(ClassModel model, MethodInfo method, String ind, PrintWriter writer) {
    if (method.getReturnType().getKind() != VOID) {
      if (method.isFluent()) {
        writer.print(ind);
        writer.print("    ");
        genMethodCall(model, ind, method, writer);
        writer.println(";");
        writer.print(ind);
        writer.print("    return ");
        if (method.isStaticMethod()) {
          writer.print(model.getType().getSimpleName());
        } else {
          writer.print("that");
        }
        writer.println(";");
      } else if (method.isCacheReturn()) {
        writer.print(ind);
        writer.print("    if (that.cached");
        writer.print(method.getName());
        writer.println(" == null) {");
        writer.print(ind);
        writer.print("      that.cached");
        writer.print(method.getName());
        writer.print(" = ");
        convReturn(model, ind, method, method.getReturnType(), this.genMethodCallSupplier(model, ind, method), writer);
        writer.println(";");
        writer.print(ind);
        writer.println("    }");
        writer.print(ind);
        writer.print("    return that.cached");
        writer.print(method.getName());
        writer.println(";");
      } else {
        writer.print(ind);
        writer.print("    return ");
        convReturn(model, ind, method, method.getReturnType(), this.genMethodCallSupplier(model, ind, method), writer);
        writer.println(";");
      }
    } else {
      writer.print(ind);
      writer.print("    ");
      genMethodCall(model, ind, method, writer);
      writer.println(";");
    }
  }

  private void genMethodCall(ClassModel model, String ind, MethodInfo method, PrintWriter writer) {
    String simpleName = model.getType().getSimpleName();
    String ifaceName = Helper.decapitaliseFirstLetter(simpleName);
    if (method.isStaticMethod()) {
      writer.print("J");
      writer.print(simpleName);
    } else {
      writer.print("j_");
      writer.print(ifaceName);
    }
    writer.print("[\"");
    writer.print(method.getName());
    writer.print("(");
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
      boolean overloaded = model.getMethodMap().get(method.getName()).size() > 1;
      convParam(model, method, ind, "__args[" + (pcnt++) + "]", overloaded, param, writer);
    }
    writer.print(")");
  }

  private Consumer<PrintWriter> genMethodCallSupplier(ClassModel model, String ind, MethodInfo method) {
    return writer -> genMethodCall(model, ind, method, writer);
  }

  @Override
  protected void convReturn(ClassModel model, String ind, MethodInfo method, TypeInfo returnType, Consumer<PrintWriter> templ, PrintWriter writer) {
    ClassKind kind = returnType.getKind();
    if (kind == LIST) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(0);
      ClassKind elementKind = elementType.getKind();
      if (elementKind.json) {
        writer.print("utils.convReturnListSetJson(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == DATA_OBJECT) {
        writer.print("utils.convReturnListSetDataObject(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == ENUM) {
        writer.print("utils.convReturnListSetEnum(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == API) {
        writer.print("utils.convReturnListSetVertxGen(");
        templ.accept(writer);
        writer.print(", ");
        writer.print(elementType.getRaw().getSimpleName());
        writer.print(")");
      } else if ("java.lang.Long".equals(elementType.getName())) {
        writer.print("utils.convReturnListSetLong(");
        templ.accept(writer);
        writer.print(")");
      } else {
        templ.accept(writer);
      }
    } else if (kind == SET) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(0);
      ClassKind elementKind = elementType.getKind();
      if (elementKind.json) {
        writer.print("utils.convReturnListSetJson(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == DATA_OBJECT) {
        writer.print("utils.convReturnListSetDataObject(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == ENUM) {
        writer.print("utils.convReturnListSetEnum(");
        templ.accept(writer);
        writer.print(")");
      } else if (elementKind == API) {
        writer.print("utils.convReturnListSetVertxGen(");
        templ.accept(writer);
        writer.print(", ");
        writer.print(elementType.getRaw().getSimpleName());
        writer.print(")");
      } else if ("java.lang.Long".equals(elementType.getName())) {
        writer.print("utils.convReturnListSetLong(");
        templ.accept(writer);
        writer.print(")");
      } else {
        writer.print("utils.convReturnSet(");
        templ.accept(writer);
        writer.print(")");
      }
    } else if (kind == MAP) {
      writer.print("utils.convReturnMap(");
      templ.accept(writer);
      writer.print(")");
    } else if (kind.json) {
      writer.print("utils.convReturnJson(");
      templ.accept(writer);
      writer.print(")");
    } else if (kind.basic) {
      if ("java.lang.Long".equals(returnType.getName())) {
        writer.print("utils.convReturnLong(");
        templ.accept(writer);
        writer.print(")");
      } else {
        templ.accept(writer);
      }
    } else if (kind == API) {
      writer.print("utils.convReturnVertxGen(");
      writer.print(returnType.getRaw().getSimpleName());
      writer.print(", ");
      templ.accept(writer);
      if (returnType.isParameterized()) {
        for (TypeInfo arg : ((ParameterizedTypeInfo) returnType).getArgs()) {
          ClassKind argKind = arg.getKind();
          if (argKind == API) {
            writer.print(", ");
            writer.print(arg.getSimpleName());
            writer.print("._jtype");
          } else if (argKind == ENUM) {
            writer.print(", utils.enum_jtype(");
            writer.print(arg.getName());
            writer.print(")");
          } else if (argKind == OBJECT) {
            ParamInfo classTypeParam = method.resolveClassTypeParam((TypeVariableInfo) arg);
            if (classTypeParam != null) {
              writer.print(", utils.get_jtype(__args[");
              writer.print(classTypeParam.getIndex());
              writer.print("])");
            } else {
              writer.print(", undefined");
            }
          } else {
            writer.print(", undefined");
          }
        }
      }
      writer.print(")");
    } else if (kind == ENUM) {
      writer.print("utils.convReturnEnum(");
      templ.accept(writer);
      writer.print(")");
    } else if (kind == DATA_OBJECT) {
      writer.print("utils.convReturnDataObject(");
      templ.accept(writer);
      writer.print(")");
    } else if (kind == THROWABLE) {
      writer.print("utils.convReturnThrowable(");
      templ.accept(writer);
      writer.print(")");
    } else if (kind == HANDLER) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) returnType;
      if (type.getArg(0).getKind() == ASYNC_RESULT) {
        writer.print("utils.convReturnHandlerAsyncResult(");
        templ.accept(writer);
        writer.print(", function(result) { return ");
        convParam(model, method, ind, null, false, new ParamInfo(0, "result", null, (((ParameterizedTypeInfo) (type).getArg(0))).getArg(0)), writer);
        writer.print("; })");
      } else {
        writer.print("utils.convReturnHandler(");
        templ.accept(writer);
        writer.print(", function(result) { return ");
        convParam(model, method, ind, null, false, new ParamInfo(0, "result", null, type.getArg(0)), writer);
        writer.print("; })");

      }
    } else if (returnType.isVariable() && (method.resolveClassTypeParam((TypeVariableInfo) returnType) != null)) {
      ParamInfo classTypeParam = method.resolveClassTypeParam((TypeVariableInfo) returnType);
      writer.print("utils.get_jtype(__args[");
      writer.print(classTypeParam.getIndex());
      writer.print("]).wrap(");
      templ.accept(writer);
      writer.print(")");
    } else {
      //This will probably happen if the return type is generic
      String wrapper = "utils.convReturnTypeUnknown";
      ClassTypeInfo type = model.getType();
      for (TypeParamInfo.Class param : type.getParams()) {
        if (param.getName().equals(returnType.getName())) {
          wrapper = "j_" + param.getName() + ".wrap";
        }
      }
      writer.print(wrapper);
      writer.print("(");
      templ.accept(writer);
      writer.print(")");
    }
  }

  private void genRequire(ClassModel model, PrintWriter writer) {
    ClassTypeInfo type = model.getType();
    writer.println("var utils = require('vertx-js/util/utils');");
    for (ClassTypeInfo referencedType : model.getReferencedTypes()) {
      writer.print("var ");
      writer.print(referencedType.getSimpleName());
      writer.print(" = require('");
      writer.print(getModuleName(referencedType));
      writer.println("');");
    }
    writer.println();
    //The top level vars for the module
    writer.println("var io = Packages.io;");
    writer.println("var JsonObject = io.vertx.core.json.JsonObject;");
    writer.print("var J");
    writer.print(type.getSimpleName());
    writer.print(" = Java.type('");
    writer.print(type.getName());
    writer.println("');");
    for (ClassTypeInfo dataObjectType : model.getReferencedDataObjectTypes()) {
      writer.print("var ");
      writer.print(dataObjectType.getSimpleName());
      writer.print(" = Java.type('");
      writer.print(dataObjectType.getName());
      writer.println("');");
    }
  }
}
