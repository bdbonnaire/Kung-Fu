function initMap() {
    var centerMap = {lat: 43.612538, lng: 3.886150};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: centerMap
    });
    var marker = new google.maps.Marker({
      position: {lat: 43.612973, lng: 3.886472},
      map: map
    });
  }
