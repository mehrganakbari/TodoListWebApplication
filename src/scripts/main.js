import "/src/common/index.css"

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
reminder.onclick = function(){
    alert('There is no application for this button yet')
}

const tags = document.querySelectorAll('#Tags')
tags.onclick = function(){
    alert('There is no application for this button yet')
}