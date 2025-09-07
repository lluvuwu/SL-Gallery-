// List your images here
// Just add filenames into this array when you upload new ones
const imageList = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg"
];

// Create slideshow dynamically
const slideshow = document.querySelector('.slideshow');
imageList.forEach((img, index) => {
  const el = document.createElement('img');
  el.src = `images/${img}`;
  if (index === 0) el.classList.add('active');
  slideshow.appendChild(el);
});

const slides = document.querySelectorAll('.slideshow img');
let current = 0;

function showNextImage() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextImage, 10000); // Change every 10 seconds
