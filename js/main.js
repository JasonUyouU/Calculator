var buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', function() {
  document.getElementById('answer').value += '1'
});
var buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', function() {
  document.getElementById('answer').value += '2';
});
var buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', function() {
  document.getElementById('answer').value += '3';
});
var buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', function() {
  document.getElementById('answer').value += '+';
});
var buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', function() {
  document.getElementById('answer').value += '4';
});
var buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', function() {
  document.getElementById('answer').value += '5';
});
var buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', function() {
  document.getElementById('answer').value += '6';
});
var buttonMinus = document.getElementById('minus');
buttonMinus.addEventListener('click', function() {
  document.getElementById('answer').value += '-';
});
var buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', function() {
  document.getElementById('answer').value += '7';
});
var buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', function() {
  document.getElementById('answer').value += '8';
});
var buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', function() {
  document.getElementById('answer').value += '9';
});
var buttonMultiply = document.getElementById('multiply');
buttonMultiply.addEventListener('click', function() {
  document.getElementById('answer').value += '*';
});
var buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function() {
  document.getElementById('answer').value = '';
});
var buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', function() {
  document.getElementById('answer').value += '0';
});
var buttonEquals = document.getElementById('equals');
buttonEquals.addEventListener('click', function() {
  document.getElementById('answer').value = eval(document.getElementById('answer').value);
});
var buttonDivide = document.getElementById('divide');
buttonDivide.addEventListener('click', function() {
  document.getElementById('answer').value += '/';
});
