var STDOUT = java.lang.System.out;

STDOUT.println("starting test");

var myerr = new SyntaxError("mymessage", "somefile.js", 12345);

STDOUT.println("message is: " + myerr.message);
STDOUT.println("fileName is: " + myerr.fileName);
STDOUT.println("lineNumber is: " + myerr.lineNumber);

myerr.message = "mymessage";
myerr.fileName = "somefile.js";
myerr.lineNumber = 12345;

STDOUT.println("message is: " + myerr.message);
STDOUT.println("fileName is: " + myerr.fileName);
STDOUT.println("lineNumber is: " + myerr.lineNumber);




