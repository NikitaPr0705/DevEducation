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
displayValue.value = '0';






// add event listeners
operatorButtons.forEach(entry => {
  entry.addEventListener('click', clickOnOperator) ;
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
    console.log('clickOnClearButton');
}

function clickOnOperator(event) {

  operator = event.target.value;
  isOperClicked = !!operator;
  console.log(operator);
};


function numberClick(event) {
  if(isOperClicked === false && variable1.length < 10) {
    variable1 += event.target.value;
    displayValue.value = variable1;
    operator = event.target.value;
  } else if(isOperClicked === true && variable2.length < 10){
    displayValue.value = '0'
    variable2 += event.target.value;
    displayValue.value = variable2;
  };

  console.log('var1 :', variable1, 'var2 :', variable2);
}

function clickOnDot(event) {
  if(isOperClicked === false) {
  variable1 += event.target.value;
  displayValue.value = variable1;
  } else if(isOperClicked === true) {
    variable2 += event.target.value;
    displayValue.value = variable2;
  }
  console.log('var1 : ', variable1, 'var2 : ', variable2);
}

function clickOnEqual(event) {
  if(variable1 === '' || variable2 === '' && isOperClicked === true) {
    variable1 = '';
    variable2 = '';
    operator = '';
    displayValue.value = 0;
    console.log('equalButton')
  } else if(variable1 === '' || variable2 === '') {
    variable1 = '';
    variable2 = '';
    operator = '';
    displayValue.value = 0;
    console.log('equalButtonClicked')
  }
  else {
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
    resultOfOperation = sum(variable1, variable2);
    break;
    case '-':
    resultOfOperation = substr(variable1, variable2);
    break;
    case '*':
    resultOfOperation = multiple(variable1, variable2);
    break;
    case '/':
    resultOfOperation = divide(variable1, variable2);
    break;
  };
  isOperClicked = false;
  console.log(`The result of calc is ${resultOfOperation}, equality operation is done!`);
  variable1 = '';
  variable2 = '';
  return resultOfOperation;
}

function sum(variable1, variable2) {
  return variable1 + variable2;
};

function substr(variable1, variable2) {
  return variable1 - variable2;
};

function multiple(variable1, variable2) {
  return variable1 * variable2;
};

function divide(variable1, variable2) {
  return variable1 / variable2;
};

