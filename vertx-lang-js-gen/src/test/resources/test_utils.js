module.exports = {
  assertEquals: function(arg0, arg1, arg2) {
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
};
