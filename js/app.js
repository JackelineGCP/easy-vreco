// Declaramos las variables

let btnPrimary= document.getElementById('btn-primary');
let origen = document.getElementById('origen');
let destino = document.getElementById('destino');
let btnSecond = document.getElementById('btn-second');
let maps = document.getElementById('map');


function initMap() {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  let laboratoriaLima = {
    lat: -12.1191427,
    log: -77.0349046
  };

  let map = new google.maps.Map(maps, {
    zoom: 3,
    center: laboratoriaLima
  });

  let markadorLaboratoria = new google.maps.Marker({
    position: labaratoriaLima,
    map: map,
    animation: google.maps.Animation.DROP,

  });
}

function buscar(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(functionExito, functionError);
  }
}

let latitud, longitud;
const functionExito = function (posicion){
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitud;
}

let miUbicacion = new google.map.Marker({
  position: {lat: latitud, lng: longitud},
  map: map
});

map.setZoom(18);
map.setCenter({lat: latitud, lng: longitud});

let functionError = function (error){
  error('Tenemos problemas con encontrar tu ubicación');
}

document.getElementById("encuentrame").addEventListener("click", buscar);