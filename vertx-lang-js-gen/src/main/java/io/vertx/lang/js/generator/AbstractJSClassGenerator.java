package io.vertx.lang.js.generator;

import io.vertx.codegen.*;
import io.vertx.codegen.annotations.ModuleGen;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.codegen.doc.Tag;
import io.vertx.codegen.doc.Token;
import io.vertx.codegen.type.*;
import io.vertx.codegen.writer.CodeWriter;

import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.lang.annotation.Annotation;
import java.util.*;
import java.util.function.IntFunction;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static io.vertx.codegen.type.ClassKind.*;
import static io.vertx.codegen.type.ClassKind.FUNCTION;
import static javax.lang.model.element.ElementKind.CLASS;
import static javax.lang.model.element.ElementKind.INTERFACE;
import static javax.lang.model.element.ElementKind.METHOD;

@SuppressWarnings("WeakerAccess")
public abstract class AbstractJSClassGenerator<M extends ClassModel> extends Generator<M> {

  @Override
  public Collection<Class<? extends Annotation>> annotations() {
    return Arrays.asList(VertxGen.class, ModuleGen.class);
  }

  /**
   * Render a tag link to an html link, this function is used as parameter of the
   * renderDocToHtml function when it needs to render tag links.
   */
  protected String renderLinkToHtml(Tag.Link link) {
    ClassTypeInfo rawType = link.getTargetType().getRaw();
    if (rawType.getModule() != null) {
      String label = link.getLabel().trim();
      if (rawType.getKind() == DATA_OBJECT) {
        if (label.length() == 0) {
          label = rawType.getSimpleName();
        }
        return "<a href=\"../../dataobjects.html#" + rawType.getSimpleName() + "\">" + label + "</a>";
      } else if (rawType.getKind() == ENUM && ((EnumTypeInfo) rawType).isGen()) {
        if (label.length() == 0) {
          label = rawType.getSimpleName();
        }
        return "<a href=\"../../enums.html#" + rawType.getSimpleName() + "\">" + label + "</a>";
      } else {
        if (label.length() > 0) {
          label = "[" + label + "] ";
        }
        Element elt = link.getTargetElement();
        String jsType = rawType.getSimpleName();
        ElementKind kind = elt.getKind();
        if (kind == CLASS || kind == INTERFACE) {
          return label + "{@link " + jsType + "}";
        } else if (kind == METHOD) {
          return label + "{@link " + jsType + "#" + elt.getSimpleName().toString() + "}";
        } else {
          System.out.println("Unhandled kind " + kind);
        }
      }
    }
    return null;
  }

  /**
   * Generate the module name of a type
   */
  protected String getModuleName(ClassTypeInfo type) {
    return type.getModuleName() + "-js/" + Case.CAMEL.to(Case.SNAKE, type.getSimpleName());
  }

  /**
   * Generate the JSDoc type of a type
   */
  protected String getJSDocType(TypeInfo type) {
    if (type.getName().equals(Number.class.getCanonicalName())) return "number";
    switch (type.getKind()) {
      case STRING:
        return "string";
      case PRIMITIVE:
      case BOXED_PRIMITIVE:
        switch (type.getSimpleName()) {
          case "boolean":
          case "Boolean":
            return "boolean";
          case "char":
          case "Character":
            return "string";
          default:
            return "number";
        }
      case DATA_OBJECT:
        return getJSDocType(((DataObjectTypeInfo)type).getTargetJsonType());
      case JSON_OBJECT:
      case ENUM:
      case OBJECT:
        return "Object";
      case JSON_ARRAY:
        return "Array";
      case API:
        return type.getRaw().getSimpleName();
      case MAP:
        //`Map` before `collection`, because of MAP.collection is true
        return "Object.<string, " + getJSDocType(((ParameterizedTypeInfo) type).getArg(1)) + ">";
      case HANDLER:
      case FUNCTION:
        return "function";
      case SET:
      case LIST:
        return "Array.<" + getJSDocType(((ParameterizedTypeInfo) type).getArg(0)) + ">";
      default:
        return "todo";
    }
  }

