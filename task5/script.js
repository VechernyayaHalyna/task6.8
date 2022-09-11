let input = document.querySelector('#input');
let text = document.querySelector('#duplicateField');
let button = document.querySelector('#button');

input.oninput = function() {
    text.textContent = input.value;
} 

button.onclick = function(event) {
    console.log(input.value);
    input.value = '';
    text.textContent = '';
    event.preventDefault()
}