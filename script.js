// Grid size slider
let rangeLabel = document.querySelector('.rangeLabel');
let gridSlider = document.querySelector('#gridSlider');
gridSlider.addEventListener('change', function() {rangeLabel.textContent = gridSlider.value});
gridSlider.addEventListener('change', function() {grid()});

// color modes
let randomModeButton = document.querySelector('.randomMode');
let colorChoice = document.querySelector('.colorPicker').value;
let colorPicker = document.querySelector('.colorPicker');
let randomMode = false;

colorPicker.addEventListener('change', function() {
    randomMode = false;
});

randomModeButton.addEventListener('click', function() {
    randomMode = true;
});

// loads the default grid
window.onload = function() {
    grid();
}

// the divs created for the grid are stored in the pixel array
let pixel = [];
let i = 0;
let container = document.querySelector('.container');

// determines if mouse is held when hovering over grid
let mouseDown = false;
document.body.onmousedown = function() {mouseDown = true};
document.body.onmouseup = function() {mouseDown = false};
document.body.addEventListener('touchstart', function() {mouseDown = true});
document.body.addEventListener('touchmove', function() {mouseDown = true});
document.body.addEventListener('touchend', function() {mouseDown = false});

// creates a grid, size is specified by gridSlider
function grid() {
    reset();
    let limit = gridSlider.value ** 2;
    let pixelSize = (1 / gridSlider.value) * 100;
    for (i = 0; i < limit; i++) {
        pixel[i] = document.createElement('div');
        pixel[i].classList.add(`pixel${i}`, `divSlide`);
        pixel[i].style.cssText = `width: ${pixelSize}%; height: ${pixelSize}%;`;
        container.appendChild(pixel[i]);
        pixel[i].addEventListener('mousedown', function(e) {mouseDown = true; draw(e)});
        pixel[i].addEventListener('mouseover', function(e) {draw(e)});
        pixel[i].addEventListener('touchstart', function(e) {draw(e)});
        pixel[i].addEventListener('touchmove', function(e) {drawMobile(e)});
    }
}

function drawMobile(e) {
    if (mouseDown === true && randomMode === true) {
        colorChoice = randomRgb();
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        let hoveredDiv = document.elementFromPoint(x, y);
        let parent = hoveredDiv.parentElement.className;
        if (parent === 'container') {
            hoveredDiv.style.backgroundColor = `${colorChoice}`;
            e.preventDefault();
        }
    } else if (mouseDown === true) {
        colorChoice = document.querySelector('.colorPicker').value;
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        let hoveredDiv = document.elementFromPoint(x, y);
        let parent = hoveredDiv.parentElement.className;
        if (parent === 'container') {
            hoveredDiv.style.backgroundColor = `${colorChoice}`;
            e.preventDefault();
        }    
    }
}

function draw(e) {
    if (mouseDown === true && randomMode === true) {
        colorChoice = randomRgb();
        e.target.style.backgroundColor = `${colorChoice}`;
        e.preventDefault();
    } else if (mouseDown === true) {
        colorChoice = document.querySelector('.colorPicker').value;
        e.target.style.backgroundColor = `${colorChoice}`;
        e.preventDefault();
    }
}

function randomRgb() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


function reset() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
