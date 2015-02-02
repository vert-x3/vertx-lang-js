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

function toTypeLink(elt) {
    var annotation = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codegen.annotations.DataObject");
    if (elt.getAnnotation(annotation) != null) {
      return "dataobject/" + elt.getSimpleName().toString() + ".html";
    } else {
      var caseType = java.lang.Thread.currentThread().getContextClassLoader().loadClass("io.vertx.codegen.Case");
      var camel = caseType.getField("CAMEL").get(null);
      var snake = caseType.getField("SNAKE").get(null);
      return "jsdoc/" + snake.format(camel.parse(elt.getSimpleName().toString())) + "-" + elt.getSimpleName() + ".html";
    }
}

function toMethodLink(elt) {
    var typeElt = elt.getEnclosingElement();
    return toTypeLink(typeElt) + '#' + elt.getSimpleName();
}

function toConstructorLink(elt) {
    return "todo";
}

function toFieldLink(elt) {
    return "todo";
}
