const slides = document.getElementsByClassName('carousel-item');
const slideButtons = document.getElementsByClassName('slide-button');
let slidePosition = 0;
const totalSlides = slides.length;
let time = 3000;

let timer = setInterval( function(){ 
    moveToNextSlide(); 
    }
, time );


document.getElementById('first-slide').addEventListener('click', ()=> moveToSlide(0));
document.getElementById('second-slide').addEventListener('click', ()=> moveToSlide(1));
document.getElementById('third-slide').addEventListener('click', ()=> moveToSlide(2));

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
    }
    for (let slideButton of slideButtons) {
        slideButton.classList.remove('active');
    }
}

function moveToSlide(index) {
    hideAllSlides();
    slides[index].classList.add("carousel-item-visible");
    slideButtons[index].classList.add('active');
    time = 3000;
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    slideButtons[slidePosition].classList.add('active');
}