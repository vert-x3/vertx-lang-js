function assertEquals(arg0, arg1, arg2) {
  if (typeof arg2 !== 'undefined') {
    arg0 = arg1;
    arg1 = arg2;
  }
  if (!isNaN(arg0) && !isNaN(arg1)) {
    if (arg0 % 1 === 0 && arg1 % 1 === 0) {
      // (integer, integer)
      Assert["assertEquals(double, double, double)"](arg0, arg1, 0);
    } else {
      // (double, double)
      Assert["assertEquals(double, double, double)"](arg0, arg1, 0.0001);
    }
  } else {
    Assert.assertEquals(arg0, arg1);
  }
}

function assertContains(expected, ar) {
  if (typeof ar !== "object") {
    Assert["fail(java.lang.String)"]("Expecting array but was " + (typeof ar))
  } else {
    // Don't ask me why, I tried several ways but only this one works well
    var newAr = ar.filter(function (val) {
      return val === expected || (typeof val === "object" && JSON.stringify(val) === JSON.stringify(expected))
    })
    if (newAr[0] === undefined) {
      Assert["fail(java.lang.String)"]("Value " + expected.toString() + " not found in array " + ar.toString())
    }
  }
}

module.exports = {
  assertEquals: assertEquals,
  assertContains: assertContains
};
