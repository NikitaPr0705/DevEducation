const userId = document.getElementById('id');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');

const createButton = document.querySelectorAll('create');
const readButton = document.querySelectorAll('read');
const updateButton = document.querySelectorAll('update');
const deleteButton = document.querySelectorAll('delete');


const idCell = document.getElementById("id-cell")
const firstNameCell = document.getElementById("first-name-cell");
const lastNameCell = document.getElementById("last-name-cell");
const ageCell = document.getElementById("age-cell");


let userDataArray = [];

createButton.addEventListener('click', addDataToTable) {
    console.log('createButtonClicked');
}

const createObj = {
    userIdKey: +userId.value,
    firstNameKey: firstName.value,
    lastNameKey: lastName.value,
    ageKey: +age.value,
};
console.log(createObj);



function addDataToTable(event) {

    let idCell = document.querySelector(".col");
    idCell.innerHTML = createObj.userIdKey;
    let idCol = document.getElementsByClassName(".col1");
    // createObj.userIdKey.append(idCell);
    idCol.append(idCell);
    // idCell += createObj.userIdKey;
    // console.log("lalalal")
}


// function updateDataToTable() {
//     idCell.innerHTML = createObj.userIdKey; // перезаписывает значение
// }

updateButton.onclick = function () {
    console.log('update');
}

deleteButton.onclick = function () {
    console.log('delete');
}


//////////////

// в тестах объявить AList в it, и он становится общим для всех



// localStorage




// localStorage - объект в DOM 
//