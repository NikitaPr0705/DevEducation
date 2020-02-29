"use strict"

const buttons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const displayValue = document.getElementById("viewinput");
const clearButton = document.querySelectorAll(".clear");
const equalButton = document.querySelectorAll(".equal");
const dotButton = document.querySelectorAll(".dot");
const result = document.querySelectorAll(".equal");


let variable1 = '';
let variable2 = '';
let operator = '';
let isOperClicked = false;
let isDotClicked = true;
displayValue.value = '0';






// add event listeners
operatorButtons.forEach(entry => {
  entry.addEventListener('click', clickOnOperator);
});

clearButton.forEach(entry => {
  entry.addEventListener('click', clickOnClearButton);
});

buttons.forEach(entry => {
  entry.addEventListener("click", numberClick);
});

dotButton.forEach(entry => {
  entry.addEventListener('click', clickOnDot);
});

equalButton.forEach(entry => {
  entry.addEventListener('click', clickOnEqual);
});


// clicks on buttons
function clickOnClearButton(event) {
  variable1 = '';
  variable2 = '';
  displayValue.value = '0';
  operator = '';
  isOperClicked = false;
  isDotClicked = true;
  console.log('clickOnClearButton');
}

function clickOnOperator(event) {

  operator = event.target.value;
  isOperClicked = !!operator;
  console.log(operator);
};


function numberClick(event) {

  if (isOperClicked === false && variable1.length < 10) {
    variable1 += event.target.value;
    displayValue.value = variable1;
    operator = event.target.value;
  } else if (isOperClicked === true && variable2.length < 10) {
    displayValue.value = '0';
    variable2 += event.target.value;
    displayValue.value = variable2;
  };

  console.log('var1 :', variable1, 'var2 :', variable2);
}

function clickOnDot(event) {
if (isOperClicked === false) {
  if(isDotClicked ===  true && variable1.includes(".")) {
    dotButton = false;
  }
    variable1 += event.target.value;
    displayValue.value = variable1;
    dotButton = true;
  } else if (isOperClicked === true && isDotClicked === true) {
    isDotClicked = false;
    variable2 += event.target.value;
    displayValue.value = variable2;
  } else if(variable2.includes('.')) {
    dotButton = false;
    isDotClicked = false;
  }
  console.log('var1 : ', variable1, 'var2 : ', variable2);
}

function clickOnEqual(event) {
  if (variable1 === '' || variable2 === '' && isOperClicked === true) {
    variable1 = '';
    variable2 = '';
    operator = '';
    displayValue.value = 0;
    console.log('equalButton')
  } else if (variable1 === '' || variable2 === '') {
    variable1 = '';
    variable2 = '';
    operator = '';
    displayValue.value = 0;
    console.log('equalButtonClicked')
  } else {
    variable1 = +variable1;
    variable2 = +variable2;
    displayValue.value = equality(operator);
  }
};


// logic operations
function equality(operation) {
  let resultOfOperation;
  switch (operation) {
    case '+':
      resultOfOperation = calcSum(variable1, variable2);
      break;
    case '-':
      resultOfOperation = calcSubstr(variable1, variable2);
      break;
    case '*':
      resultOfOperation = calcMultiple(variable1, variable2);
      break;
    case '/':
      resultOfOperation = calcDivide(variable1, variable2);
      break;
  };
  isOperClicked = false;
  console.log(`The result of calc is ${resultOfOperation}, equality operation is done!`);
  variable1 = '';
  variable2 = '';
  return resultOfOperation;
}

function calcSum(variable1, variable2) {
  return variable1 + variable2;
};

function calcSubstr(variable1, variable2) {
  return variable1 - variable2;
};

function calcMultiple(variable1, variable2) {
  return variable1 * variable2;
};

function calcDivide(variable1, variable2) {
  return variable1 / variable2;
};