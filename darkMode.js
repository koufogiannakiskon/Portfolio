const toggle = document.querySelector('.darkToggle');
const first_row = document.querySelector('.first_row');

toggle.onClick = function () {
    first_row.classList.add('dark')
};