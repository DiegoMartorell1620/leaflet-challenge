// Creating the map object
let myMap = L.map("map", {
    center: [36.0902, -119.7129],
    zoom: 6.8
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  let url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

  // Get the data with d3

  d3.json(url).then(function(response) {

    // Create a new marker cluster group.
    let markers = L.markerClusterGroup();
    response.features.forEach(function(feature) {
  
        // Extract the coordinates from geometry and magnitude from properties
        let coordinates = feature.geometry.coordinates;
        let magnitude = feature.properties.mag;
        let depth=feature.geometry.coordinates[2];
    
        // Setting the dot size to the coordinates
        if (coordinates) {
            let radius = 30000; 
            if (magnitude < 1) {
                radius = 10000;
            } else if (magnitude >= 1 && magnitude < 2) {
                radius = 30000;
            } else if (magnitude >= 2 && magnitude < 3) {
                radius = 60000;
            } else if (magnitude >= 3) {
                radius = 100000;
            }

            let fillcolor='#008000'
            if (depth<10){
                fillcolor='#008000'; //Color green
            } else if (depth>=10 && depth <30){
                fillcolor='#FFFF00'; //Color yellow
            } else if (depth>=30 && depth <50){
                fillcolor='#FFA500'; // color orange
            } else if (depth>=50 && depth <70){
                fillcolor='#FF8C00' // dark orange
            } else if (depth>=70 && depth<90){
                fillcolor='FF4500' // an even darker orange
            } else if (depth>=90){
                fillcolor='FF0000' // light red
            }

            // Add a nre marker to the cluster group, and bind a popup
            markers.addLayer(L.circle([coordinates[1], coordinates[0]], {
                radius: radius,
                color: 'black',
                fillColor:fillcolor,
                fillOpacity: 0.5,
                weight:1
            }).bindPopup("Location: " + feature.properties.place + "<br />" + "Magnitude: " + feature.properties.mag + 
                "<br />" + "Depth: "+ feature.geometry.coordinates[2]
            ));
        }
    });

    // Add our marker cluster layer to the map.
    myMap.addLayer(markers);


    let legend = L.control({ position: 'bottomright' });

    // Legend
    legend.onAdd = function(map) {
        let div = L.DomUtil.create('div', 'legend');
        div.innerHTML = '<h4></h4>' +
            '<p><span class="legend-color" style="background-color: #008000"></span> -10-10</p>' +
            '<p><span class="legend-color" style="background-color: #FFFF00"></span> 10-30</p>' +
            '<p><span class="legend-color" style="background-color: #FFA500"></span> 30-50</p>' +
            '<p><span class="legend-color" style="background-color: #FF8C00"></span> 50-70</p>' +
            '<p><span class="legend-color" style="background-color: #FF4500"></span> 70-90</p>' +
            '<p><span class="legend-color" style="background-color: #FF0000"></span> 90+</p>';
        return div;
    };

    // Add the legend to the map
    legend.addTo(myMap);
});

