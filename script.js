let golive = document.getElementById("golive")
let rside = document.getElementById("rside")

golive.addEventListener("mouseenter", () => {
    rside.style.display = "block"
})

rside.addEventListener("mouseout", () => {
    rside.style.display = "none"
})

const points = document.querySelectorAll('.points');
const featureImage = document.getElementById('feature-image');

points.forEach(point => {
    point.addEventListener('mouseenter', () => {
        const imageUrl = point.getAttribute('data-image');
        console.log("Loading image:", imageUrl); // Debugging
        featureImage.src = imageUrl;
    });
});



const carousel3 = document.querySelector('#carousel3 .carousel');
const prevBtn3 = document.querySelector('#carousel3 .prev');
const nextBtn3 = document.querySelector('#carousel3 .next');
const radioInputs = document.querySelectorAll('#carousel3 input[type="radio"]');
let currentIndex3 = 0;
const totalSlides3 = radioInputs.length;

function moveCarousel3(index) {
    currentIndex3 = index;
    const shiftPercent = (100 / totalSlides3) * currentIndex3;
    carousel3.style.transform = `translateX(-${shiftPercent}%)`;
    radioInputs[currentIndex3].checked = true;
}

function moveCarousel3Direction(direction) {
    if (direction === 'next') {
        currentIndex3 = (currentIndex3 + 1) % totalSlides3;
    } else {
        currentIndex3 = (currentIndex3 - 1 + totalSlides3) % totalSlides3;
    }
    moveCarousel3(currentIndex3);
}

prevBtn3.addEventListener('click', () => moveCarousel3Direction('prev'));
nextBtn3.addEventListener('click', () => moveCarousel3Direction('next'));

// Add event listeners to radio buttons
radioInputs.forEach((input, index) => {
    input.addEventListener('change', () => {
        moveCarousel3(index);
    });
});

// Auto-move carousel 3
setInterval(() => moveCarousel3Direction('next'), 4000);

const carouselTrack = document.querySelector('#carousel-featured-track');
const prevBtn = document.querySelector('.prev-featured');
const nextBtn = document.querySelector('.next-featured');
const radioInp = document.querySelectorAll('.radio-controls-featured input');

let currentIndex = 0;
const totalSlides = radioInp.length;

function moveCarousel(index) {
    currentIndex = index;
    const shiftPercent = (100 / totalSlides) * currentIndex;
    carouselTrack.style.transform = `translateX(-${shiftPercent}%)`;
    radioInp[currentIndex].checked = true;
}

function moveCarouselDirection(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }
    moveCarousel(currentIndex);
}

prevBtn.addEventListener('click', () => moveCarouselDirection('prev'));
nextBtn.addEventListener('click', () => moveCarouselDirection('next'));

radioInp.forEach((input, index) => {
    input.addEventListener('change', () => {
        moveCarousel(index);
    });
});

setInterval(() => moveCarouselDirection('next'), 4000);


// livescore.addEventListener("mouseout", () => {
//     livescoredd.style.display = "none";
// })
