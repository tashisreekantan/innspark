document.addEventListener('DOMContentLoaded', function() {
    // Get the card element
    var card = document.getElementById('movableCard');

    // Set a random position when the page is loaded
    var randomPosition = Math.floor(Math.random() * window.innerHeight);
    card.style.top = randomPosition + 'px';
});


let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.Mycarousel-item').length;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    currentIndex = index;
    const translation = -index * 100 + '%';
    carouselInner.style.transform = `translateX(${translation})`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

// slider js
let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    document.getElementById(`s${currentSlide}`).checked = true;
    currentSlide++;
    if (currentSlide > 5) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    pauseSlide();
    container.classList.add('zoomed');
    container.style.overflow = 'visible'; // Change overflow to visible when zoomed
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
    container.classList.remove('zoomed');
    container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
  });
  container.addEventListener('mousemove', (event) => {
    if (!container.classList.contains('zoomed')) {
      return;
    }
    const boundingRect = container.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    if (
      offsetX < 0 || offsetX > boundingRect.width ||
      offsetY < 0 || offsetY > boundingRect.height
    ) {
      container.classList.remove('zoomed');
      container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
    }
  });
});

// slider js ends

// ==================form validation======================
function validateForm() {
  let name = document.getElementById('name').value;
  let company = document.getElementById('company').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  if (name === '' || company === '' || phone === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return false;
  }   
}
//===================form validation ends=================