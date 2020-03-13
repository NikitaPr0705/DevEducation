'use strict'

const lsRadio = document.querySelector('.localstorage-radio');
const indexDbRadio = document.querySelector('.indexedDB-radio');

const allInputs = document.querySelectorAll('.crud__input');


const userId = document.querySelector('.crud__id');
const firstName = document.querySelector('.crud__first-name');
const lastName = document.querySelector('.crud__last-name');
const age = document.querySelector('.crud__age');

const createButton = document.querySelector('.buttons__create-button');
const updateButton = document.querySelector('.buttons__update-button');
const deleteButton = document.querySelector('.buttons__delete-button');

createButton.addEventListener('click', () => {
    for(let i  = 0; i < allInputs.length; i++) {
        userDataArray.push(allInputs[i].value);
        console.log('createButton');
    }
});

let userDataArray = [];

// createButton.addEventListener('click', addDataToTable);

// const createObj = {
//     userIdKey: +userId.value,
//     firstNameKey: firstName.value,
//     lastNameKey: lastName.value,
//     ageKey: +age.value,
// };
// console.log(createObj);



// function addDataToTable(event) {

//     let idCell = document.querySelector(".id-cell");
//     idCell.innerHTML = createObj.userIdKey;
//     let idCol = document.getElementsByClassName(".id-cell");
//     // createObj.userIdKey.append(idCell);
//     idCol.append(idCell);
//     console.log('createButtonClicked');

    // idCell += createObj.userIdKey;
    // console.log("lalalal")
// };


// function updateDataToTable() {
//     idCell.innerHTML = createObj.userIdKey; // перезаписывает значение
// }

// updateButton.onclick = function () {
//     console.log('update');
// }

// deleteButton.onclick = function () {
//     console.log('delete');
// }


//////////////

// в тестах объявить AList в it, и он становится общим для всех



// localStorage




// localStorage - объект в DOM 
//

