const startButton = document.getElementById('startButton');
const startMenu = document.getElementById('menu');
const animal = document.getElementById('hidingAnimal');

const hidingOwl = document.getElementById('owlImage');

const searching = document.getElementById('searchingNoise');
const found = document.getElementById('foundNoise');

const playerName = document.getElementById('playerName');

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

startButton.addEventListener('click', function() {
    // Hide the start menu
    startMenu.style.display = 'none';

    searching.loop = true;
    searching.play();

    // Generate random positions
    const randomLeft = Math.random() * (viewportWidth - animal.offsetWidth);
    const randomTop = Math.random() * (viewportHeight - animal.offsetHeight);

    // Move the hidingAnimal div to the random position
    animal.style.left = randomLeft + 'px';
    animal.style.top = randomTop + 'px';

    // Change the opacity of hidingAnimal to make it visible
});

let score = '0';

animal.addEventListener('click', function() {
    // Change the opacity of hidingAnimal to make it disappear
    animal.style.opacity = '1'
    animal.style.left = '50%';
    animal.style.top = '50%';
    
    searching.pause();

    // Delay playing the found audio by 1 second
    setTimeout(function() {
        found.play();
    }, 1000);

    // Wait for 3 seconds before resetting the start menu
    setTimeout(function() {
        // Show the start menu again
        startMenu.style.display = 'block';

        score++;

        // Update the score display
        document.getElementById('scoreDisplay').textContent = 'Score: ' + score;
        // Reset the hiding animal position and opacity
        animal.style.left = '0';
        animal.style.top = '0';
        animal.style.opacity = '0'
    }, 3000);
});

document.addEventListener('mousemove', function(event) {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const animalRect = animal.getBoundingClientRect();
    const animalCenterX = animalRect.left + animal.offsetWidth / 2;
    const animalCenterY = animalRect.top + animal.offsetHeight / 2;

    const distance = Math.sqrt(Math.pow(cursorX - animalCenterX, 2) + Math.pow(cursorY - animalCenterY, 2));

    // Adjust volume based on distance
    const maxDistance = Math.max(viewportWidth, viewportHeight) / 2;
    const minVolume = 0.1; // Minimum volume
    const maxVolume = 1.0; // Maximum volume

    let volume = 1 - (distance / maxDistance);
    volume = Math.max(minVolume, Math.min(maxVolume, volume)); // Clamp volume between minVolume and maxVolume

    searching.volume = volume; // Adjust volume of the searching audio
});