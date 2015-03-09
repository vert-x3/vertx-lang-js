function renderSource(elt, source) {

    // A bit twisted at the moment due to classloading issues but that works
    var type = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codetrans.CodeTranslator");
    var type2 = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codetrans.JavaScriptLang");
    var JArray = Java.type("java.lang.Object[]");
    var arr = new JArray(1);
    arr[0] = processingEnv;
    var translator = type.getConstructors()[0].newInstance(arr);
    var lang = type2.newInstance();
    try {
        var translation = translator.translate(elt, lang);
        return translation
    } catch (Err) {
        java.lang.System.out.println("Cannot generate: " + elt + " from " + elt.getEnclosingElement());
        Err.printStackTrace();
        return "todo";
    }
}

function isDataObject(elt) {
  var annotation = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codegen.annotations.DataObject");
  while (elt != null) {
    var kind = elt.getKind().name();
    if (kind === "CLASS" || kind === "INTERFACE") {
      return elt.getAnnotation(annotation);
    }
    elt = elt.getEnclosingElement();
  }
  return false;
}

function toTypeLink(elt, coordinate) {
    var baseLink;
    if (isDataObject(elt)) {
      if (coordinate == null) {
        baseLink = "../";
      } else {
        baseLink = "../../" + coordinate.getArtifactId() + "/"
      }
      return baseLink + "cheatsheet/" + elt.getSimpleName().toString() + ".html";
    } else {
      if (coordinate == null) {
        baseLink = "";
      } else {
        baseLink = "../../" + coordinate.getArtifactId() + "/js/"
      }
      var caseType = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codegen.Case");
      var camel = caseType.getField("CAMEL").get(null);
      var snake = caseType.getField("SNAKE").get(null);
      return baseLink + "jsdoc/" + snake.format(camel.parse(elt.getSimpleName().toString())) + "-" + elt.getSimpleName() + ".html";
    }
}

function toMethodLink(elt, coordinate) {
    var typeElt = elt.getEnclosingElement();
    var baseLink =  toTypeLink(typeElt, coordinate);
    if (baseLink.indexOf("cheatsheet") != -1) {
      return baseLink + '#' + java.beans.Introspector.decapitalize(elt.getSimpleName().toString().substring(3));
    } else {
      return baseLink + '#' + elt.getSimpleName();
    }
}

function toConstructorLink(elt, coordinate) {
    return "todo";
}

function resolveLabel(elt, label) {
  if (isDataObject(elt)) {
    if (elt.getKind().name() === "METHOD") {
      return java.beans.Introspector.decapitalize(elt.getSimpleName().toString().substring(3));
    }
  }
  return label;
}
