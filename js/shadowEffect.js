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

window.addEventListener('deviceorientation', function (e) {
    var _x = e.beta ? e.beta * degtorad : 0;
    var _y = e.gamma ? e.gamma * degtorad : 0;
    var _z = e.alpha ? e.alpha * degtorad : 0;

    var cX = Math.cos(_x);
    var cY = Math.cos(_y);
    var cZ = Math.cos(_z);
    var sX = Math.sin(_x);
    var sY = Math.sin(_y);
    var sZ = Math.sin(_z);

    // Calculate Vx and Vy components
    var Vx = - cZ * sY - sZ * sX * cY;
    var Vy = - sZ * sY + cZ * sX * cY;
    var x = Math.round((walk / 2) * Vx);
    var y = Math.round((walk / 2) * Vy);
    my_name.style.textShadow = `${Vx}px ${Vy}px 2px #7B7A72`
    titles.forEach(title => {
        title.style.textShadow = `${Vx}px ${Vy}px 2px #7B7A72`
    });
})