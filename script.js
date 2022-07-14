// create 16x16 grid on page load /done

// add classes to divs /done

// addEventListeners to change grid size when buttons are pressed /done

// add logic to change div colors on hover or click and hold /done

// add slider and calculate grid size. /done Then calculate pixel size.

// add random color function

// add media queries for mobile version

// check if event has been triggered more than once and add more black?


window.onload = function() {
    grid();
}

let pixel = [];
let i = 0;
let container = document.querySelector('.container');
let mouseDown = false;
let colorChoice = document.querySelector('.colorPicker').value;

// Grid size slider
let rangeLabel = document.querySelector('.rangeLabel');
let gridSlider = document.querySelector('#gridSlider');
gridSlider.addEventListener('change', function() {rangeLabel.textContent = gridSlider.value});
gridSlider.addEventListener('change', function() {grid()});

document.body.onmousedown = function() {mouseDown = true};
document.body.onmouseup = function() {mouseDown = false};


function grid() {
    reset();
    let limit = gridSlider.value ** 2;
    let pixelSize = (1 / gridSlider.value) * 100;
    for (i = 0; i < limit; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `divSlide`);
        pixel[i].style.cssText = `width: ${pixelSize}%; height: ${pixelSize}%;`;
        container.appendChild(pixel[i]);
        pixel[i].addEventListener('mouseover', function(e) {
            if (mouseDown === true) {
                colorChoice = document.querySelector('.colorPicker').value;
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
