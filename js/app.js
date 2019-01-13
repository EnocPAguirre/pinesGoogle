// Nuestro código irá aquí
var arregloPines = [];

//funcion para agregar los pines
function agregarMarcador( location ) {

  var pin = new google.maps.Marker({

    position: location,
    map: map,
    animation: google.maps.Animation.DROP

  });
console.log('Latitud', location.lat());
console.log('Longitud', location.lng());

for( var i in arregloPines) {
  arregloPines[i].setMap(null);
}

arregloPines.push(pin);

}


function cargar_mapa(){

  var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(19.3320702, -99.1891743),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map( document.getElementById('gmap_canvas'), myOptions )

  //Agregar el listener

  map.addListener('click', function(event) {

    agregarMarcador(event.latLng);

  });

  var pin = new google.maps.Marker({

    position: new google.maps.LatLng(19.3320702, -99.1891743),
    map: map,
    title: "Hola Mundo"

  });
  arregloPines.push(pin);
}
