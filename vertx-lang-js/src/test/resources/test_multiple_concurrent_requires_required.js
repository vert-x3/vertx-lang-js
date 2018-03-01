function ConcurrencyTest() {}

// Just a test property, this will sometimes be undefined if the require failed
ConcurrencyTest.testProperty = function() {
  return true;
};

module.exports = ConcurrencyTest;

