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
        const gotorightimage = images[imageIndex];
        imageIndex--;
        const middleimage = images[imageIndex];
        console.log(imageIndex);
        gotorightimage.style.marginLeft = "0px";
        middleimage.style.marginLeft = "50%";
        middleimage.style.marginRight = "7%";        
    }
        
    else
        console.log('left arrow clicked but out of limits');

}

function moveImagesRight() {
    if (imageIndex < images.length -1) {
        const gotoleftimage = images[imageIndex];
        imageIndex++;
        const middleimage = images[imageIndex];
        console.log(imageIndex);
        gotoleftimage.style.marginLeft = "-506px";
        middleimage.style.marginLeft = "50%";
        gotoleftimage.style.marginRight = "0px";
    }

    else
        console.log('right arrow clicked but out of limits');

}
console.log(images.length);
leftArrow.addEventListener('click', moveImagesLeft);
rightArrow.addEventListener('click', moveImagesRight);