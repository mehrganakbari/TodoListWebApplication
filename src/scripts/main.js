import '/src/common/index.css'

// menu responsive
const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('sideMobile')
menuBtn.addEventListener('click', () => {
    menu.classList.replace('-left-40', 'left-0')
})

const close = document.getElementById('closeBtn')
close.addEventListener('click', () => {
    menu.classList.replace('left-0', '-left-40')
})

// Unused buttons
const reminder = document.getElementById('Reminder')
reminder.onclick = function () {
    alert('There is no application for this button yet')
}

const tags = document.getElementById('Tags')
tags.onclick = function () {
    alert('There is no application for this button yet')
}

// output box
var titleElement = document.querySelector('#inputNoteTitel')
titleElement.addEventListener('keydown', function (ev) {
    var titlevalue = ev.target.value;
    document.querySelector('#outputTitle').innerText = titlevalue
})

var discriptionElement = document.querySelector('#inputNoteDiscription')
discriptionElement.addEventListener('keydown', function (ev) {
    var discriptionvalue = ev.target.value;
    document.querySelector('#outputDescription').innerText = discriptionvalue
})

var dateElement = document.querySelector('#inputNoteDate')
dateElement.addEventListener('keydown', function (ev) {
    var datevalue = ev.target.value;
    document.querySelector('#outputDate').innerText = datevalue
})

var prioityElement = document.querySelector('#inputNotePrioity')
prioityElement.addEventListener('keydown', function (ev) {
    var prioityvalue = ev.target.value;
    document.querySelector('#outputPrioity').innerText = prioityvalue
})

// form buttons
// note
const addToDoBtn = document.getElementById('addToDoBtn')
const addToDoForm = document.getElementById('addToDoForm')
const addNoteBtn = document.getElementById('addNoteBtn')
const addNoteForm = document.getElementById('addNoteForm')

addNoteBtn.addEventListener('click', () => {
    addToDoForm.classList.add('hidden')
    addNoteForm.classList.remove('hidden')
    addNoteBtn.classList.add('bg-dark', 'text-lite')
    addToDoBtn.classList.remove('bg-dark', 'text-lite')
})

// to do
addToDoBtn.addEventListener('click', () => {
    addNoteForm.classList.add('hidden')
    addToDoForm.classList.remove('hidden')
    addToDoBtn.classList.add('bg-dark', 'text-lite')
    addNoteBtn.classList.remove('bg-dark', 'text-lite')
})

// todolist
const addToDoFormBtn = document.getElementById('addToDoFormBtn')
addToDoFormBtn.onclick = function(){
    const inputToDoTitel = document.getElementById('inputToDoTitel')
    const inputToDoDiscription = document.getElementById('inputToDoDiscription')

    const todotable = document.createElement('div');
    todotable.innerHTML = `
    <div
      class="w-full pb-10 text-xl gap-1 px-5 lg2:px-0 grid grid-cols-4 lg2:grid-cols-6 ${inputToDoTitel.value}">
      <!-- offset -->
      <div class="col-span-1 z-10 hidden lg2:block"></div>
      <!-- titel -->
      <div class="col-span-1 z-10 text-center text-dark text-sm border-b border-dark py-5 hidden sm:block">
        <p>${inputToDoTitel.value}</p>
      </div>
      <!-- discription -->
      <div class="col-span-2 z-10 text-center text-dark text-sm border-b border-dark py-5 hidden sm:block">
        <p>${inputToDoDiscription.value}</p>
      </div>
      <!-- to do mobile -->
      <div class="col-span-3 z-10 text-center text-dark text-sm border-b border-dark py-5 sm:hidden">
        <p>${inputToDoTitel.value}</p>
        <p class="relative text-xs">${inputToDoDiscription.value}</p>
      </div>
      <!-- check todo -->
      <div class="col-span-1 z-10 text-center text-dark text-sm border-b border-dark py-5">
        <input type="checkbox" name="checkTodo" id="checkTodo" class="form-checkbox bg-lite">
      </div>
      <!-- offset -->
      <div class="col-span-1 z-10 hidden lg2:block"></div>
    </div>
    `;
    document.getElementById("todo").appendChild(todotable);

}

const todoRefresh = document.getElementById('todoRefresh')

todoRefresh.onclick = function(){
    if(checkTodo.checked){
        document.getElementsByClassName(inputToDoTitel.value).style.display = "none";
    }
}
