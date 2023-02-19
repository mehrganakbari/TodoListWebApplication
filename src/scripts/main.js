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
const reminder = document.querySelectorAll('#Reminder')
reminder.onclick = function () {
    alert('There is no application for this button yet')
}

const tags = document.querySelectorAll('#Tags')
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
})

// to do
addToDoBtn.addEventListener('click', () => {
    addNoteForm.classList.add('hidden')
    addToDoForm.classList.remove('hidden')
})