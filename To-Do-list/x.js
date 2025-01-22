const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addButton = document.querySelector('.addbtn');
const updateButton = document.querySelector('.updatebtn');

let editTask = null;

function AddTask() {
    if (inputBox.value === '') {
        alert('Please Write Something');
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<a class="txt">${inputBox.value}</a>`;
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        const btn = document.createElement('button');
        btn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        btn.className = "btn";
        li.appendChild(btn);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === 'BUTTON') {
        editTask = e.target.parentElement;
        inputBox.value = editTask.querySelector('.txt').textContent;
        addButton.style.display = "none";
        updateButton.style.display = "block";
    }
});

updateButton.addEventListener('click', function () {
    if (editTask) {
        editTask.querySelector('.txt').textContent = inputBox.value;
        inputBox.value = '';
        editTask = null;
        addButton.style.display = "block";
        updateButton.style.display = "none";
        saveData();
    }
});


    

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showData()































// const inputBox = document.getElementById('input-box');
// const listContainer = document.getElementById("list-container");

// function AddTask(){
//     if(inputBox.value === ''){
//         alert("You mist write something!")
//     }else{
//         let li = document.createElement('li')
//         li.innerHTML = inputBox.value
//         listContainer.appendChild(li)
//         let span = document.createElement("span");
//         span.innerHTML = '\u00d7'
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData()
// }

// listContainer.addEventListener('click', function(e){
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle("checked");
//         saveData()
//     }else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove()
//         saveData()
//     }
// }, false)

// function saveData(){
//     localStorage.setItem('data', listContainer.innerHTML);
// }

// function showData(){
//     listContainer.innerHTML = localStorage.getItem('data');
// }
// showData();