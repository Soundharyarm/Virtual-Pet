document.addEventListener('DOMContentLoaded', () => {
    const healthSpan = document.getElementById('health');
    const happinessSpan = document.getElementById('happiness');
    const hungerSpan = document.getElementById('hunger');

    const feedButton = document.getElementById('feedButton');
    const playButton = document.getElementById('playButton');
    const restButton = document.getElementById('restButton');

    let health = 100;
    let happiness = 100;
    let hunger = 100;

    function updateStats() {
        healthSpan.textContent = health;
        happinessSpan.textContent = happiness;
        hungerSpan.textContent = hunger;
    }

    function changeStats(deltaHealth, deltaHappiness, deltaHunger) {
        health = Math.min(100, Math.max(0, health + deltaHealth));
        happiness = Math.min(100, Math.max(0, happiness + deltaHappiness));
        hunger = Math.min(100, Math.max(0, hunger + deltaHunger));
        updateStats();
    }

    function simulateEffects() {
        setInterval(() => {
            changeStats(-1, -1, -1);
        }, 1000); // Decrease stats every second
    }

    feedButton.addEventListener('click', () => {
        changeStats(10, 0, -20);
    });

    playButton.addEventListener('click', () => {
        changeStats(0, 20, -10);
    });

    restButton.addEventListener('click', () => {
        changeStats(20, 0, -10);
    });

    simulateEffects();
});
