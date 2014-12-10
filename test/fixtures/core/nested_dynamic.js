(function () {
  define(["foo"], function (test) {
      var a = 1;
    require(["bar" + a], function () {});
  });
})();
