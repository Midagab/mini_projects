const list = document.getElementById('list');
const addButton = document.getElementById('addButton');
addButton.setAttribute('id', 'addButton');
const inputField = document.getElementById('inputField');
const taskText = inputField.value.trim();

document.addEventListener('DOMContentLoaded', () => {
    const savedTasks = localStorage.getItem('task');
    if (savedTasks) {
        list.innerHTML = savedTasks;
    }
});

function updateStatus(){
    let completedItems = document.querySelectorAll('.completed');
    let incompleteItems = document.querySelectorAll('.listItems:not(.completed)');
    let totalItems=document.querySelectorAll('.listItems');
    const completed=document.querySelector('#completed');
    const incomplete=document.querySelector('#incomplete');
    const total=document.querySelector('#total');
    completed.textContent = completedItems.length;
    incomplete.textContent = incompleteItems.length;
    total.textContent = totalItems.length;  
       }
updateStatus();

const loadTask= text => {
    
    if (text) {
        const newItem = document.createElement('li');
        const spannedText=document.createElement('span');
        const box=document.createElement('input');
        box.setAttribute('type','checkbox');
        box.addEventListener('change', () => {
            if (box.checked) {
                spannedText.style.textDecoration = 'line-through';
                spannedText.style.color = 'gray';
                newItem.classList.add('completed');
                updateStatus()
            } else {
                spannedText.style.textDecoration = 'none';
                spannedText.style.color = 'black';
                newItem.classList.remove('completed');
                updateStatus()
            }
        });
        spannedText.appendChild(box);
        spannedText.appendChild(document.createTextNode(text));
        spannedText.setAttribute('contenteditable', 'false');
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&#128465;';
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.style.color = 'red';
         deleteButton.addEventListener('click', () => {
            list.removeChild(newItem);
            updateStatus()
    }
    );
    
        const editButton = document.createElement('button');
        editButton.innerHTML = '&#9998;';
        editButton.setAttribute('class', 'editButton');
        editButton.style.color = 'blue';
        editButton.addEventListener('click', () => {
            let isEditable = spannedText.getAttribute('contenteditable') === 'false';
            if (isEditable) {
                editButton.innerHTML = '&#10004;';
                spannedText.setAttribute('contenteditable', 'true');
            } else {
                editButton.innerHTML = '&#9998;';
                spannedText.setAttribute('contenteditable', 'false');
            }
        });


        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton);
        
        newItem.appendChild(spannedText);
        newItem.appendChild(buttonsContainer);
        newItem.setAttribute('class', 'listItems');
        list.appendChild(newItem);
        newItem.addEventListener('click', () => {
            newItem.classList.toggle('completed');
        });

        inputField.value = '';
        updateStatus();
    }
    localStorage.setItem('tasks', spannedText.textContent)
}
addButton.addEventListener('click', ()=>loadTask(taskText) );
