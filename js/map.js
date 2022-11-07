function initMap() {
    const location = { lat: 43.453021722401914, lng: -80.51338049139997 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        disableDefaultUI: true,
        styles: [
            {
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]
            }
          ]
      

    });




    const contentstring =
        '<div id="content">' +
        '<h1 class="info_heading">Voodo</h1>' +
        '<p class="info_content">137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine</p>' +
        '<div class="contactwrapper">' +
        '<img src="https://img.icons8.com/ios/12/null/phone.png" />' +
        '<span class="info_contact">1-800-480-9597</span>' +
        '</div>' +
        '<div  class="contactwrapper">' +
        '<img src="https://img.icons8.com/ios/12/null/secured-letter--v1.png" />' +
        '<span class="info_contact">info@voodoo.com</span>' +
        '</div>' +

        '</div>';

    const infoWindow = new google.maps.InfoWindow({
        content: contentstring,

    })

    // I have used icon from a third-party resource because the API does not allow using local image links 
    const LocationIcon = "https://img.icons8.com/metro/36/null/marker.png";

    const marker = new google.maps.Marker({
        position: location,
        icon: LocationIcon,
        map: map,
    });




    // make the info window be opened by default
    infoWindow.open({ anchor: marker, map: map })

    //make the info window open on click
    marker.addListener('click', () => {
        infoWindow.open({
            anchor: marker, map: map
        })
    })



}

window.initMap = initMap;