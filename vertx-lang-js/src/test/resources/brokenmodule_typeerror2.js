// A broken module

// Deliberate type error:



module.exports = function() {
    var num = 234;
    num.substr(1, 1);
}