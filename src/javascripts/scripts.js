const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__list--mobile');
const showTabletLinks = document.querySelectorAll('.tablet--show');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  if (window.innerWidth > 768) {
    showTabletLinks.forEach((link, i) => {
      showTabletLinks[i].classList.toggle('hide');
    });
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    if (mobileMenu.classList.contains('open')) {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    }
  }
});
