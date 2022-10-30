const toggle = document.querySelector('.darkToggle');
const body = document.body;
const nav = document.querySelector('.navbar-expand');
const footer = document.querySelector('footer');

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
        body.classList.add('dark-theme');
        nav.classList.remove('light');
        nav.classList.add('dark');
        footer.classList.remove('light');
        footer.classList.add('dark');

    } else {
        body.classList.remove('dark-theme');
        nav.classList.remove('dark');
        nav.classList.add('light');
        footer.classList.remove('dark');
        footer.classList.add('light');

    }
});
