let link = document.querySelector('#link');
link.addEventListener('click', (event) => {
    link.textContent = prompt('Введите новый текст ссылки', 'Новый текст');
    event.preventDefault();
})