function init(){
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(-20.445479673078967, -44.766391548511244);
	
	var mapOptions = {
		center: myLocation,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		},
		zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
		styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#242f3e" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#38414e" }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#9ca5b3" }
                ]
            }
        ]
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		icon: 'images/marcador.png'
	});

    var infoWindow = new google.maps.InfoWindow({
        content: "<h3>Minha Localização</h3><p>Você está aqui!</p>"
    });

    marker.addListener("click", function() {
        infoWindow.open(myMap, marker);
    });
}

google.maps.event.addDomListener(window, 'load', init);

/*
document.addEventListener("DOMContentLoaded", function () {
    let imagens = document.querySelectorAll(".slider img");
    let indice = 0;

    document.getElementById("prev").onclick = () => {
        imagens[indice].classList.remove("active");
        indice = (indice > 0) ? indice - 1 : imagens.length - 1;
        imagens[indice].classList.add("active");
    };

    document.getElementById("next").onclick = () => {
        imagens[indice].classList.remove("active");
        indice = (indice < imagens.length - 1) ? indice + 1 : 0;
        imagens[indice].classList.add("active");
    };
});*/