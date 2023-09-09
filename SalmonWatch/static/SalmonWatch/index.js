// Initialize Leaflet map
var map = L.map('map-container').setView([-44.764175, -72.769925], 9);


// Add Mapbox Satellite tile layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lzZnV0dXJlcmVhZHkiLCJhIjoiY2xreDFmdmVnMDhleDNtcjNsemlvdHB1eSJ9._CVw0avjzoQDCUrt1KNtdw', {
  attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
}).addTo(map);