const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imageContainers = document.querySelectorAll('.image-container');
const textContainers = document.querySelector('.text-wrap');
const images = [];
let imageIndex = 0; 
let margeText = "0px"; 
let margeImage = "-506px"; 
const currentImageMarge = '50%';

imageContainers.forEach(container => {
    const containerImages = container.querySelectorAll('img');
    containerImages.forEach(image => {
        images.push(image);
    });
});

function updateArrowOpacity() {
    if (imageIndex === 0) {
        leftArrow.style.opacity = 0;
        leftArrow.style.cursor = "default";
    } else {
        leftArrow.style.opacity = 1;
        leftArrow.style.cursor = "pointer";
    }

    if (imageIndex === images.length - 1) {
        rightArrow.style.opacity = 0;
        rightArrow.style.cursor = "default";
    } else {
        rightArrow.style.opacity = 1;
        rightArrow.style.cursor = "pointer";
    }
}

function moveImagesLeft() {
    if (imageIndex > 0) {
        const goToRightImage = images[imageIndex];
        imageIndex--;
        updateArrowOpacity();
        const middleImage = images[imageIndex];
        goToRightImage.style.marginLeft = "0px";
        middleImage.style.marginLeft = "50%";
        middleImage.style.marginRight = "7%";
        margeText = parseInt(margeText) + 320 + "px";
        textContainers.style.marginTop = margeText;
    }
}

function moveImagesRight() {
    if (imageIndex < images.length - 1) {
        const goToLeftImage = images[imageIndex];
        imageIndex++;
        updateArrowOpacity();
        const middleImage = images[imageIndex]; 
        margeImage = parseInt(margeImage) - 2 + "px";
        goToLeftImage.style.marginLeft = margeImage;
        middleImage.style.marginLeft = "50%";
        goToLeftImage.style.marginRight = "0px";
        margeText = parseInt(margeText) - 320 + "px";
        textContainers.style.marginTop = margeText;
    }
}

leftArrow.addEventListener('click', moveImagesLeft);
rightArrow.addEventListener('click', moveImagesRight);
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        moveImagesLeft();
    } else if (event.key === "ArrowRight") {
        moveImagesRight();
    }
});
updateArrowOpacity();