  protected String convParam(M model, MethodInfo method, String argName, ParamInfo param) {
    StringWriter buffer = new StringWriter();
    CodeWriter writer = new CodeWriter(buffer);
    ClassKind paramKind = param.getType().getKind();
    boolean funct = paramKind == FUNCTION;
    if (paramKind == HANDLER || funct) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) param.getType();
      if (type.getArg(0).getKind() == ASYNC_RESULT) {
        ParameterizedTypeInfo asyncType = (ParameterizedTypeInfo) type.getArg(0);
        if (param.isNullable()) {
          writer.format("%s == null ? null : ", argName);
        }
        writer.println("function(ar) {");
        writer.indent();
        if (funct) {
          writer.println("var jRet;");
        }
        writer.println("if (ar.succeeded()) {");
        writer.indent();
        if (funct) {
          writer.print("jRet = ");
        }
        writer.print(argName);
        writer.print("(");
        if ("java.lang.Void".equals(asyncType.getArg(0).getName())) {
          writer.print("null");
        } else {
          writer.print(convReturn(model, method, asyncType.getArg(0), arVal()));
        }
        writer.println(", null);");
        writer.unindent();
        writer.println("} else {");
        writer.indent();
        if (funct) {
          writer.print("jRet = ");
        }
        writer.print(argName);
        writer.println("(null, ar.cause());");
        writer.unindent();
        writer.println("}");
        if (funct) {
          writer.println("return jRet;");
        }
        writer.unindent();
        writer.print("}");
      } else if ("java.lang.Void".equals(type.getArg(0).getName())) {
        writer.print(argName);
      } else {
        if (param.isNullable()) {
          writer.print(argName);
          writer.print(" == null ? null : ");
        }
        writer.println("function(jVal) {");
        writer.indent();
        if (funct) {
          writer.print("var jRet = ");
        }
        writer.print(argName);
        writer.format("(%s);\n", convReturn(model, method, type.getArg(0), basicVal()));
        if (funct) {
          writer.format("return %s;\n", unwrapToJava(method, param, type.getArg(1), "jRet"));
        }
        writer.unindent();
        writer.print("}");
      }
    } else {
      writer.print(unwrapToJava(method, param, param.getType(), argName));
    }
    return buffer.toString();
  }

  protected abstract String convReturn(M model, MethodInfo method, TypeInfo returnType, String templ);


  protected void genDoc(M model, CodeWriter writer) {
    writer.println("/**");
    if (model.getIfaceComment() != null) {
      writer.println(Helper.removeTags(model.getIfaceComment()));
    }
    writer.println(" @class");
    writer.println("*/");
  }
  protected String unwrapToJava(MethodInfo method, ParamInfo param, TypeInfo unwrappedType, String unwrappedName) {
    StringWriter buffer = new StringWriter();
    PrintWriter writer = new PrintWriter(buffer);
    ClassKind kind = unwrappedType.getKind();
    switch (kind) {
      case JSON_OBJECT:
        writer.format("utils.convParamJsonObject(%s)", unwrappedName);
        break;
      case JSON_ARRAY:
        writer.format("utils.convParamJsonArray(%s)", unwrappedName);
        break;
      case DATA_OBJECT:
        DataObjectTypeInfo doTypeInfo = (DataObjectTypeInfo) unwrappedType;
        if (doTypeInfo.isDataObjectAnnotatedType()) {
          writer.format("%s  != null ? new %s(new JsonObject(Java.asJSONCompatible(%s))) : null", unwrappedName, unwrappedType.getSimpleName(), unwrappedName);
        } else if (doTypeInfo.getTargetJsonType().getKind() == JSON_OBJECT) {
          writer.format("%s != null ? Java.type('%s').INSTANCE.deserialize(new JsonObject(Java.asJSONCompatible(%s))) : null", unwrappedName, doTypeInfo.getJsonMapperInfo().getJsonDeserializerFQCN(), unwrappedName);
        } else if (doTypeInfo.getTargetJsonType().getKind() == JSON_ARRAY)
          writer.format("%s != null ? Java.type('%s').INSTANCE.deserialize(new JsonArray(Java.asJSONCompatible(%s))) : null", unwrappedName, doTypeInfo.getJsonMapperInfo().getJsonDeserializerFQCN(), unwrappedName);
        else {
          writer.format("%s != null ? Java.type('%s').INSTANCE.deserialize(Java.asJSONCompatible(%s)) : null", unwrappedName, doTypeInfo.getJsonMapperInfo().getJsonDeserializerFQCN(), unwrappedName);
        }
        break;
      case ENUM:
        if (param.isNullable()) {
          writer.format("%s == null ? null : ", unwrappedName);
        }
        writer.format("%s.valueOf(%s)", unwrappedType.getName(), unwrappedName);
        break;
      case OBJECT:
        if (unwrappedType.isVariable()) {
          TypeVariableInfo type = (TypeVariableInfo) unwrappedType;
          if (type.isClassParam()) {
            writer.format("j_%s.unwrap(%s)", unwrappedType.getName(), unwrappedName);
          } else {
            ParamInfo classTypeParam = method.resolveClassTypeParam(type);
            if (classTypeParam != null) {
              writer.format("utils.get_jtype(__args[%s]).unwrap(%s)", classTypeParam.getIndex(), unwrappedName);
            } else {
              writer.format("utils.convParamTypeUnknown(%s)", unwrappedName);
            }
          }
        } else {
          writer.format("utils.convParamTypeUnknown(%s)", unwrappedName);
        }
        break;
      case THROWABLE:
        writer.format("utils.convParamThrowable(%s)", unwrappedName);
        break;
      case CLASS_TYPE:
        writer.format("utils.get_jclass(%s)", unwrappedName);
        break;
      case LIST:
      case SET: {
        String container = kind == LIST ? "List" : "Set";
        ParameterizedTypeInfo type = (ParameterizedTypeInfo) unwrappedType;
        TypeInfo arg = type.getArg(0);
        String argName = arg.getName();
        ClassKind argKind = arg.getKind();
        //Generics cannot be primitive
        if ("java.lang.Long".equals(argName)) {
          writer.format("utils.convParam%sLong(%s)", container, unwrappedName);
        } else if ("java.lang.Short".equals(argName)) {
          writer.format("utils.convParam%sShort(%s)", container, unwrappedName);
        } else if ("java.lang.Byte".equals(argName)) {
          writer.format("utils.convParam%sByte(%s)", container, unwrappedName);
        } else if (argKind == API) {
          writer.format("utils.convParam%sVertxGen(%s)", container, unwrappedName);
        } else if (argKind == JSON_OBJECT) {
          writer.format("utils.convParam%sJsonObject(%s)", container, unwrappedName);
        } else if (argKind == JSON_ARRAY) {
          writer.format("utils.convParam%sJsonArray(%s)", container, unwrappedName);
        } else if (argKind == DATA_OBJECT) {
          DataObjectTypeInfo doArgTypeInfo = (DataObjectTypeInfo) arg;
          if (doArgTypeInfo.isDataObjectAnnotatedType()) {
            writer.format("utils.convParam%sDataObjectAnnotated(%s, function(json) { return new %s(json); })", container, unwrappedName, arg.getSimpleName());
          } else {
            String cast =
              (doArgTypeInfo.getTargetJsonType().getKind() == JSON_OBJECT) ?
                ", function(str) { return new JsonObject(str); }" :
                (doArgTypeInfo.getTargetJsonType().getKind() == JSON_ARRAY) ?
                  ", function(str) { return new JsonArray(str); }" : "";
            writer.format("utils.convParam%sWithJsonMapper(%s, Java.type('%s').INSTANCE%s)", container, unwrappedName, doArgTypeInfo.getJsonMapperInfo().getJsonDeserializerFQCN(), cast);
          }
        } else if (argKind == ENUM) {
          writer.format("utils.convParam%sEnum(%s, function(val) { return Packages.%s.valueOf(val); })", container, unwrappedName, arg.getName());
        } else if (argKind == OBJECT) {
          writer.format("utils.convParam%sObject(%s)", container, unwrappedName);
        } else {
          if (param.isNullable()) {
            writer.format("%s == null ? null : ", unwrappedName);
          }
          writer.format("utils.convParam%sBasicOther(%s)", container, unwrappedName);
        }
        break;
      }
      case MAP: {
        ParameterizedTypeInfo type = (ParameterizedTypeInfo) unwrappedType;
        TypeInfo arg = type.getArg(1);
        String argName = arg.getName();
        ClassKind argKind = arg.getKind();
        //Generics cannot be primitive
        if ("java.lang.Long".equals(argName)) {
          writer.format("utils.convParamMapLong(%s)", unwrappedName);
        } else if ("java.lang.Short".equals(argName)) {
          writer.format("utils.convParamMapShort(%s)", unwrappedName);
        } else if ("java.lang.Byte".equals(argName)) {
          writer.format("utils.convParamMapByte(%s)", unwrappedName);
        } else if (argKind == API) {
          writer.format("utils.convParamMapVertxGen(%s)", unwrappedName);
        } else if (argKind == JSON_OBJECT) {
          writer.format("utils.convParamMapJsonObject(%s)", unwrappedName);
        } else if (argKind == JSON_ARRAY) {
          writer.format("utils.convParamMapJsonArray(%s)", unwrappedName);
        } else if (argKind == OBJECT) {
          writer.format("utils.convParamMapObject(%s)", unwrappedName);
        } else if (argKind == DATA_OBJECT) {
          DataObjectTypeInfo doArgTypeInfo = (DataObjectTypeInfo) arg;
          if (doArgTypeInfo.isDataObjectAnnotatedType()) {
            writer.format("utils.convParamMapDataObjectAnnotated(%s, function(json) { return new %s(json); })", unwrappedName, arg.getSimpleName());
          } else {
            String cast =
              (doArgTypeInfo.getTargetJsonType().getKind() == JSON_OBJECT) ?
                ", function(str) { return new JsonObject(str); }" :
                (doArgTypeInfo.getTargetJsonType().getKind() == JSON_ARRAY) ?
                  ", function(str) { return new JsonArray(str); }" : "";
            writer.format(
              "utils.convParamMapWithJsonMapper(%s, Java.type('%s').INSTANCE%s)",
              unwrappedName,
              doArgTypeInfo.getJsonMapperInfo().getJsonDeserializerFQCN(),
              cast
            );
          }
        } else if (argKind == ENUM) {
          writer.format("utils.convParamMapEnum(%s, function(val) { return Packages.%s.valueOf(val); })", unwrappedName, arg.getName());
        } else {
          writer.print(unwrappedName);
        }
        break;
      }
      case PRIMITIVE:
      case BOXED_PRIMITIVE:
      case STRING:
        switch (unwrappedType.getName()) {
          case "java.lang.Byte":
            writer.format("utils.convParamByte(%s)", unwrappedName);
            break;
          case "java.lang.Short":
            writer.format("utils.convParamShort(%s)", unwrappedName);
            break;
          case "java.lang.Integer":
            writer.format("utils.convParamInteger(%s)", unwrappedName);
            break;
          case "java.lang.Long":
            writer.format("utils.convParamLong(%s)", unwrappedName);
            break;
          case "java.lang.Float":
            writer.format("utils.convParamFloat(%s)", unwrappedName);
            break;
          case "java.lang.Double":
            writer.format("utils.convParamDouble(%s)", unwrappedName);
            break;
          case "java.lang.Character":
            writer.format("utils.convParamCharacter(%s)", unwrappedName);
            break;
          default:
            writer.print(unwrappedName);
            break;
        }
        break;
      case OTHER:
        if (unwrappedType.getName().equals(Number.class.getCanonicalName())) {
          writer.print(unwrappedName);
          break;
        }
      default:
        if (param.isNullable()) {
          writer.format("%s == null ? null : ", unwrappedName);
        }
        writer.format("%s._jdel", unwrappedName);
        break;
    }
    return buffer.toString();
  }

  protected String arVal() {
    return "ar.result()";
  }

  protected String basicVal() {
    return "jVal";
  }

  protected void genConstant(M model, ConstantInfo constant, CodeWriter writer) {

    String templ = "J" + model.getType().getSimpleName() + "." + constant.getName();

    writer.format("%s.%s = %s;\n", model.getType().getSimpleName(), constant.getName(), convReturn(model, null, constant.getType(), templ));

  }

  protected void genMethod(M model, String methodName, boolean genStatic, @SuppressWarnings("SameParameterValue") Predicate<MethodInfo> methodFilter, CodeWriter writer) {

    List<MethodInfo> methodList = model.getMethods().stream()
      .filter(method -> method.isStaticMethod() == genStatic && method.getName().equals(methodName))
      .collect(Collectors.toList());

    ClassTypeInfo type = model.getType();
    String simpleName = type.getSimpleName();
    if (methodFilter != null) {
      List<MethodInfo> methodTmpl = methodList;
      methodList = new ArrayList<>();
      for (MethodInfo method : methodTmpl) {
        if (methodFilter.test(method)) {
          methodList.add(method);
        }
      }
    }
    if (methodList.size() > 0) {
      boolean overloaded = methodList.size() > 1;
      MethodInfo method = methodList.get(methodList.size() - 1);
      if (genStatic == method.isStaticMethod()) {
        writer.println("/**");
        if (method.getDoc() != null) {
          Token.toHtml(method.getDoc().getTokens(), "", this::renderLinkToHtml, "\n", writer);
        }
        writer.println();
        writer.print(" ");
        if (genStatic) {
          writer.format("@memberof module:%s", getModuleName(type)).println();
        } else {
          writer.println("@public");
        }
        boolean first = true;
        for (ParamInfo param : method.getParams()) {
          if (first) {
            first = false;
          } else {
            writer.println();
          }
          writer.format(" @param %s {%s} ", param.getName(), getJSDocType(param.getType()));
          if (param.getDescription() != null) {
            Token.toHtml(param.getDescription().getTokens(), "", this::renderLinkToHtml, "", writer);
            writer.print(" ");
          }
        }
        writer.println();

        if (method.getReturnType().getKind() != VOID) {
          writer.format(" @return {%s}", getJSDocType(method.getReturnType()));
          if (method.getReturnDescription() != null) {
            writer.print(" ");
            Token.toHtml(method.getReturnDescription().getTokens(), "", this::renderLinkToHtml, "", writer);
          }
          writer.println();
        }
        writer.println(" */");

        writer.format("%s.%s = ", genStatic ? simpleName : "this", methodName);
        if (overloaded) {
          writer.println(" function() {");
        } else {
          writer.format(" function(%s) {\n", (method.getParams().stream().map(ParamInfo::getName).collect(Collectors.joining(", "))));
        }
        int mcnt = 0;
        writer.indent();
        writer.println("var __args = arguments;");
        for (MethodInfo m : methodList) {
          genSwitchStatement(mcnt++ == 0, m, writer, () -> {
            genMethodAdapter(model, m, genArgs(m, overloaded, m.getParams().size()), writer);
          });
          if (m.getKind() == MethodKind.FUTURE) {
            MethodInfo modifiedParamsMethodCopy = m.copy();
            modifiedParamsMethodCopy.getParams().remove(modifiedParamsMethodCopy.getParams().size() - 1);
            genSwitchStatement(mcnt++ == 0, modifiedParamsMethodCopy, writer, () -> {
              MethodInfo modifiedReturnMethodCopy = m.copy();
              modifiedReturnMethodCopy.setReturnType(VoidTypeInfo.INSTANCE);
              modifiedReturnMethodCopy.setCacheReturn(false);
              modifiedReturnMethodCopy.setFluent(false);
              writer.write("var __prom = Promise.promise();\n");
              writer.write("var __prom_completer_handler = function (result, cause) { if (cause === null) { __prom.complete(result); } else { __prom.fail(cause); } };\n");
              List<String> args = genArgs(m, overloaded, m.getParams().size() - 1);
              args.add("__prom_completer_handler");
              genMethodAdapter(model, modifiedReturnMethodCopy, args, writer);
              writer.write("return __prom.future();\n");
            });
          }
        }
        if (!genStatic) {
          writer.format(" else if (typeof __super_%s != 'undefined') {\n", method.getName());
          writer.indented(() -> writer.format("return __super_%s.apply(this, __args);\n", method.getName()));
          writer.println("}");
        }
        writer.println("else throw new TypeError('function invoked with invalid arguments');");
        writer.unindent();
        writer.println("};");
        writer.println();
      }
    }
  }

  private static List<String> genArgs(MethodInfo m, boolean overloaded, int size) {
    IntFunction<String> argMapper;
    if (overloaded) {
      argMapper = i -> "__args[" + i + "]";
    } else {
      argMapper = i -> m.getParam(i).getName();
    }
    return IntStream.range(0, size).mapToObj(argMapper).collect(Collectors.toList());
  }

  private void genSwitchStatement(boolean first, MethodInfo m, CodeWriter writer, Runnable cb) {
    writer.print(first ? "if" : " else if");
    int paramSize = m.getParams().size();
    writer.format(" (__args.length === %s", paramSize);
    if (paramSize > 0) {
      writer.print(" && ");
    }
    for (int idx = 0;idx < paramSize;idx++) {
      ParamInfo param = m.getParam(idx);
      if (idx > 0) {
        writer.print(" && ");
      }
      writeConditionParamType(param.getType(), param.isNullable(), idx, writer);
    }
    writer.println(") {");
    writer.indent();
    cb.run();
    writer.unindent();
    writer.print("}");
  }

  private void writeConditionParamType(TypeInfo paramTypeInfo, boolean isNullable, int cnt, CodeWriter writer) {
    switch (paramTypeInfo.getKind()) {
      case PRIMITIVE:
      case BOXED_PRIMITIVE:
        if (isNullable) {
          writer.print("(");
        }
        writer.format("typeof __args[%s] ===", cnt);
        String paramSimpleName = paramTypeInfo.getSimpleName();
        if ("boolean".equalsIgnoreCase(paramSimpleName)) {
          writer.print("'boolean'");
        } else if ("char".equals(paramSimpleName) || "Character".equals(paramSimpleName)) {
          writer.print("'string'");
        } else {
          writer.print("'number'");
        }
        if (isNullable) {
          writer.format(" || __args[%s] == null)", cnt);
        }
        break;
      case STRING:
      case ENUM:
        if (isNullable) {
          writer.print("(");
        }
        writer.format("typeof __args[%s] === 'string'", cnt);
        if (isNullable) {
          writer.format(" || __args[%s] == null)", cnt);
        }
        break;
      case CLASS_TYPE:
        writer.format("typeof __args[%s] === 'function'", cnt);
        break;
      case API:
        writer.format("typeof __args[%s] === 'object' && ", cnt);
        if (isNullable) {
          writer.format("(__args[%s] == null || ", cnt);
        }
        writer.format("__args[%s]._jdel", cnt);
        if (isNullable) {
          writer.print(")");
        }
        break;
      case JSON_ARRAY:
      case LIST:
      case SET:
        writer.format("typeof __args[%s] === 'object' && ", cnt);
        if (isNullable) {
          writer.print("(");
        }
        writer.format("__args[%s] instanceof Array", cnt);
        if (isNullable) {
          writer.format(" || __args[%s] == null)", cnt);
        }
        break;
      case HANDLER:
        if (isNullable) {
          writer.print("(");
        }
        writer.format("typeof __args[%s] === 'function'", cnt);
        if (isNullable) {
          writer.format(" || __args[%s] == null)", cnt);
        }
        break;
      case OBJECT:
        if (paramTypeInfo.isVariable() && ((TypeVariableInfo) paramTypeInfo).isClassParam()) {
          writer.format("j_%s.accept(__args[%s])", paramTypeInfo.getName(), cnt);
        } else {
          writer.format("typeof __args[%s] !== 'function'", cnt);
        }
        break;
      case FUNCTION:
        writer.format("typeof __args[%s] === 'function'", cnt);
        break;
      case THROWABLE:
        writer.format("typeof __args[%s] === 'object'", cnt);
        break;
      case DATA_OBJECT:
        writeConditionParamType(((DataObjectTypeInfo)paramTypeInfo).getTargetJsonType(), isNullable, cnt, writer);
        break;
      case OTHER:
        if (paramTypeInfo.getName().equals(Number.class.getCanonicalName())) {
          writer.format("typeof __args[%s] === 'number'", cnt);
          break;
        }
      default:
        if (!isNullable) {
          writer.print("(");
        }
        writer.format("typeof __args[%s] === 'object'", cnt);
        if (!isNullable) {
          writer.format(" && __args[%s] != null)", cnt);
        }
    }
  }

  protected abstract void genMethodAdapter(M model, MethodInfo method, List<String> args, CodeWriter writer);


  protected void genLicenses(PrintWriter writer) {
    writer.println("/*");
    writer.println(" * Copyright 2014 Red Hat, Inc.");
    writer.println(" *");
    writer.println(" * Red Hat licenses this file to you under the Apache License, version 2.0");
    writer.println(" * (the \"License\"); you may not use this file except in compliance with the");
    writer.println(" * License.  You may obtain a copy of the License at:");
    writer.println(" *");
    writer.println(" * http://www.apache.org/licenses/LICENSE-2.0");
    writer.println(" *");
    writer.println(" * Unless required by applicable law or agreed to in writing, software");
    writer.println(" * distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT");
    writer.println(" * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the");
    writer.println(" * License for the specific language governing permissions and limitations");
    writer.println(" * under the License.");
    writer.println(" */");
  }
}
