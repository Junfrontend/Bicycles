'use strict';
var toggle = document.querySelector('.header__toggle');
var nav = document.querySelector('.header__nav');

nav.classList.add('header__nav--menu-closed');
toggle.classList.remove('header__toggle--no-js');

toggle.addEventListener('click', function () {
  nav.classList.toggle('header__nav--menu-closed');
  toggle.classList.toggle('header__toggle--opened');
});
