```javascript
let slides = [
  { id: 1, title: 'Slide 1', description: 'This is slide 1', image: 'assets/images/placeholder.png' },
  { id: 2, title: 'Slide 2', description: 'This is slide 2', image: 'assets/images/placeholder.png' },
  { id: 3, title: 'Slide 3', description: 'This is slide 3', image: 'assets/images/placeholder.png' },
];

function initSlider() {
  let mainSlider = document.getElementById('main-slider');
  slides.forEach(slide => {
    let slideElement = document.createElement('div');
    slideElement.classList.add('slide');
    slideElement.style.backgroundImage = `url(${slide.image})`;
    slideElement.innerHTML = `
      <h2>${slide.title}</h2>
      <p>${slide.description}</p>
    `;
    mainSlider.appendChild(slideElement);
  });
}

initSlider();
```