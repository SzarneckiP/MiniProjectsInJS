const addBtn = document.querySelector('.add');
const closeBtn = document.querySelector('.close');
const saveBtn = document.querySelector('.save');
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAll = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardId = 1;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    category.selectedIndex = 0;
    textarea.value = '';
}

const addNote = () => {
    if (textarea.value !== ''
        && category.selectedIndex !== 0) {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardId);
    newNote.innerHTML = `
            <div class="note-header">
                <h3>${selectedValue} #${cardId}</h3>
                <button class="delete-note" onclick="deleteNote(${cardId})">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="note-body">
            ${textarea.value}
            </div>
    `
    setColor(category.selectedIndex, newNote)
    // if (category.selectedIndex === 2) {
    //     newNote.style.backgroundColor = 'rgb(5, 255, 18)'
    // } else if (category.selectedIndex === 3) {
    //     newNote.style.backgroundColor = 'rgb(5, 163, 255)'
    // }
    cardId++
    noteArea.appendChild(newNote);
    closePanel();
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const setColor = (index, newNote) => {
    if (index === 2) {
        newNote.style.backgroundColor = 'rgb(72, 255, 0)'
    } else if (index === 3) {
        newNote.style.backgroundColor = 'rgb(0, 170, 255)'
    }
}

const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = '';
}

const escKeyEvent = (e) => {
    if (e.key === 'Escape') {
        closePanel();
    }
}

const enterKeyEvent = (e) => {
    if (e.key === 'Enter' && textarea.value.length > 1) {
        createNote();
    }
}

addBtn.addEventListener('click', openPanel);
closeBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAll.addEventListener('click', deleteAllNotes)

window.addEventListener('keyup', escKeyEvent);
window.addEventListener('keyup', enterKeyEvent);



