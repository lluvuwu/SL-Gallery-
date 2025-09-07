const carousel = document.getElementById('carousel');
let slides = [];
let current = 0;
const intervalTime = 5000; // 5 seconds per slide

// GitHub repository info
const username = "<lluvuwu>";
const repo = "<SL Gallery>";
const folder = "images"; // folder name containing images

// GitHub API URL to list files in folder
const apiURL = `https://api.github.com/repos/${username}/${repo}/contents/${folder}`;

fetch(apiURL)
  .then(res => res.json())
  .then(files => {
    // Filter only image files
    const imageFiles = files.filter(file =>
      file.name.match(/\.(jpg|jpeg|png|gif)$/i)
    );

    if(imageFiles.length === 0) throw new Error("No image files found in folder.");

    // Create <img> elements
    imageFiles.forEach((file, index) => {
      const img = document.createElement('img');
      // Use raw.githubusercontent URL to access image directly
      img.src = file.download_url;
      img.alt = file.name;
      if(index === 0) img.style.opacity = 1; // show first image
      carousel.appendChild(img);
    });

    slides = carousel.querySelectorAll('img');

    // Start slideshow
    setInterval(() => {
      slides[current].style.opacity = 0;
      current = (current + 1) % slides.length;
      slides[current].style.opacity = 1;
    }, intervalTime);
  })
  .catch(err => console.error('Failed to load images from GitHub folder:', err));
