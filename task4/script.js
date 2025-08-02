const a = document.querySelector('#silka');

a.addEventListener('click', (event) => {
    event.preventDefault();
    a.textContent = prompt();
})