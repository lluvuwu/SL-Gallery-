const carousel = document.getElementById('carousel');
let slides = [];
let current = 0;
const intervalTime = 5000; // 5 seconds per slide

// Raw URL to your images.json in GitHub
const jsonURL = 'https://raw.githubusercontent.com/lluvuwu/SL-Gallery/main/images.json';

fetch(jsonURL)
  .then(res => res.json())
  .then(images => {
    if(images.length === 0) throw new Error("No images found in JSON.");

    // Create img elements dynamically
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Slide ${index + 1}`;
      if(index === 0) img.style.opacity = 1; // show first image
      carousel.appendChild(img);
    });

    slides = carousel.querySelectorAll('img');

    // Start automatic slideshow
    setInterval(() => {
      slides[current].style.opacity = 0;
      current = (current + 1) % slides.length;
      slides[current].style.opacity = 1;
    }, intervalTime);
  })
  .catch(err => console.error('Failed to load images:', err));
