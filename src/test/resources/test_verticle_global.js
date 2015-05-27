console.log("in test verticle global");

// try and access a global variable - this should fail as we run verticles in use_strict mode which
// prohibits this

x = 1;