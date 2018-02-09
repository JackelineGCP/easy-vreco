function initMap() {
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
      //navegación
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
      }
    }
    document.getElementById('encuentrame').addEventListener('click', search);
  
  }



/*
// Declaramos las variables
let btnPrimary = document.getElementById('btn-primary');
let origen = document.getElementById('origen');
let destino = document.getElementById('destino');
let btnSecond = document.getElementById('btn-second');
let mapa = document.getElementById('map');
let placeSearch, autocomplete;

new google.maps.places.Autocomplete('origen');
new google.maps.places.Autocomplete('destino');

// declarando eventos
btnPrimary.addEventListener('click', FindMePosition);

function initMap() {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  initAutocomplete();

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

  directionsDisplay.setMap(map);
  const userChange = () => {
    userChangeDisplay(directionsService, directionsDisplay);
  };

  btnSecond.addEventListener('click', userChange);
}

*/


/*

// usando información Json para marcar mapas usando la API de Google Maps.
let locationsInfo = []

const getLocations = ()=>{
    fetch('https://www.datos.gov.co/resource/g373-n3yy.json')
    .then(response => response.json())
    .then(locations => {
        console.log(locations)

        locations.forEach(location => {
            let locationData = {
                position:{lat:location.punto.coordinates[1],lng:location.punto.coordinates[0]},
                name:location.nombre_sede                
            }
            locationsInfo.push(locationData)
        })
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((data)=>{
                let currentPosition = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                }
                dibujarMapa(currentPosition)
            })
        }
    })
}

const dibujarMapa = (obj) =>{
   let map = new google.maps.Map(document.getElementById('map'),{
        zoom:4,
        center:obj
    })

    let marker = new google.maps.Marker({
        position:obj,
        title:'Tu ubicacion'
    })
    marker.setMap(map)

    let markers = locationsInfo.map( (place) =>{
        return new google.maps.Marker({
            position: place.position,
            map:map,
            title:place.name
        })
    })
}
window.addEventListener('load',getLocations)
*/