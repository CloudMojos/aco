import "./styles.css";
import Endpoint from "./endpoints";
// import AntColonyOptimization from "./aco";
let osmtogeojson = require("osmtogeojson");

let showRoutes = document.querySelector("#show-routes");
let hideRoutes = document.querySelector("#hide-routes");
let addOrigin = document.querySelector("#add-origin");
let addDestination = document.querySelector("#add-destination");

let estimatedTimeDiv = document.querySelector("#estimated-time");
let estimatedDistanceDiv = document.querySelector("#estimated-distance");

let origin = new Endpoint("origin");
let dest = new Endpoint("dest");

let originMarker = null;
let destMarker = null;

// Map initialization
let map = L.map("map").setView([14.58722099685053, 120.98439219018271], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Map updates

showRoutes.addEventListener("click", (e) => {
  if (!originMarker) {
    alert(
      !destMarker ? "Add origin and destination first" : "Add an origin first"
    );
    return;
  } else if (!destMarker) {
    alert("Add a destination first");
    return;
  }

  // let bbox = map.getBounds().toBBoxString();

  // bbox = bbox.split(",");
  // let validBbox = bbox[1] + ',' + bbox[0] + ',' + bbox[3] + ',' + bbox[2]

  // let validBbox =
  //   origin.getLatLng().lat +
  //   "," +
  //   origin.getLatLng().lng +
  //   "," +
  //   dest.getLatLng().lat +
  //   "," +
  //   dest.getLatLng().lng;
  // console.log(validBbox);

  // let overpassUrl =
  //   'https://www.overpass-api.de/api/interpreter?data=[out:json];way(around:500)["highway"](' +
  //   origin.getLatLng().lat +
  //   "," +
  //   origin.getLatLng().lng +
  //   ');way(around:500)["highway"](' +
  //   dest.getLatLng().lat +
  //   "," +
  //   dest.getLatLng().lng +
  //   ");out body;out skel qt;";

  // let validRoutes;
  // fetch(overpassUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     map.eachLayer((layer) => {
  //       if (!layer.options.attribution) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //     validRoutes = L.geoJSON(osmtogeojson(data));
  //   });

  // const ant = new AntColonyOptimization(15, 100, 0.5);
  // ant.initialize(routes);
  // const optimizedRoute = antColonyOptimization.run();

  // optimizedRoute.addTo(map);

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  let control = L.Routing.control({
    waypoints: [
      originMarker.getLatLng(), // Start point coordinates
      destMarker.getLatLng(), // End point coordinates
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
  }).addTo(map);

  // Listen for the 'routeselected' event
  control.on("routeselected", function (e) {
    let route = e.route;
    let summary = route.summary;

    // Access the estimated time and distance
    let estimatedTime = summary.totalTime; // in seconds
    let estimatedDistance = summary.totalDistance; // in meters

    // Convert estimated time to minutes
    let estimatedTimeInMinutes = Math.round(estimatedTime / 60);

    clearTimeAndDistance();
    displayTimeAndDistance(estimatedTimeInMinutes, estimatedDistance);

    console.log("Estimated Time: " + estimatedTimeInMinutes + " minutes");
    console.log("Estimated Distance: " + estimatedDistance + " meters");
  });
});

hideRoutes.addEventListener("click", (e) => {
  map.eachLayer((layer) => {
    if (!layer.options.attribution) {
      map.removeLayer(layer);
    }
  });
  origin.clear();
  dest.clear();
  console.log("this happens");
  clearTimeAndDistance();
});

addOrigin.addEventListener("click", (e) => {
  map.off("click");

  map.on("click", function (event) {
    console.log("origin clicked");
    if (origin.inMap === false) {
      if (originMarker) {
        map.removeLayer(originMarker); // Remove existing marker
      }
      originMarker = L.marker(event.latlng, { draggable: true }).addTo(map);
      originMarker.bindPopup("This is an origin").openPopup();
      origin.setCoord(event.latlng);
      origin.inMap = true;
    }
  });
  return;
});

addDestination.addEventListener("click", (e) => {
  map.off("click");
  if (origin.inMap === false) {
    return;
  }

  map.on("click", function (event) {
    if (dest.inMap === false) {
      if (destMarker) {
        map.removeLayer(destMarker); // Remove existing marker
      }
      destMarker = L.marker(event.latlng, { draggable: true }).addTo(map);
      destMarker.bindPopup("This is a destination").openPopup();
      dest.setCoord(event.latlng);
      dest.inMap = true;
    }
  });
});

function clearTimeAndDistance() {
  estimatedTimeDiv.textContent = "";
  estimatedDistanceDiv.textContent = "";
}

function displayTimeAndDistance(time, distance) {
  let timeText = document.createTextNode(time + " minute(s)");
  let distanceText = document.createTextNode(distance + " meter(s)");

  estimatedTimeDiv.appendChild(timeText);
  estimatedDistanceDiv.appendChild(distanceText);
}
