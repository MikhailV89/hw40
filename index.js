const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
    "./images/7.jpg",
    "./images/8.jpg",
    "./images/9.jpg",
];

let newIndex = 0;
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const image = document.querySelector("#image");

const showPrevImage = () => {
    newIndex--;
    updateImage();
};

const showNextImage = () => {
    newIndex++;
    updateImage();
};

const updateImage = () => {
    newIndex = newIndex < 0 ? 0 : newIndex >= images.length 
    ? images.length - 1 : newIndex;

    image.src = images[newIndex];

    prevBtn.style.display = newIndex === 0 ? "none" : "block";
    nextBtn.style.display = newIndex === images.length - 1 ? "none" : "block";
};

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

updateImage();