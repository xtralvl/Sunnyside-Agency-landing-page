const hamburgerButton = document.getElementById('hamburger-icon')!;
const mobileMenu = document.getElementById('small-screen-nav-container')!;
const overlay = document.getElementById('overlay')!;
const body = document.body;

hamburgerButton.addEventListener('click', () => {
  const menuIsOpen = hamburgerButton.classList.toggle('menu-open');
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('active');

  // Disable or enable scrolling
  body.classList.toggle('no-scroll', menuIsOpen);
});
