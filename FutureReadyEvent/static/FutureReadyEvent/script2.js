function initializeMap(mapDiv, InitLat, InitLon, InitZoom, mapType) {
    let source;

    if (mapType === "city") {
        source = new ol.source.OSM();
    } else if (mapType === "satellite") {
        source = new ol.source.XYZ({
            url: 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2lzZnV0dXJlcmVhZHkiLCJhIjoiY2xreDFmdmVnMDhleDNtcjNsemlvdHB1eSJ9._CVw0avjzoQDCUrt1KNtdw'
        });
    }

    return new ol.Map({
        target: mapDiv,
        layers: [
            new ol.layer.Tile({
                source: source
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([InitLat, InitLon]),
            zoom: InitZoom
        })
    });
}

let currentActiveSection = null; // variable to keep track of the active section

function handleScroll() {
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');
    const sections = document.querySelectorAll('.content-section');

    for (let section of sections) {
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;

        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
            // Check if the active section has changed
            if (section === currentActiveSection) {
                // If we're still in the same section, just return
                return;
            }

            // Update the current active section
            currentActiveSection = section;

            // Clear the existing content of the rightColumn
            rightColumn.innerHTML = '';

            // Create a new div element for the map
            const mapDiv = document.createElement('div');
            mapDiv.classList.add('map-container'); // Add this line
            mapDiv.style.width = "100%";
            mapDiv.style.height = "400px";
            rightColumn.appendChild(mapDiv);


            // Check which section is active and initialize the map accordingly
            const rightContent = section.getAttribute('data-right-content');
            if (rightContent === "Content for Right 1") {
                initializeMap(mapDiv, -70.6693, -33.4489, 10, "city");
            } else if (rightContent === "Content for Right 2") {
                initializeMap(mapDiv, -74.396051, -49.949627,  10, "satellite");
            } else if (rightContent === "Content for Right 3") {
                // Example for the third section
                initializeMap(mapDiv, 32, 32, 2, "city");
            }
        }
    }
}
