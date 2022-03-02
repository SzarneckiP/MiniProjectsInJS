"use strict";
let todoInput, errorInfo, addBtn, ulList;
//newTodo: HTMLLIElement | HTMLUListElement | null | HTMLElement
let popup, popupInfo, popupInput, todoToEdit, popupAddBtn, popupCloseBtn;
const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};
const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.popup .accept');
    popupCloseBtn = document.querySelector('.popup .cancel');
};
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    todoInput.addEventListener('keyup', enterKeyCheck);
};
const addNewTodo = () => {
    if (todoInput.value !== '') {
        const newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value.trim();
        newTodo.dataset.id = 'test4';
        createToolsArea(newTodo);
        ulList.append(newTodo);
        todoInput.value = '';
        errorInfo.textContent = '';
    }
    else {
        errorInfo.textContent = 'Wpisz treść zadania!';
    }
};
const createToolsArea = (newTodo) => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTodo?.append(toolsPanel);
    const BtnComplete = document.createElement('button');
    BtnComplete.classList.add('complete');
    BtnComplete.innerHTML = '<i class="fas fa-check"></i>';
    const BtnEdit = document.createElement('button');
    BtnEdit.classList.add('edit');
    BtnEdit.textContent = 'EDIT';
    const BtnDel = document.createElement('button');
    BtnDel.classList.add('delete');
    BtnDel.innerHTML = '<i class="fas fa-times"></i>';
    toolsPanel.append(BtnComplete, BtnEdit, BtnDel);
};
const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.classList.toggle('completed');
    }
    else if (e.target.matches('.edit')) {
        editTodo(e);
    }
    else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
};
const editTodo = (e) => {
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popup.style.display = 'flex';
};
const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
};
const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.textContent = '';
    }
    else {
        popupInfo.textContent = 'Wprowadź jakieś zadanie.';
    }
};
const deleteTodo = (e) => {
    e.target.closest('li').remove();
    const allTodos = ulList.querySelectorAll('li');
    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.';
    }
};
const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewTodo();
    }
};
document.addEventListener('DOMContentLoaded', main);
