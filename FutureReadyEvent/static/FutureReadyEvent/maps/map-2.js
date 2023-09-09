

const map2 = new ol.Map({
  target: 'map-2',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
      url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lzZnV0dXJlcmVhZHkiLCJhIjoiY2xreDFmdmVnMDhleDNtcjNsemlvdHB1eSJ9._CVw0avjzoQDCUrt1KNtdw'
      }),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-74.396051, -49.949627]),
    zoom: 10,
  }),
});

console.log('Loaded Map-2');