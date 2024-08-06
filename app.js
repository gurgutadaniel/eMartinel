// Initialize the map and set its view to Bucharest
var map = L.map('map').setView([44.4268, 26.1025], 13);

// Add a tile layer to the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker to the map
L.marker([44.4268, 26.1025]).addTo(map)
    .bindPopup('Bucharest, Romania')
    .openPopup();
