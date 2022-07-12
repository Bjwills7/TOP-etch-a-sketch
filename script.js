// create 16x16 grid on page load /done

// add classes to divs /done

// addEventListeners to change grid size when buttons are pressed /done

// add logic to change div colors on hover or click and hold

window.onload = function() {
    grid16();
}

let container = document.querySelector('.container');
let button16 = document.querySelector('.button16');
let button32 = document.querySelector('.button32');
let button64 = document.querySelector('.button64');


button16.addEventListener('click', function() {grid16()});
button32.addEventListener('click', function() {grid32()});
button64.addEventListener('click', function() {grid64()});


function grid16() {
    reset();
    let pixel = [];
    for (let i = 0; i < 256; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div16`);
        container.appendChild(pixel[i]);
    }
}

function grid32() {
    reset();
    let pixel = [];
    for (let i = 0; i < 1024; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div32`);
        container.appendChild(pixel[i]);
    }
}

function grid64() {
    reset();
    let pixel = [];
    for (let i = 0; i < 4096; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div64`);
        container.appendChild(pixel[i]);
    }
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
