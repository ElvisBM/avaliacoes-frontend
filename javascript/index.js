console.log('Yet another Hello world');

var map = null;
var markers = [];

placesOfInterest = [
    { name: 'Charme da paulista', lat: -23.562172, lng: -46.655794 },
    { name: 'The Blue Pub', lat: -23.563112, lng: -46.650338 },
    { name: 'Veloso', lat: -23.585107, lng: -46.635219 },
    { name: 'Let\'s Beer', lat: -23.586508, lng: -46.641739 },
    { name: 'O\'Malley\'s', lat: -23.558296, lng: -46.665923 },
    { name: 'Finnegan\'s', lat: -23.559547, lng: -46.676794 },
    { name: 'Partisans', lat: -23.561049, lng: -46.682555 },
    { name: 'Morrison', lat: -23.555106, lng: -46.690883 },
    { name: 'Cão Véio', lat: -23.558130, lng: -46.679508 },
    { name: 'Cervejaria Nacional', lat: -23.564740, lng: -46.690641 },
    { name: 'Brewdog', lat: -23.561309, lng: -46.693935 },
    { name: 'Rei das Batidas', lat: -23.570613, lng: -46.705977 }
];

const customIcon = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#F7B217',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

const customIconActive = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#fff',
    fillOpacity: 0.98,
    scale: 0.98,
    strokeColor: '#666666',
    strokeWeight: 3
};

function addMarker(marker) {
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(marker.lat, marker.lng),
        icon: customIcon,
        title: marker.name
    });

    //Adiciona o title ao infowindow//popup 
    marker['infowindow'] = new google.maps.InfoWindow({
        content: '<strong>'+ marker.title + '</strong>',
    });

    //Click do marker//place abre o infowind//popup e fecha todos os outros
    var i;
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            for (var j = 0; j < markers.length; j++) {
                markers[j].setIcon(customIcon); 
                markers[j]['infowindow'].close(map, this);
            }
            marker.setIcon(customIconActive);
            marker['infowindow'].open(map, this);
        };
    })(marker, i));
    markers.push(marker);

    //Close infowindo volta o icon do marker
    google.maps.event.addListener(marker['infowindow'],'closeclick',function(){
        marker.setIcon(customIcon); 
    });
};

function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-23.562172, -46.655794),
        gestureHandling: 'greedy',
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        },
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //Adicionando o primeiro marcador como exemplo
    //addMarker(placesOfInterest[0]);
    for (let place of placesOfInterest) {
       addMarker(place);
    };

    //Adicionado btn para ir para localização do usuário
    var btnGeo = document.getElementById('btngeolocation');
    btnGeo.addEventListener( 'click', function(event) {
        geolocation(map);
    });
}

//Busca a Localização do usuário e mostra no mapa.
function geolocation(map){
    //Adicionado GeoLocalização
    var infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Sua localização :)');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    };
}