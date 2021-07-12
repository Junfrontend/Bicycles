'use strict';
var toggle = document.querySelector('.header__toggle');
var nav = document.querySelector('.header__nav');
var mainBlock = document.querySelector('.main-block--no-js');
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var sendButton = document.querySelector('.form__button');
var body = document.querySelector('body');
var footer = document.querySelector('.footer');
var navWhitePlugOpenMenu = document.querySelector('nav');
var types = document.querySelector('.types__wrapper');

if (nav) {
  nav.classList.add('header__nav--menu-closed');
  nav.classList.remove('header__nav--no-js');
  var anchors = nav.querySelectorAll('a');
}

if (toggle && nav) {
  toggle.classList.remove('header__toggle--no-js');
  toggle.addEventListener('click', function () {
    nav.classList.toggle('header__nav--menu-closed');
    toggle.classList.toggle('header__toggle--opened');
    body.classList.toggle('overflow-hidden');
    navWhitePlugOpenMenu.classList.toggle('header__nav--white-plug');
  });
}

if (mainBlock) {
  mainBlock.classList.remove('main-block--no-js');
}

if (anchors) {
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
      e.preventDefault();
      var id = e.target.getAttribute('href');
      if (window.outerWidth < 1024) {
        nav.classList.toggle('header__nav--menu-closed');
        toggle.classList.toggle('header__toggle--opened');
        body.classList.toggle('overflow-hidden');
        navWhitePlugOpenMenu.classList.toggle('header__nav--white-plug');
      }
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}

if (nameInput && phoneInput) {
  nameInput.addEventListener('input', function () {
    if (nameInput.validity.patternMismatch) {
      nameInput.setCustomValidity('Введите имя русскими буквами с большой буквы)');
    } else {
      nameInput.setCustomValidity('');
    }
  });

  phoneInput.addEventListener('input', function () {
    if (phoneInput.validity.patternMismatch) {
      phoneInput.setCustomValidity('Введите телефон в формате +7 ХХХ ХХХ ХХ ХХ');
    } else {
      phoneInput.setCustomValidity('');
    }
  });

  sendButton.addEventListener('click', function () {
    localStorage.setItem(nameInput.name, nameInput.value);
    localStorage.setItem(phoneInput.name, phoneInput.value);
  });
}

var footerOnBottom = function () {
  if (window.innerHeight >= 4175 && window.innerWidth >= 1440) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 4175 && window.innerWidth >= 1440 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }

  if (window.innerHeight >= 4620 && window.innerWidth >= 1024) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 4620 && window.innerWidth >= 1024 && window.innerWidth <= 1440 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }

  if (window.innerHeight >= 3483 && window.innerWidth >= 768) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 3483 && window.innerWidth >= 768 && window.innerWidth <= 1024 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }

  if (window.innerHeight >= 3946 && window.innerWidth >= 320) {
    footer.classList.add('footer--bottom');
  }
  if (window.innerHeight <= 3946 && window.innerWidth >= 320 && window.innerWidth <= 767 && footer.classList.contains('footer--bottom')) {
    footer.classList.remove('footer--bottom');
  }
};
window.addEventListener('resize', function () {
  footerOnBottom();
});


if (types.children.length % 2 === 0) {
  types.children[types.children.length - 1].classList.add('last-element');
}
