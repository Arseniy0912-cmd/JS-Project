const p = document.querySelector('#duplicateField');
const input = document.querySelector('#input');

document.querySelector('button').addEventListener('click', (event) => {
    console.log(input.value);
    input.value = "";
    p.textContent = "";
})