function initMap() {

  // variable para la ruta
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;

  const LaboratoriaLim = {
    lat: -12.1191427,
    lng: -77.0349046
  };

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: LaboratoriaLim
  });

  let marker = new google.maps.Marker({
    position: LaboratoriaLim,
    map: map
  });

  let latitud, longitud, miUbicacion;

  const funcionError = function (error) {
    alert('Activa tu ubicación')
  }

  const funcionExito = function (posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
    miUbicacion = new google.maps.Marker({
      position: {
        lat: latitud,
        lng: longitud
      },
      map: map
    })
    map.setCenter({
        lat: latitud,
        lng: longitud
      }),
      map.setZoom(18)
  }

  const search = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }
  document.getElementById('encuentrame').addEventListener('click', search);

  /* Se dibujará la ruta */
  directionsDisplay.setMap(map);

  let startOrigin = (document.getElementById('origen'));
  let autocompliteStart = new google.maps.places.Autocomplete(startOrigin);
  autocompliteStart.bindTo('bounds', map);

  let endDestination = (document.getElementById('destino'));
  let autocompliteEnd = new google.maps.places.Autocomplete(endDestination);
  autocompliteEnd.bindTo('bounds', map);

  /* Evento boton trazar ruta */
  document.getElementById('ruta').addEventListener('click', () => {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });
};

/* Calcular la ruta */
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('origen').value,
    destination: document.getElementById('destino').value,
    travelMode: 'DRIVING'
  }, function (response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

/* Esta función mostrará un error si la geolocalización falló*/
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}