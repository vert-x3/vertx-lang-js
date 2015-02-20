var STDOUT = java.lang.System.out;

STDOUT.println("starting test");

//var myerr = new TypeError("mymessage", "somefile.js", 12345);
//
//STDOUT.println("message is: " + myerr.message);
//STDOUT.println("fileName is: " + myerr.fileName);
//STDOUT.println("lineNumber is: " + myerr.lineNumber);
//
//myerr.message = "mymessage";
//myerr.fileName = "somefile.js";
//myerr.lineNumber = 12345;
//
//throw myerr;

function MySyntaxError(message, fileName, lineNumber, stack) {
  this.name = 'MySyntaxError';
  this.message = message;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
  this.stack = stack;
}
//MySyntaxError.prototype = Object.create(SyntaxError.prototype);
//MySyntaxError.prototype.constructor = MySyntaxError;

var myerr = new MySyntaxError("mymessage", "somefile.js", 12345, null);

throw myerr;



