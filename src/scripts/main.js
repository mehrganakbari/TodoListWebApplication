import "/src/common/index.css";

// menu responsive
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("sideMobile");
menuBtn.addEventListener("click", () => {
  menu.classList.replace("-left-40", "left-0");
});

const close = document.getElementById("closeBtn");
close.addEventListener("click", () => {
  menu.classList.replace("left-0", "-left-40");
});

// Unused buttons
const reminder = document.getElementById("Reminder");
const tags = document.getElementById("Tags");


reminder.onclick = function () {
  alert("There is no application for this button yet");
};


tags.onclick = function () {
  alert("There is no application for this button yet");
};

const inputsArr = [
  "#inputNoteTitel",
  "#inputNoteDiscription",
  "#inputNoteDate",
  "#inputNotePrioity",
];
const outputArr = [
  "#outputTitle",
  "#outputDescription",
  "#outputDate",
  "#outputPrioity",
];

for (let i = 0; i < inputsArr.length; i++) {
  var titleElement = document.querySelector(inputsArr[i]);
  titleElement.addEventListener("keydown", function (ev) {
    var titlevalue = ev.target.value;
    document.querySelector(outputArr[i]).innerText = titlevalue;
  });
}

// form buttons
// note
const addToDoBtn = document.getElementById("addToDoBtn");
const addToDoForm = document.getElementById("addToDoForm");
const addNoteBtn = document.getElementById("addNoteBtn");
const addNoteForm = document.getElementById("addNoteForm");

addNoteBtn.addEventListener("click", () => {
  addToDoForm.classList.add("hidden");
  addNoteForm.classList.remove("hidden");
  addNoteBtn.classList.add("bg-dark", "text-lite");
  addToDoBtn.classList.remove("bg-dark", "text-lite");
});

// to do
addToDoBtn.addEventListener("click", () => {
  addNoteForm.classList.add("hidden");
  addToDoForm.classList.remove("hidden");
  addToDoBtn.classList.add("bg-dark", "text-lite");
  addNoteBtn.classList.remove("bg-dark", "text-lite");
});

// todolist
const addToDoFormBtn = document.getElementById("addToDoFormBtn");
addToDoFormBtn.onclick = function () {
  const inputToDoTitel = document.getElementById("inputToDoTitel");
  const inputToDoDiscription = document.getElementById("inputToDoDiscription");

  const todotable = document.createElement("div");
  todotable.innerHTML = `
    <div
      class="item w-full pb-10 text-xl gap-1 px-5 lg2:px-0 grid grid-cols-4 lg2:grid-cols-6 ${inputToDoTitel.value}">
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
        <input type="checkbox" name="checkTodo" id="checkTodo" class="checkTodo form-checkbox bg-lite">
      </div>
      <!-- offset -->
      <div class="col-span-1 z-10 hidden lg2:block"></div>
    </div>
    `;
  document.getElementById("todo").appendChild(todotable);
};

const todoRefresh = document.getElementById("todoRefresh");

todoRefresh.onclick = function () {
  const checkedItems = document.querySelectorAll(".item .checkTodo:checked");

  for (let i = 0; i < checkedItems.length; i++) {
    checkedItems[i].parentElement.parentElement.remove();
  }
};

// note
const addNoteFormBtn = document.getElementById("addNoteFormBtn");
addNoteFormBtn.onclick = function () {
  const inputNoteTitel = document.getElementById("inputNoteTitel");
  const inputNoteDiscription = document.getElementById("inputNoteDiscription");
  const inputNoteDate = document.getElementById("inputNoteDate");
  const inputNotePrioity = document.getElementById("inputNotePrioity");

  const noteContiner = document.createElement("div");
  noteContiner.innerHTML = `
    <div id="${inputNoteTitel.value}"
    class="col-span-1 relative h-[400px] w-full my-7 shadow py-5 mx-auto border-b-4 border-blue">
    <!-- output icon -->
    <div class="flex justify-between items-center">
      <!-- icon -->
      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-10 h-10 mx-5 text-blue">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg></div>
      <!-- close icon -->
      <button id="noteClose" class="mx-5 text-gray"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg></button>
    </div>
    <!-- title -->
    <p class="p-5">${inputNoteTitel.value}</p>
    <!-- description -->
    <p class="text-sm text-gray px-5 mb-5">${inputNoteDiscription.value}</p>
    <!-- date -->
    <div class="left-5 flex items-center absolute bottom-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-4 h-4 text-blue">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <span class="px-2 text-xs pb-1">${inputNoteDate.value}</span>
    </div>
    <!-- prioity -->
    <div class="right-5 flex items-center absolute bottom-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor" class="w-4 h-4 text-blue">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
      <span class="px-2 text-xs">${inputNotePrioity.value}</span>
    </div>
  </div>
    `;
  document.getElementById("note").appendChild(noteContiner);
};