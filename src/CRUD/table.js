const userId = document.getElementById('id');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const age = document.getElementById('age');
const createButton = document.getElementById('create');
const readButton = document.getElementById('read');
const updateButton = document.getElementById('update');
const deleteButton = document.getElementById('delete');


const firstNameCell = document.getElementsByClassName("first-name");
const lastNameCell = document.getElementsByClassName("last-name");
const ageCell = document.getElementsByClassName("age");


createButton.onclick = function insertUserData() {
    const createObj = {
        userIdKey : +userId.value,
        firstNameKey : firstName.value,
        lastNameKey : lastName.value,
        ageKey : +age.value,
    };
    console.log(createObj);
}

function addDataToTable() {
    let idCell = document.querySelector(".col");
    idCell.innerHTML = createObj.userIdKey;
    let idCol = document.getElementsByClassName(".col1");
    // createObj.userIdKey.append(idCell);
    idCol.append(idCell);
    // idCell += createObj.userIdKey;
}

// function updateDataToTable() {
//     idCell.innerHTML = createObj.userIdKey; // перезаписывает значение
// }

updateButton.onclick = function() {
    console.log('update');
}

deleteButton.onclick = function() {
    console.log('delete');
}

