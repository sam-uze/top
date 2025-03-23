var map = L.map('map').setView([41.01, 28.96], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([41.01, 28.96]).addTo(map);
marker.bindPopup("<b>Istanbul</b><br>City Center").openPopup();