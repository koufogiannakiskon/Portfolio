window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.row');
    reveals.forEach(row => {
        var windowheight = window.innerHeight;
        var revealtop = row.getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            row.classList.add('active');
        } else {
            row.classList.remove('active');

        }

    });
}