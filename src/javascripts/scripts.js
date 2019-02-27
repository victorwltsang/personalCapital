// Add your scripts here
$(document).ready(() => {
  $('.nav__hamburger').click(function () {
    if ($(window).width() > 768) {
      $('.tablet--show').toggle();
    }

    $(this).toggleClass('open');
    $('.nav__list--mobile').toggleClass('open');
  });

  $(window).on('resize', () => {
    if ($(window).width() > 1024) {
      if ($('.nav__list--mobile').hasClass('open')) {
        $('.nav__list--mobile').toggleClass('open');
        $('.nav__hamburger').toggleClass('open');
      }
    }
  });
});
