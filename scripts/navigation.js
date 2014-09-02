$(function () {
  var $navToggle = $('.nav-toggle'),
      $topNav = $('.top-nav');

      $navToggle.on('click', function () {
        $topNav.toggle();
      });
});