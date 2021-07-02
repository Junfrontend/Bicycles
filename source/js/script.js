'use strict';
var toggle = document.querySelector('.header__toggle');
var nav = document.querySelector('.header__nav');
var mainBlock = document.querySelector('.main-block--no-js');
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var sendButton = document.querySelector('.form__button');
var body = document.querySelector('body');

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
