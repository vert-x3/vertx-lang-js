package io.vertx.lang.js.generator;

import io.vertx.codegen.*;
import io.vertx.codegen.doc.Tag;
import io.vertx.codegen.doc.Token;
import io.vertx.codegen.type.*;

import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import static io.vertx.codegen.type.ClassKind.*;
import static javax.lang.model.element.ElementKind.CLASS;
import static javax.lang.model.element.ElementKind.INTERFACE;
import static javax.lang.model.element.ElementKind.METHOD;

public class JSClassGenerator extends Generator<ClassModel> {
  JSClassGenerator() {
    this.name = "JavaScript";
    this.kinds = Collections.singleton("class");
  }

  @Override
  public String filename(ClassModel model) {
    ClassTypeInfo type = model.getType();
    return "js/" + type.getModuleName() + "-js/" + Helper.convertCamelCaseToUnderscores(type.getSimpleName()) + ".js";
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
    genDoc(model, writer);

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

  private void genMethod(ClassModel model, String methodName, String ind, boolean genStatic, @SuppressWarnings("SameParameterValue") Predicate<MethodInfo> methodFilter, PrintWriter writer) {
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

  private void genMethodAdapter(ClassModel model, MethodInfo method, String ind, PrintWriter writer) {
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
//        convReturn(model, ind, method, method.getReturnType(), this::genMethodCall, writer);
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
//        convReturn(model, ind, method, method.getReturnType(), this::genMethodCall, writer);
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

  //  @SuppressWarnings("unused")
//  privae void arVal(ClassModel model, String ind, MethodInfo method, PrintWriter writer) {
//    writer.print("ar.result()");
//  }
  private void arVal(PrintWriter writer) {
    writer.print("ar.result()");
  }

  @SuppressWarnings("unused")
  private void basicVal(PrintWriter writer) {
    writer.print("jVal");
  }
//  @SuppressWarnings("unused")
//  private void basicVal(ClassModel model, String ind, MethodInfo method, PrintWriter writer) {
//    writer.print("jVal");
//  }

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

  private void convReturn(ClassModel model, String ind, MethodInfo method, TypeInfo returnType, Consumer<PrintWriter> templ, PrintWriter writer) {
    ClassKind kind = returnType.getKind();
    if (kind == LIST) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(0);
      ClassKind elementKind = elementType.getKind();
      if (elementKind.json) {
        writer.print("utils.convReturnListSetJson(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == DATA_OBJECT) {
        writer.print("utils.convReturnListSetDataObject(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == ENUM) {
        writer.print("utils.convReturnListSetEnum(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == API) {
        writer.print("utils.convReturnListSetVertxGen(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(", ");
        writer.print(elementType.getRaw().getSimpleName());
        writer.print(")");
      } else if ("java.lang.Long".equals(elementType.getName())) {
        writer.print("utils.convReturnListSetLong(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else {
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      }
    } else if (kind == SET) {
      TypeInfo elementType = ((ParameterizedTypeInfo) returnType).getArg(0);
      ClassKind elementKind = elementType.getKind();
      if (elementKind.json) {
        writer.print("utils.convReturnListSetJson(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == DATA_OBJECT) {
        writer.print("utils.convReturnListSetDataObject(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == ENUM) {
        writer.print("utils.convReturnListSetEnum(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else if (elementKind == API) {
        writer.print("utils.convReturnListSetVertxGen(");
//        templ.gen(model, ind, method, writer);
        templ.accept(writer);
        writer.print(", ");
        writer.print(elementType.getRaw().getSimpleName());
        writer.print(")");
      } else if ("java.lang.Long".equals(elementType.getName())) {
        writer.print("utils.convReturnListSetLong(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else {
        writer.print("utils.convReturnSet(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      }
    } else if (kind == MAP) {
      writer.print("utils.convReturnMap(");
      templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    } else if (kind.json) {
      writer.print("utils.convReturnJson(");
      templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    } else if (kind.basic) {
      if ("java.lang.Long".equals(returnType.getName())) {
        writer.print("utils.convReturnLong(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(")");
      } else {
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      }
    } else if (kind == API) {
      writer.print("utils.convReturnVertxGen(");
      writer.print(returnType.getRaw().getSimpleName());
      writer.print(", ");
      templ.accept(writer);
//        templ.gen(model, ind, method, writer);
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
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    } else if (kind == DATA_OBJECT) {
      writer.print("utils.convReturnDataObject(");
      templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    } else if (kind == THROWABLE) {
      writer.print("utils.convReturnThrowable(");
      templ.accept(writer);
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    } else if (kind == HANDLER) {
      ParameterizedTypeInfo type = (ParameterizedTypeInfo) returnType;
      if (type.getArg(0).getKind() == ASYNC_RESULT) {
        writer.print("utils.convReturnHandlerAsyncResult(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
        writer.print(", function(result) { return ");
        convParam(model, method, ind, null, false, new ParamInfo(0, "result", null, (((ParameterizedTypeInfo) (type).getArg(0))).getArg(0)), writer);
        writer.print("; })");
      } else {
        writer.print("utils.convReturnHandler(");
        templ.accept(writer);
//        templ.gen(model, ind, method, writer);
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
//        templ.gen(model, ind, method, writer);
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
//        templ.gen(model, ind, method, writer);
      writer.print(")");
    }
  }

  private void convParam(ClassModel model, MethodInfo method, String ind, String argName, boolean overloaded, ParamInfo param, PrintWriter writer) {
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

  private void unwrapToJava(MethodInfo method, ParamInfo param, TypeInfo unwrappedType, String unwrappedName, PrintWriter writer) {
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

  private String renderLinkToHtml(Tag.Link link) {
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

  private String getJSDocType(TypeInfo type) {
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

  private void genDoc(ClassModel model, PrintWriter writer) {
    writer.println("/**");
    if (model.getIfaceComment() != null) {
      writer.println(Helper.removeTags(model.getIfaceComment()));
    }
    writer.println(" @class");
    writer.println("*/");
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

  private String getModuleName(ClassTypeInfo type) {
    return type.getModuleName() + "-js/" + Case.CAMEL.to(Case.SNAKE, type.getSimpleName());
  }


  private void genLicenses(PrintWriter writer) {
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
