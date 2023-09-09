import { igmGeoJson } from './grid.js';

let gridData = [];

// Send GET request
fetch('get-grid')
  .then(response => response.json())
  .then(data => {
    gridData = data;
    createGeoJson();
  }).catch((error) => {
    console.error('Error:', error);
  })

function createGeoJson() {
  L.geoJSON(igmGeoJson, {
    style: function(feature) {
      var color = 'blue';
      let code = feature.properties.Name.slice(0, 4);

      gridData.forEach(item => {
        let cleanedAreaCode = item.area_code.replace(/-/g, ""); // remove all "-" in item.area_code

        if(cleanedAreaCode === code) {
          console.log(code);
          color = 'red';
        }
      })

      return {
        color: color,
      };
    },
    onEachFeature: function(feature, layer) {
  var PopupContent = feature.properties.Name;
  let code = feature.properties.Name.slice(0, 4);

  gridData.forEach(item => {
    let cleanedAreaCode = item.area_code.replace(/-/g, ""); // Define it inside this loop
    if(cleanedAreaCode === code) {
      PopupContent += '<br>Plancheta ya adquirida por ' + item.owner + '.';
let filename = item.directory.split("\\").pop();

PopupContent += `<br><a href="/download/${filename}/" target="_blank">Descargar Plancheta</a>`;

      console.log(filename);
    }
  });

  layer.bindPopup(PopupContent);
}


  }).addTo(map);
}
