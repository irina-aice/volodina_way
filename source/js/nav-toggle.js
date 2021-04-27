(function () {
  let navMainOpenedClass = 'main-nav--opened';
  let navMainClosedClass = 'main-nav--closed';
  let navMainNoJsClass = 'main-nav--nojs';
  let logoHiddenClass = 'hidden';

  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');
  let logo = document.querySelector('.logo');

  if (!navMain || !navToggle || !logo) {
    return false;
  }

  navMain.classList.remove(navMainNoJsClass);
  navMain.classList.add(navMainClosedClass);

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains(navMainClosedClass)) {
      navMain.classList.remove(navMainClosedClass);
      navMain.classList.add(navMainOpenedClass);
      logo.classList.add(logoHiddenClass);
    } else {
      navMain.classList.add(navMainClosedClass);
      navMain.classList.remove(navMainOpenedClass);
      logo.classList.remove(logoHiddenClass);
    }
  });
})();
