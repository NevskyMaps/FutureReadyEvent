const geojson_data = window.geojsonData;

// Style function
function styleFunction(feature) {
    if (feature.get('bought')) {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 0, 0, 0.3)'  // Semi-transparent red
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
            })
        });
    } else {
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0, 0, 255, 0.3)'  // Semi-transparent blue
            }),
            stroke: new ol.style.Stroke({
                color: 'blue',
                width: 2
            })
        });
    }
}

const map = new ol.Map({
    target: 'map-container',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            source: new ol.source.Vector({
                features: new ol.format.GeoJSON().readFeatures(geojson_data, {
                    dataProjection: 'EPSG:4326',
                    featureProjection: 'EPSG:3857'
                })
            }),
            style: styleFunction
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-70.6693, -33.4489]),
        zoom: 7
    })
});

// Create an Overlay for the Popup
const popupElement = document.createElement('div');
popupElement.className = 'ol-popup';

const popup = new ol.Overlay({
    element: popupElement,
    positioning: 'bottom-center',
    stopEvent: true,
    offset: [0, -10]
});
map.addOverlay(popup);

// Listen to the Map Click Event
map.on('click', function(evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        return feature;
    });

    if (feature) {
        const coordinates = evt.coordinate;
        const name = feature.get('name');
        const area = feature.get('area');
        const directory = feature.get('directory');
        const owner = feature.get('owner');

        const content = `
            <strong>Name:</strong> ${name}<br>
            <strong>Area:</strong> ${area}<br>
            <strong>Directory:</strong> ${directory}<br>
            <strong>Owner:</strong> ${owner}
        `;

        popupElement.innerHTML = content;
        popup.setPosition(coordinates);
    } else {
        popup.setPosition(undefined);
    }
});
