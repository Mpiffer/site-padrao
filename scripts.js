```javascript
// Importing dependencies
import { slides } from './slides.js';
import { placeholders } from './assets/images/placeholder.png';

// Function to initialize the slider
function initSlider() {
  const slider = document.getElementById('main-slider');
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    slideElement.style.backgroundImage = `url(${slide.image})`;
    slideElement.id = `slide-${index}`;
    slider.appendChild(slideElement);
  });
}

// Function to load placeholder images
function loadPlaceholderImages() {
  const placeholdersElements = document.querySelectorAll('.placeholder');
  placeholdersElements.forEach((placeholder, index) => {
    placeholder.style.backgroundImage = `url(${placeholders[index].image})`;
  });
}

// Call the functions on page load
window.onload = () => {
  initSlider();
  loadPlaceholderImages();
};
```