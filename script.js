const carousel = document.getElementById('carousel');
const slides = Array.from(carousel.children);

// Duplicate slides for seamless looping
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  carousel.appendChild(clone);
});

let position = 0;
const speed = 1; // pixels per frame, increase to scroll faster

// Total width of one set of slides
const slideWidth = slides[0].getBoundingClientRect().width;
const totalWidth = slideWidth * slides.length;

function animate() {
  position -= speed;

  // Reset when first set has scrolled completely
  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  carousel.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

// Wait until images have loaded to get correct widths
window.addEventListener('load', () => {
  animate();
});
