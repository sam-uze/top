let lat = 41.01;
let lng = 28.96;
let zoom = 13;

// Initialize the map and set its view to the specified location and zoom level
let map = L.map('map').setView([lat, lng], zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([41.01, 28.96]).addTo(map);
marker.bindPopup(`
    <h2>Istanbul</h2>
    <ul>
        <li>geogr. Breite: ${lat.toFixed(5)}</li>
        <li>geogr. Länge: ${lng.toFixed(5)}</li>
    </ul>
`).openPopup();