const all_page = document.querySelector('body');
const my_name = document.querySelector('.my_name');
const titles = document.querySelectorAll('.heading');
const walk = 15;

function shadow(e) {
    const { width: width, height: height } = screen;
    const { clientX: x, clientY: y } = e;

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    my_name.style.textShadow = `${xWalk}px ${yWalk}px 2px #7B7A72`
    titles.forEach(title => {
        title.style.textShadow = `${xWalk}px ${yWalk}px 2px #7B7A72`
    });
}

all_page.addEventListener('mousemove', shadow);

var degtorad = Math.PI / 180;

window.addEventListener('touchmove', function (e) {
    x = e.clientX;
    y = e.clientY;
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    my_name.style.textShadow = `${xWalk}px ${yWalk}px 2px #7B7A72`
    titles.forEach(title => {
        title.style.textShadow = `${xWalk}px ${yWalk}px 2px #7B7A72`
    });
})