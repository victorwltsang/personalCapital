// Add your scripts here
$(document).ready(() => {
  $('.nav__hamburger').click(function () {
    $(this).toggleClass('open');
    $('.nav__list--mobile').toggleClass('open');
    if ($(window).width() > 768) {
      $('.tablet--show ').toggle();
    }
  });

  $(window).on('resize', () => {
    if ($(window).width() > 1024 && $('.nav__list--mobile').hasClass('open')) {
      $('.tablet--show').toggle();
    }
    if ($(window).width() > 1024) {
      if ($('.nav__list--mobile').hasClass('open')) {
        $('.nav__list--mobile').toggleClass('open');
        $('.nav__hamburger').toggleClass('open');
      }
    }
  });
});
