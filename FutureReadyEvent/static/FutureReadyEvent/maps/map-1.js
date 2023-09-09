

const map = new ol.Map({
  target: 'map-1',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-70.6693, -33.4489]),
    zoom: 10,
  }),
});

console.log('Loaded Map-1');