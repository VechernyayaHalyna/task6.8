let input = document.querySelector('#input');
let text = document.querySelector('#duplicateField');
let button = document.querySelector('#button');

input.addEventListener('input', function() {
    text.textContent = input.value;
} ) 

button.addEventListener('click', function(event) {
    console.log(input.value);
    input.value = '';
    text.textContent = '';
    event.preventDefault()
})