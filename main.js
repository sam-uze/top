
let stop = {
    nr: 7,
    title: "Istanbul",
    user: "sam-uze",
    lat: 41.01,
    lng: 28.96,
    zoom: 13,
};

// Initialize the map and set its view to the specified location and zoom level
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let marker = L.marker([stop.lat, stop.lng]).addTo(map);
marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
        <li>geogr. Breite: ${stop.lat.toFixed(5)}°</li>
        <li>geogr. Länge: ${stop.lng.toFixed(5)}°</li>
    </ul>
`).openPopup();