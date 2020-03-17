'use strict'

const lsRadio = document.querySelector('.localstorage-radio');
const indexDbRadio = document.querySelector('.indexedDB-radio');

const allInputs = document.querySelectorAll('.crud__input');


// const userId = document.querySelector('.crud__id');
// const firstName = document.querySelector('.crud__first-name');
// const lastName = document.querySelector('.crud__last-name');
// const age = document.querySelector('.crud__age');
// const email = document.querySelector('.crud__email');
// const phone = document.querySelector('.crud__phone');
const list = document.querySelector('.table__nav');

const createButton = document.querySelector('.buttons__create-button');
const updateButton = document.querySelector('.buttons__update-button');
const deleteButton = document.querySelector('.buttons__delete-button');



const userDataArray = [];

function clearFields() {
    for(let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = '';
    }
}

function pushDataToTable(arr) {
    const userData = function() {
        this.id = arr[0].value,
        this.firstName = arr[1].value,
        this.lastName = arr[2].value,
        this.age = arr[3].value,
        this.email = arr[4].value,
        this.phone = arr[5].value
    };
    const user = new userData();
    console.log(user);
    return user;
};

createButton.addEventListener('click', () => {
        if (allInputs[0].value == '' || allInputs[1].value == '' || allInputs[2].value == '' || allInputs[3].value == '' || allInputs[4].value == '' || allInputs[5].value == '') {
        clearFields();
        alert('Some fields are empty');
        return
        }
        const person = pushDataToTable(allInputs);
        userDataArray.push(person);
        console.log(person);
        const rowLine = document.createElement('li');
        rowLine.className = 'table__list';
        rowLine.innerHTML += `<div class="first-row-text first-row-text--normal-font id-cell">${person.id}</div>
        <div class="first-row-text first-row-text--normal-font first-name-cell">${person.firstName}</div>
        <div class="first-row-text first-row-text--normal-font last-name-cell">${person.lastName}</div>
        <div class="first-row-text first-row-text--normal-font age-cell">${person.age}</div>
        <div class="first-row-text first-row-text--normal-font email-cell">${person.email}</div>
        <div class="first-row-text first-row-text--normal-font phone-cell">${person.phone}</div>`;
        list.append(rowLine);
        clearFields();
        console.log(userDataArray);
});




updateButton.addEventListener('click', () => {
    const user = pushDataToTable(allInputs);
    const rows = document.querySelectorAll('.table__list');

    for(let i = 0; i < userDataArray.length; i++) {
        if(userDataArray[i].id == user.id) {
            if(user.firstName !== '') {
                userDataArray[i].firstName = user.firstName;
            }
            if(user.lastName !== '') {
                userDataArray[i].lastName = user.lastName;
            }
            if(user.age !== '') {
                userDataArray[i].age = user.age;
            }
            if(user.email !== '') {
                userDataArray[i].email = user.email;
            }
            if(user.phone !== '') {
                userDataArray[i].phone = user.phone;
            }
            rows[i + 1].innerHTML = '';
            rows[i + 1].innerHTML += `<div class="first-row-text first-row-text--normal-font id-cell">${userDataArray[i].id}</div>
            <div class="first-row-text first-row-text--normal-font first-name-cell">${userDataArray[i].firstName}</div>
            <div class="first-row-text first-row-text--normal-font last-name-cell">${userDataArray[i].lastName}</div>
            <div class="first-row-text first-row-text--normal-font age-cell">${userDataArray[i].age}</div>
            <div class="first-row-text first-row-text--normal-font email-cell">${userDataArray[i].email}</div>
            <div class="first-row-text first-row-text--normal-font phone-cell">${userDataArray[i].phone}</div>`
        }
        console.log(userDataArray[i]);
    }

})






// createButton.addEventListener('click', addDataToTable);

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

