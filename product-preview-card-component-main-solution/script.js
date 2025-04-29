// Get the image element
const img = document.querySelector('img');

// Function to update image based on screen size
function updateImage() {
  if (window.innerWidth >= 427) {
    img.src = '/images/image-product-desktop.jpg'; // Tablet image
  } else {
    img.src = '/images/image-product-mobile.jpg'; // Mobile image
  }
}

// Run on page load
updateImage();

// Update image when window is resized
window.addEventListener('resize', updateImage);