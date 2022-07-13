// create 16x16 grid on page load /done

// add classes to divs /done

// addEventListeners to change grid size when buttons are pressed /done

// move pixel array and iterator to global scope and use it to add event listener to each pixel

// add logic to change div colors on hover or click and hold

// problem: call event listener on all divs but function only applies to the div being hovered


window.onload = function() {
    grid16();
}

let pixel = [];
let i = 0;
let container = document.querySelector('.container');
let button16 = document.querySelector('.button16');
let button32 = document.querySelector('.button32');
let button64 = document.querySelector('.button64');
let mouseDown = false;
let colorChoice = document.querySelector('input').value;

document.body.onmousedown = function() {mouseDown = true};
document.body.onmouseup = function() {mouseDown = false};

button16.addEventListener('click', function() {grid16()});
button32.addEventListener('click', function() {grid32()});
button64.addEventListener('click', function() {grid64()});

function paintDiv() {
    if (mouseDown === true) {
        pixel[j].classList.add('paint');
    }
}

function grid16() {
    reset();
    for (i = 0; i < 256; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div16`);
        container.appendChild(pixel[i]);
        pixel[i].addEventListener('mouseover', function(e) {
            if (mouseDown === true) {
                colorChoice = document.querySelector('input').value;
                e.target.style.backgroundColor = `${colorChoice}`;   
            }
        });
    }
}

function grid32() {
    reset();
    for (i = 0; i < 1024; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div32`);
        container.appendChild(pixel[i]);
        pixel[i].addEventListener('mouseover', function(e) {
            if (mouseDown === true) {
                colorChoice = document.querySelector('input').value;
                e.target.style.backgroundColor = `${colorChoice}`;
            }
        });
    }
}

function grid64() {
    reset();
    for (i = 0; i < 4096; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `div64`);
        container.appendChild(pixel[i]);
        pixel[i].addEventListener('mouseover', function(e) {
            if (mouseDown === true) {
                colorChoice = document.querySelector('input').value;
                e.target.style.backgroundColor = `${colorChoice}`;
            }
        });
    }
}

function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
