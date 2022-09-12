// Ввод переменных
let input = document.querySelector('#input');
let text = document.querySelector('#duplicateField');
let button = document.querySelector('#button');

// Функция при вводе текста
input.addEventListener('input', function() {
    button.className = 'active';
    text.textContent = input.value;
    text.className = 'focus';
} ) 

// Функция при нажатии кнопки
button.addEventListener('click', function(event) {
    console.log(input.value);
    input.value = '';
    text.textContent = '';
    text.className = '';
    event.preventDefault()
})