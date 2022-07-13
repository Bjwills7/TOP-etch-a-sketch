// create 16x16 grid on page load /done

// add classes to divs /done

// addEventListeners to change grid size when buttons are pressed /done

// add logic to change div colors on hover or click and hold /done

// check if event has been triggered more than once and add more black?


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
