'use strict';

// Selecting elements
const resultEl = document.getElementById('result');

// Selecting buttons
const btnReverse = document.querySelector('.reverse');
const btnPalindrome = document.querySelector('.palindrome');
const btnCharCount = document.querySelector('.char-count');
const btnWordCount = document.querySelector('.word-count');
const btnSearch = document.querySelector('.search');

// Declaring main variable
let btnActive;

const changeActiveButton = function (newButton) {
  newButton.classList.add('active');
  if (btnActive !== undefined) {
    btnActive.classList.remove('active');
  }
  btnActive = newButton;
};

const getText = function () {
  const textAreaEl = document.getElementById('my-text-box');
  return textAreaEl.value.toLowerCase();
};

const checkTextValidation = function (text) {
  if (text !== '') {
    return true;
  }
  return false;
};

const reverse = function (text) {
  let str = '';
  for (let i = text.length - 1; i >= 0; i--) {
    str += text[i];
  }
  return str;
};

btnReverse.addEventListener('click', () => {
  changeActiveButton(btnReverse);
  const text = getText();
  if (checkTextValidation(text)) {
    resultEl.textContent = `The reversed text is: ${reverse(text)}`;
  } else {
    resultEl.innerHTML = 'Either or both input fields are empty';
  }
});

btnPalindrome.addEventListener('click', () => {
  changeActiveButton(btnPalindrome);
  const text = getText();
  if (checkTextValidation(text)) {
    if (text === reverse(text)) {
      resultEl.textContent = 'It is a palindrome';
    } else {
      resultEl.innerHTML = `It is ${'NOT'.bold()} a palindrome`;
    }
  } else {
    resultEl.innerHTML = 'Either or both input fields are empty';
  }
});

const countCharacters = function (text) {
  return text.trim().length;
};

btnCharCount.addEventListener('click', () => {
  changeActiveButton(btnCharCount);
  const text = getText();
  if (checkTextValidation(text)) {
    resultEl.textContent = `The character count is: ${countCharacters(text)}`;
  } else {
    resultEl.innerHTML = 'Either or both input fields are empty';
  }
});

const isSpace = function (text) {
  return text !== '';
};

const countWords = function (text) {
  const words = text.split(' ').filter(isSpace);
  return words.length;
};

btnWordCount.addEventListener('click', () => {
  changeActiveButton(btnWordCount);
  const text = getText();
  if (checkTextValidation(text)) {
    resultEl.textContent = `The word count is: ${countWords(text)}`;
  } else {
    resultEl.innerHTML = 'Either or both input fields are empty';
  }
});

btnSearch.addEventListener('click', () => {
  changeActiveButton(btnSearch);
  const searchTextEl = document.getElementById('search-text').value;
  const text = getText();
  if (checkTextValidation(text) && searchTextEl !== '') {
    if (text.includes(searchTextEl)) {
      resultEl.innerHTML = `The text contains '${searchTextEl.bold()}'`;
    } else {
      resultEl.innerHTML = `The text does ${'NOT'.bold()} contains '${searchTextEl.bold()}'`;
    }
  } else {
    resultEl.innerHTML = 'Either or both input fields are empty';
  }
});
