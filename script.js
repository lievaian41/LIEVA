// JavaScript functionality for the wallpaper website

// Function to fetch wallpapers from an API
async function fetchWallpapers() {
    const response = await fetch('https://api.example.com/wallpapers');
    const wallpapers = await response.json();
    displayWallpapers(wallpapers);
}

// Function to display wallpapers on the page
function displayWallpapers(wallpapers) {
    const gallery = document.getElementById('gallery');
    wallpapers.forEach(wallpaper => {
        const img = document.createElement('img');
        img.src = wallpaper.url;
        img.alt = wallpaper.title;
        gallery.appendChild(img);
    });
}

// Event listener for DOMContentLoaded to fetch wallpapers
document.addEventListener('DOMContentLoaded', fetchWallpapers);