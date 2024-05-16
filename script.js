const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imageContainers = document.querySelectorAll('.image-container');
const images = [];
var imageIndex = 0;

imageContainers.forEach(container => {
    const containerImages = container.querySelectorAll('img');
    containerImages.forEach(image => {
        images.push(image);
    });
});



function moveImagesLeft(){
    if (imageIndex > 0) {
        imageIndex--;
        console.log(imageIndex);
    }
        
    else
        console.log('left arrow clicked but out of limits');

}

function moveImagesRight() {
    if (imageIndex < images.length -1) {
        imageIndex++;
        console.log(imageIndex);
    }

    else
        console.log('right arrow clicked but out of limits');

}
console.log(images.length);
leftArrow.addEventListener('click', moveImagesLeft);
rightArrow.addEventListener('click', moveImagesRight);