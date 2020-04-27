const API_KEY = 'aqui va la api key'
const BASE_URL_MAPS = 'https://maps.googleapis.com/maps/api'
const OPTION_CALLBACK = 'initMap'

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = `${BASE_URL_MAPS}/js?key=${API_KEY}&callback=${OPTION_CALLBACK}`;
script.defer = true;
script.async = true;


document.head.appendChild(script);

var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -12.1711735,
      lng: -76.9712567
    },
    zoom: 24
  });
  infoWindow = new google.maps.InfoWindow;

  var marker = new google.maps.Marker({
    position: {
      lat: -12.1711733,
      lng: -76.9712565
    },
    title:"Mi casa",
    draggable: true,
    animation: google.maps.Animation.DROP,
    // map: map
  });
  marker.addListener('click', toggleBounce);


  marker.setMap(map);

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });


  /*

  ESTO ES SI QUIERO POSICIONARLO EN SU UBICACION ACTUAL DEL DISPOSITIVO

  Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  } */

  ///////////////////////////////////////


  infowindow = new google.maps.InfoWindow({
    content: contentString
  });


}




var contentString = `
'<div id="content">
  <div id="siteNotice">
  </div>
  <h1 id="firstHeading" class="firstHeading">Casa de cristian</h1>
  <div id="bodyContent">
    <p>
      <b>Casa de cristian</b>
      , aqui vivo yo
    </p>
    (ultima visita 26/04/2020).
  </div>
</div>
`;

function getContentString({nombre_casa, descripcion, id}) {
  return `
  '<div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="firstHeading" class="firstHeading">${nombre_casa}</h1>
    <div id="bodyContent">
      <p>
        <b>${nombre_casa}</b>
        , ${descripcion}

        <button id="${id}" onclick="printTemplate(event)">Ver detalle</button>
      </p>
      (ultima visita 26/04/2020).
    </div>
  </div>
  `;
}

function printTemplate(event) {
  console.log('se llamo', event.target.id)
}


var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

// Adds a marker to the map.
function addMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });

  points.push({
    lat: marker.position.lat(),
    lng: marker.position.lng()
  })

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}


// Adds a marker to the map.
function MyOwnAddMarker(location, map, metadata) {
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });

  points.push({
    lat: marker.position.lat(),
    lng: marker.position.lng()
  })

  console.log('infowindow', infowindow);

  const contentInfo = getContentString(metadata);
  console.log("MyOwnAddMarker -> contentInfo", contentInfo)

  const infowindow2 = new google.maps.InfoWindow({
    content: contentInfo
  });


  console.log('infowindow', infowindow);
  marker.addListener('click', function() {
    infowindow2.open(map, marker);
  });

}


var points = [];

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function printPoints() {
  console.log('points',points)
  console.log('points', JSON.stringify(points))
}

function requestPlace() {
  const array_posiciones = [
    {
      "lat":-12.17119360734935,
      "lng":-76.9713354898898,
      "metadata": {
        "nombre_casa": 'cristian',
        "descripcion": 'aqui vive asdas das d',
        "id": 1
      }
    },
    {
      "lat":-12.170999615428387,
      "lng":-76.97144289623202,
      "metadata": {
        "nombre_casa": 'diego',
        "descripcion": 'aqui vive asdas das d',
        "id": 2
      }
    },
    {
      "lat":-12.170983883906235,
      "lng":-76.97136377106608,
      "metadata": {
        "nombre_casa": 'luis',
        "descripcion": 'aqui vive asdas das d',
        "id": 3
      }
    },
    {
      "lat":-12.170922268768779,
      "lng":-76.97122966061534,
      "metadata": {
        "nombre_casa": 'mari',
        "descripcion": 'aqui vive asdas das d',
        "id": 4
      }
    },
    {
      "lat":-12.171112357976634,
      "lng":-76.97108616243304,
      "metadata": {
        "nombre_casa": 'monica',
        "descripcion": 'aqui vive asdas das d',
        "id": 5
      }
    },
    {
      "lat":-12.171090071662746,
      "lng":-76.97098155628146,
      "metadata": {
        "nombre_casa": 'fabrizio',
        "descripcion": 'aqui vive asdas das d',
        "id": 6
      }
    },
    {
      "lat":-12.170905226281437,
      "lng":-76.97103385935725,
      "metadata": {
        "nombre_casa": 'sotomayor',
        "descripcion": 'aqui vive asdas das d',
        "id": 7
      }
    },
    {
      "lat":-12.17086065361705,
      "lng":-76.97090511332453,
      "metadata": {
        "nombre_casa": 'enrique',
        "descripcion": 'aqui vive asdas das d',
        "id": 8
      }
    },
    {
      "lat":-12.17079772748989,
      "lng":-76.97065432678164,
      "metadata": {
        "nombre_casa": 'fortunata',
        "descripcion": 'aqui vive asdas das d',
        "id": 9
      }
    },
  ]

  for(const posicion of array_posiciones) {
    MyOwnAddMarker(posicion, map, posicion.metadata)
  }

}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}




