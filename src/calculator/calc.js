"use strict"

const buttons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const displayValue = document.getElementById("viewinput");
const clearButton = document.querySelectorAll(".clear");
const equalButton = document.querySelectorAll(".equal");
const dotButton = document.querySelectorAll(".dot");



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
  entry.addEventListener('click', equal);
});

// clicks on buttons
function clickOnClearButton(event) {
    variable1 = '';
    variable2 = '';
    displayValue.value = '0';
    operator = '';
    console.log('clickOnClearButton')
}

function clickOnOperator(event) {
  operator = event.target.value;
  console.log(operator);
};



function numberClick(event) {
  variable1 += event.target.value;
  displayValue.value = variable1;
  // if(operator === true) {
  //   displayValue.value = '0';
  // }

  console.log('var1 :', variable1, 'var2 :', variable2);
}

function clickOnDot(event) {
  variable1 += event.target.value;
  displayValue.value = variable1;
  console.log('var1 : ', variable1, 'var2 : ', variable2);
}


// logic operations
function equal(event) {
    logic(operator);
    console.log('equal')
}

function sum(variable1, variable2) {
  return variable1 + variable2;
}

function substr(variable1, variable2) {
  return variable1 - variable2;
}

function multiple(variable1, variable2) {
  return variable1 * variable2;
}

function divide(variable1, variable2) {
  return variable1 / variable2;
}


function logic(operation) {
  switch (operation) {
    case '+': return sum(variable1, variable2);
    break;
    case '-': return substr(variable1, variable2);
    break;
    case '*': return multiple(variable1, variable2);
    break;
    case '/': return divide(variable1, variable2);
    break;
    default : break;
  };
};

