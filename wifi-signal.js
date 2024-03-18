let currentIndex = 0;
const icons = document.querySelectorAll("#wifi-animation i");

function animateWiFiSignal() {
  icons.forEach(icon => icon.style.opacity = 0);

  icons[currentIndex].style.opacity = 1;

  // Move to the next icon, looping back to the first icon
  currentIndex = (currentIndex + 1) % icons.length;

  // Schedule the next animation step
  setTimeout(animateWiFiSignal, 1000); // Adjust timing as needed
}

// Start the animation
animateWiFiSignal();