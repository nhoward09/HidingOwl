// Get reference to the button and the section
const startButton = document.getElementById('startButton');
const startMenu = document.getElementById('menu');

// Add event listener to the button
startButton.addEventListener('click', function() {
    // Hide the section by changing its display property
    startMenu.style.display = 'none';
});