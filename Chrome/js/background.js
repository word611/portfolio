const images =["pic1.jpg","pic2.jpg","pic3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

document.body.appendChild(image);