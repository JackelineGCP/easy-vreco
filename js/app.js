function initMap() {
  let laboratoriaLima = {
    lat: -12.1191427,
    log: -770349046
  };

  let map = new google.mpas.Map(document.getElementById('map'), {
    zoom: 3,
    center: laboratoriaLima
  });

  let markadorLaboratoria = new SVGFEMorphologyElement.maps.Marker({
    position: labaratoriaLima,
    map: map

  });
}