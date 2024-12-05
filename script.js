const inputBox = document.querySelector('.inputBox');
const addBtn = document.querySelector('.addBtn');
const listContainer = document.querySelector('.listContainer');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputBox.value == '') {
        alert('Please enter something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = 'X';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showData();
