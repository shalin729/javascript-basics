
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
        
        // const i = document .createElement('i');
        // i.className = 'fa-solid fa-pen-to-square';
        // li.appendChild(i);

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





// const inputbox = document.querySelector("#input-box");
// const listContainer = document.querySelector("#list-container");
// const addbutton = document.querySelector(".addbtn");
// const updatebutton = document.querySelector(".updatebtn");
// let editTask = null

// addbutton.addEventListener("click", function(){
//     if(inputbox.value != ""){
//        const li = document.createElement("li");
//     li.innerHTML = `<a class="txt">${inputbox.value}</a><button class="btn"><i class="fa-solid fa-pen-to-square"></i></button><span>\u00d7</span>`;
//     listContainer.appendChild(li);
//     inputbox.value = ''; 
//     saveData();
//     }else{
//         alert("fill input")
//     }
// })

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === 'LI')
//     {
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === 'SPAN')
//     {
//         e.target.parentElement.remove();
//         saveData();
//     }
//     else if(e.target.tagName === 'BUTTON')
//     {
//         editTask = e.target.parentElement;
//         inputbox.value = editTask.querySelector('.txt').textContent;
//         addbutton.style.display = 'none';
//         updatebutton.style.display = 'block';

//     }
// })

// updatebutton.addEventListener('click', function(){
//     if(editTask)
//     {
//         editTask.querySelector('.txt').textContent = inputbox.value;
//         editTask = null;
//         addbutton.style.display = 'block';
//         updatebutton.style.display = 'none';
//         saveData();
//     }
// })
// function saveData(){
//     localStorage.setItem('data', listContainer.innerHTML);
// }

// function showData(){
//     listContainer.innerHTML = localStorage.getItem('data')
// }
// showData()