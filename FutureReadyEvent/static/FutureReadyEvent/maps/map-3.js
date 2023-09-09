

const map3 = new ol.Map({
  target: 'map-3',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

console.log('Loaded Map-3');