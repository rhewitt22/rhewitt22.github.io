$(function () {
  var $navToggle = $('.nav-toggle'),
      $topNav = $('.top-nav');

      $navToggle.on('click', function () {
        console.log("clicked nav toggle button");
        $topNav.toggle();
      });
});