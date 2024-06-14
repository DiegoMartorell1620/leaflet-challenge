# leaflet-challenge

The challenge consists of the following: 

Part 1: Create the Earthquake Visualization

Get your dataset. To do so, follow these steps:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize.

Import and visualize the data by doing the following:

Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

Hint: The depth of the earth can be found as the third coordinate for each earthquake.

Include popups that provide additional information about the earthquake when its associated marker is clicked.

Create a legend that will provide context for your map data.

Sources:

1. The code regarding how to create a legend was provided by Xpert Learning Assistant:

    legend.onAdd = function(map) {
        "let div = L.DomUtil.create('div', 'legend');
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
    legend.addTo(myMap);"

2. The code for styling my legend was provided by Xpert Learning Assistant:

legend {
  background-color: #FFFFFF;
  padding: 10px; 
  border: 2px solid #ccc; 
  border-radius: 10px; 
}

.legend-color {
  display: inline-block;
  width: 20px; 
  height: 20px; 
  margin-right: 0;
}
