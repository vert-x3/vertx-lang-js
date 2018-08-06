package io.vertx.lang.js.generator;

import io.vertx.codegen.*;
import io.vertx.codegen.doc.Tag;
import io.vertx.codegen.doc.Token;
import io.vertx.codegen.type.*;

import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static io.vertx.codegen.type.ClassKind.*;
import static io.vertx.codegen.type.ClassKind.FUNCTION;
import static javax.lang.model.element.ElementKind.CLASS;
import static javax.lang.model.element.ElementKind.INTERFACE;
import static javax.lang.model.element.ElementKind.METHOD;

@SuppressWarnings("WeakerAccess")
public abstract class AbstractJSClassGenerator<M extends ClassModel> extends Generator<M> {
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
    ClassKind kind = type.getKind();
    if (kind == STRING) {
      return "string";
    } else if (kind == PRIMITIVE || kind == BOXED_PRIMITIVE) {
      String simpleName = type.getSimpleName();
      if ("boolean".equalsIgnoreCase(simpleName)) {
        return "boolean";
      } else if ("char".equals(simpleName) || "Character".equals(simpleName)) {
        return "string";
      } else {
        return "number";
      }
    } else if (kind == JSON_OBJECT) {
      return "Object";
    } else if (kind == DATA_OBJECT) {
      return "Object";
    } else if (kind == ENUM) {
      return "Object";
    } else if (kind == API) {
      return type.getRaw().getSimpleName();
    } else if (kind == MAP) {
      //`Map` before `collection`, because of MAP.collection is true
      return "Object.<string, " + getJSDocType(((ParameterizedTypeInfo) type).getArg(1)) + ">";
    } else if (kind.collection) {
      return "Array.<" + getJSDocType(((ParameterizedTypeInfo) type).getArg(0)) + ">";
    } else if (kind == OBJECT) {
      return "Object";
    } else if (kind == HANDLER || kind == FUNCTION) {
      return "function";
    } else {
      return "todo";
    }
  }

  protected void convParam(M model, MethodInfo method, String ind, String argName, boolean overloaded, ParamInfo param, PrintWriter writer) {
    String paramName = overloaded ? argName : param.getName();
    ClassKind paramKind = param.getType().getKind();
    boolean funct = paramKind == FUNCTION;
    if (paramKind == HANDLER || funct) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) param.getType();
      if (type.getArg(0).getKind() == ASYNC_RESULT) {
        ParameterizedTypeInfo asyncType = (ParameterizedTypeInfo) type.getArg(0);
        if (param.isNullable()) {
          writer.print(paramName);
          writer.print(" == null ? null : ");
        }
        writer.println("function(ar) {");
        if (funct) {
          writer.print(ind);
          writer.println("    var jRet;");
        }
        writer.print(ind);
        writer.println("    if (ar.succeeded()) {");
        writer.print(ind);
        writer.print("      ");
        if (funct) {
          writer.print("jRet = ");
        }
        writer.print(paramName);
        writer.print("(");
        if ("java.lang.Void".equals(asyncType.getArg(0).getName())) {
          writer.print("null");
        } else {
          convReturn(model, ind, method, asyncType.getArg(0), this::arVal, writer);
        }
        writer.println(", null);");
        writer.print(ind);
        writer.println("    } else {");
        writer.print(ind);
        writer.print("      ");
        if (funct) {
          writer.print("jRet = ");
        }
        writer.print(paramName);
        writer.println("(null, ar.cause());");
        writer.print(ind);
        writer.println("    }");
        if (funct) {
          writer.print(ind);
          writer.println("    return jRet;");
        }
        writer.print(ind);
        writer.print("  }");
      } else if ("java.lang.Void".equals(type.getArg(0).getName())) {
        writer.print(paramName);
      } else {
        if (param.isNullable()) {
          writer.print(paramName);
          writer.print(" == null ? null : ");
        }
        writer.println("function(jVal) {");
        writer.print(ind);
        writer.print("    ");
        if (funct) {
          writer.print("var jRet = ");
        }
        writer.print(paramName);
        writer.print("(");
        convReturn(model, ind, method, type.getArg(0), this::basicVal, writer);
        writer.println(");");
        if (funct) {
          writer.print(ind);
          writer.print("    return ");
          unwrapToJava(method, param, type.getArg(1), "jRet", writer);
          writer.println(";");
        }
        writer.print(ind);
        writer.print("  }");
      }
    } else {
      unwrapToJava(method, param, param.getType(), paramName, writer);
    }
  }

  protected abstract void convReturn(M model, String ind, MethodInfo method, TypeInfo returnType, Consumer<PrintWriter> templ, PrintWriter writer);

  protected void unwrapToJava(MethodInfo method, ParamInfo param, TypeInfo unwrappedType, String unwrappedName, PrintWriter writer) {
    ClassKind kind = unwrappedType.getKind();
    if (kind == JSON_OBJECT) {
      writer.print("utils.convParamJsonObject(");
      writer.print(unwrappedName);
      writer.print(")");
    } else if (kind == JSON_ARRAY) {
      writer.print("utils.convParamJsonArray(");
      writer.print(unwrappedName);
      writer.print(")");
    } else if (kind == DATA_OBJECT) {
      writer.print(unwrappedName);
      writer.print(" != null ? new ");
      writer.print(unwrappedType.getSimpleName());
      writer.print("(new JsonObject(Java.asJSONCompatible(");
      writer.print(unwrappedName);
      writer.print("))) : null");
    } else if (kind == ENUM) {
      if (param.isNullable()) {
        writer.print(unwrappedName);
        writer.print(" == null ? null : ");
      }
      writer.print(unwrappedType.getName());
      writer.print(".valueOf(");
      writer.print(unwrappedName);
      writer.print(")");
    } else if (kind == OBJECT) {
      if (unwrappedType.isVariable()) {
        TypeVariableInfo type = (TypeVariableInfo) unwrappedType;
        if (type.isClassParam()) {
          writer.print("j_");
          writer.print(unwrappedType.getName());
          writer.print(".unwrap(");
          writer.print(unwrappedName);
          writer.print(")");
        } else {
          ParamInfo classTypeParam = method.resolveClassTypeParam(type);
          if (classTypeParam != null) {
            writer.print("utils.get_jtype(__args[");
            writer.print(classTypeParam.getIndex());
            writer.print("]).unwrap(");
            writer.print(unwrappedName);
            writer.print(")");
          } else {
            writer.print("utils.convParamTypeUnknown(");
            writer.print(unwrappedName);
            writer.print(")");
          }
        }
      } else {
        writer.print("utils.convParamTypeUnknown(");
        writer.print(unwrappedName);
        writer.print(")");
      }
    } else if (kind.basic) {
      if ("java.lang.Byte".equals(unwrappedType.getName())) {
        writer.print("utils.convParamByte(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Short".equals(unwrappedType.getName())) {
        writer.print("utils.convParamShort(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Integer".equals(unwrappedType.getName())) {
        writer.print("utils.convParamInteger(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Long".equals(unwrappedType.getName())) {
        writer.print("utils.convParamLong(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Float".equals(unwrappedType.getName())) {
        writer.print("utils.convParamFloat(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Double".equals(unwrappedType.getName())) {
        writer.print("utils.convParamDouble(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Character".equals(unwrappedType.getName())) {
        writer.print("utils.convParamCharacter(");
        writer.print(unwrappedName);
        writer.print(")");
      } else {
        writer.print(unwrappedName);
      }
    } else if (kind == THROWABLE) {
      writer.print("utils.convParamThrowable(");
      writer.print(unwrappedName);
      writer.print(")");
    } else if (kind == LIST) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) unwrappedType;
      TypeInfo arg = type.getArg(0);
      String argName = arg.getName();
      ClassKind argKind = arg.getKind();
      //Generics cannot be primitive
      if ("java.lang.Long".equals(argName)) {
        writer.print("utils.convParamListLong(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Short".equals(argName)) {
        writer.print("utils.convParamListShort(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Byte".equals(argName)) {
        writer.print("utils.convParamListByte(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == API) {
        writer.print("utils.convParamListVertxGen(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_OBJECT) {
        writer.print("utils.convParamListJsonObject(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_ARRAY) {
        writer.print("utils.convParamListJsonArray(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == DATA_OBJECT) {
        writer.print("utils.convParamListDataObject(");
        writer.print(unwrappedName);
        writer.print(", function(json) { return new ");
        writer.print(arg.getSimpleName());
        writer.print("(json); })");
      } else if (argKind == ENUM) {
        writer.print("utils.convParamListEnum(");
        writer.print(unwrappedName);
        writer.print(", function(val) { return Packages.");
        writer.print(arg.getName());
        writer.print(".valueOf(val); })");
      } else {
        if (param.isNullable()) {
          writer.print(unwrappedName);
          writer.print("== null ? null : ");
        }
        writer.print("utils.convParamListBasicOther(");
        writer.print(unwrappedName);
        writer.print(")");
      }
    } else if (kind == SET) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) unwrappedType;
      TypeInfo arg = type.getArg(0);
      String argName = arg.getName();
      ClassKind argKind = arg.getKind();
      //Generics cannot be primitive
      if ("java.lang.Long".equals(argName)) {
        writer.print("utils.convParamSetLong(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Short".equals(argName)) {
        writer.print("utils.convParamSetShort(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Byte".equals(argName)) {
        writer.print("utils.convParamSetByte(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == API) {
        writer.print("utils.convParamSetVertxGen(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_OBJECT) {
        writer.print("utils.convParamSetJsonObject(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_ARRAY) {
        writer.print("utils.convParamSetJsonArray(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == DATA_OBJECT) {
        writer.print("utils.convParamSetDataObject(");
        writer.print(unwrappedName);
        writer.print(", function(json) { return new ");
        writer.print(arg.getSimpleName());
        writer.print("(json); })");
      } else if (argKind == ENUM) {
        writer.print("utils.convParamSetEnum(");
        writer.print(unwrappedName);
        writer.print(", function(val) { return Packages.");
        writer.print(arg.getName());
        writer.print(".valueOf(val); })");
      } else {
        if (param.isNullable()) {
          writer.print(unwrappedName);
          writer.print("== null ? null : ");
        }
        writer.print("utils.convParamSetBasicOther(");
        writer.print(unwrappedName);
        writer.print(")");
      }
    } else if (kind == CLASS_TYPE) {
      writer.print("utils.get_jclass(");
      writer.print(unwrappedName);
      writer.print(")");
    } else if (kind == MAP) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) unwrappedType;
      TypeInfo arg = type.getArg(1);
      String argName = arg.getName();
      ClassKind argKind = arg.getKind();
      //Generics cannot be primitive
      if ("java.lang.Long".equals(argName)) {
        writer.print("utils.convParamMapLong(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Short".equals(argName)) {
        writer.print("utils.convParamMapShort(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if ("java.lang.Byte".equals(argName)) {
        writer.print("utils.convParamMapByte(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == API) {
        writer.print("utils.convParamMapVertxGen(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_OBJECT) {
        writer.print("utils.convParamMapJsonObject(");
        writer.print(unwrappedName);
        writer.print(")");
      } else if (argKind == JSON_ARRAY) {
        writer.print("utils.convParamMapJsonArray(");
        writer.print(unwrappedName);
        writer.print(")");
      } else {
        writer.print(unwrappedName);
      }
    } else {
      if (param.isNullable()) {
        writer.print(unwrappedName);
        writer.print("== null ? null : ");
      }
      writer.print(unwrappedName);
      writer.print("._jdel");
    }
  }

  protected void arVal(PrintWriter writer) {
    writer.print("ar.result()");
  }

  protected void basicVal(PrintWriter writer) {
    writer.print("jVal");
  }

  protected void genMethod(M model, String methodName, String ind, boolean genStatic, @SuppressWarnings("SameParameterValue") Predicate<MethodInfo> methodFilter, PrintWriter writer) {
    ClassTypeInfo type = model.getType();
    String simpleName = type.getSimpleName();
    Map<String, List<MethodInfo>> methodsByName = model.getMethodMap();
    List<MethodInfo> methodList = methodsByName.get(methodName);
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
        writer.print(ind);
        writer.println("/**");
        if (method.getDoc() != null) {
          Token.toHtml(method.getDoc().getTokens(), ind, this::renderLinkToHtml, "\n", writer);
        }
        writer.println();
        writer.print(ind);
        writer.print(" ");
        if (genStatic) {
          writer.print("@memberof module:");
          writer.println(getModuleName(type));
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
          writer.print(ind);
          writer.print(" @param ");
          writer.print(param.getName());
          writer.print(" {");
          writer.print(getJSDocType(param.getType()));
          writer.print("} ");
          if (param.getDescription() != null) {
            Token.toHtml(param.getDescription().getTokens(), "", this::renderLinkToHtml, "", writer);
            writer.print(" ");
          }
        }
        writer.println();

        if (method.getReturnType().getKind() != VOID) {
          writer.print(ind);
          writer.print(" @return {");
          writer.print(getJSDocType(method.getReturnType()));
          writer.print("}");
          if (method.getReturnDescription() != null) {
            writer.print(" ");
            Token.toHtml(method.getReturnDescription().getTokens(), "", this::renderLinkToHtml, "", writer);
          }
          writer.println();
        }
        writer.print(ind);
        writer.println(" */");

        writer.write(ind);
        if (genStatic) {
          writer.print(simpleName);
        } else {
          writer.print("this");
        }
        writer.print(".");
        writer.print(methodName);
        writer.print(" =");
        if (overloaded) {
          writer.println(" function() {");
        } else {
          writer.print(" function(");
          writer.print(method.getParams().stream().map(ParamInfo::getName).collect(Collectors.joining(", ")));
          writer.println(") {");
        }
        int mcnt = 0;
        writer.print(ind);
        writer.println("  var __args = arguments;");
        for (MethodInfo m : methodList) {
          writer.print(ind);
          if (mcnt == 0) {
            writer.print("  if");
          } else {
            writer.print("else if");
          }
          mcnt++;
          writer.print(" (__args.length === ");
          int paramSize = m.getParams().size();
          writer.print(paramSize);
          int cnt = 0;
          if (paramSize > 0) {
            writer.print(" && ");
          }
          first = true;
          for (ParamInfo param : m.getParams()) {
            if (first) {
              first = false;
            } else {
              writer.print(" && ");
            }
            ClassKind kind = param.getType().getKind();
            if (kind == PRIMITIVE || kind == BOXED_PRIMITIVE) {
              if (param.isNullable()) {
                writer.print("(");
              }
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] ===");
              String paramSimpleName = param.getType().getSimpleName();
              if ("boolean".equalsIgnoreCase(paramSimpleName)) {
                writer.print("'boolean'");
              } else if ("char".equals(paramSimpleName) || "Character".equals(paramSimpleName)) {
                writer.print("'string'");
              } else {
                writer.print("'number'");
              }
              if (param.isNullable()) {
                writer.print(" || __args[");
                writer.print(cnt);
                writer.print("] == null)");
              }
            } else if (kind == STRING || kind == ENUM) {
              if (param.isNullable()) {
                writer.print("(");
              }
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'string'");
              if (param.isNullable()) {
                writer.print(" || __args[");
                writer.print(cnt);
                writer.print("] == null)");
              }
            } else if (kind == CLASS_TYPE) {
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'function'");
            } else if (kind == API) {
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'object' && ");
              if (param.isNullable()) {
                writer.print("(__args[");
                writer.print(cnt);
                writer.print("] == null || ");
              }
              writer.print("__args[");
              writer.print(cnt);
              writer.print("]._jdel");
              if (param.isNullable()) {
                writer.print(")");
              }
            } else if (kind == JSON_ARRAY || kind == LIST || kind == SET) {
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'object' && ");
              if (param.isNullable()) {
                writer.print("(");
              }
              writer.print("__args[");
              writer.print(cnt);
              writer.print("] instanceof Array");
              if (param.isNullable()) {
                writer.print(" || __args[");
                writer.print(cnt);
                writer.print("] == null)");
              }
            } else if (kind == HANDLER) {
              if (param.isNullable()) {
                writer.print("(");
              }
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'function'");
              if (param.isNullable()) {
                writer.print(" || __args[");
                writer.print(cnt);
                writer.print("] == null)");
              }
            } else if (kind == OBJECT) {
              if (param.getType().isVariable() && ((TypeVariableInfo) param.getType()).isClassParam()) {
                writer.print("j_");
                writer.print(param.getType().getName());
                writer.print(".accept(__args[");
                writer.print(cnt);
                writer.print("])");
              } else {
                writer.print("typeof __args[");
                writer.print(cnt);
                writer.print("] !== ");
                writer.print("'function'");
              }
            } else if (kind == FUNCTION) {
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'function'");
            } else if (kind == THROWABLE) {
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'object'");
            } else {
              if (!param.isNullable()) {
                writer.print("(");
              }
              writer.print("typeof __args[");
              writer.print(cnt);
              writer.print("] === ");
              writer.print("'object'");
              if (!param.isNullable()) {
                writer.print(" && __args[");
                writer.print(cnt);
                writer.print("] != null)");
              }
            }
            cnt++;
          }
          writer.println(") {");
          genMethodAdapter(model, m, ind, writer);
          writer.print(ind);
          writer.print("  }");
        }
        writer.println(" else throw new TypeError('function invoked with invalid arguments');");
        writer.print(ind);
        writer.println("};");
        writer.println();
      }
    }
  }

  protected abstract void genMethodAdapter(M model, MethodInfo method, String ind, PrintWriter writer);
}
