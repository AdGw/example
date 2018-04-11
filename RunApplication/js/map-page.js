/* global google, inz */
function initMapPage($mapPage) {
  // Prepare visualisation chart.
  google.load('visualization', '1', {
    packages: ['columnchart']
  });

  // Submit new address button.
  var $submitDistBtn = $mapPage.find('#submit');
  // New address input in form.
  var $address = $mapPage.find('#address');
  // var $submitAddressBtn = $mapPage.find('#submitAddress');
  var $distance = $mapPage.find('#distance');
  // var $submitDistanceBtn = $mapPage.find('#submitDistance');
  var $calculateRoadBtn = $mapPage.find('.calculate-road');
  var $walkingMode = $mapPage.find('#walkingMode');
  var $bicyclingMode = $mapPage.find('#bicyclingMode');
  var $distanceRange = $mapPage.find('.rangeslider');

  var $easyDifficult = $mapPage.find('input[value="easy"]');
  var $hardDifficult = $mapPage.find('input[value="hard"]');

  var difficulty = "";

  // Range slider.
  $distanceRange.rangeslider({
    polyfill: false,
    onInit: function() {
      this.output = $('<div class="range-output" />')
        .insertAfter(this.$range)
        .html(this.$element.val() + " %");
    },
    onSlide: function(position, value) {
      this.output.html(value + " %");
    }
  });

  // find('#map')[0] because we select first element.
  // Find is searching for all elements with id = map, but
  // we have always one id per page.
  var $map = $mapPage.find('#map')[0];
  var $elevationChart = $mapPage.find('#elevation_chart')[0];

  var mapObj = inz.map.create($map, true);
  // Get google map object from mapObj closure.
  var gmap = mapObj.getMap();

  var routesObj = inz.routes.create(gmap);
  var elevatorObj = inz.elevator.create($elevationChart, gmap);

  var distance = 0;

  // route should be always managed from outside of object.
  var route = {};

  // Prepare options to displayRoute.
  var options = {
    travelMode: "WALKING",
    avoidTolls: true
  };

  var directionsObjs = routesObj.getDirectionObj();

  routesObj.setOptions(options, directionsObjs);

  // Make possibility to use autocomplete on our input.
  var originAutoComplete = new google.maps.places.Autocomplete($address[0]);

  // When autocomplete is selected, change location.
  originAutoComplete.addListener('place_changed', function() {
    // Get geometry of selected place from autocomplete field.
    originAutoComplete.getPlace();
  });

  // Handle routes object events.
  routesObj.on('changed', function(data) {
    elevatorObj.setPath(data.gRoute, data.route, difficulty);
  });

  elevatorObj.on('generate-new', function() {
    var percTol = $distanceRange.val();
    routesObj.addWaypoint(route.origin, distance, percTol);
  });
  elevatorObj.on('show-map', function(data) {
    routesObj.showRouteWithWaypoints(data.gRoute);
  });

  routesObj.on('location', function(loc) {
    if ($.isEmptyObject(loc)) {
      return;
    }
    if (loc.err) {
      window.alert(loc.err);
      return;
    }
    // Modify old route - change origin and destination.
    route.origin = loc.location;
    route.destination = loc.location;

    if ($walkingMode[0].checked) {
      options.travelMode = "WALKING";
    } else if ($bicyclingMode[0].checked) {
      options.travelMode = "BICYCLING";
    } else {
      window.alert("Podaj tryb aktywnosci");
      return;
    }

    if ($easyDifficult[0].checked) {
      difficulty = "easy";
    } else if ($hardDifficult[0].checked) {
      difficulty = "hard";
    } else {
      window.alert("Podaj poziom trudnosci");
      return;
    }

    routesObj.setOptions(options, directionsObjs);

    var percTol = $distanceRange.val();
    routesObj.addWaypoint(route.origin, distance, percTol);
  });

  // On submit address get new address from form and add it into
  // routes object.
  $submitDistBtn.on('click', function() {
    var address = $address.val();
    // Modify old route - change origin and destination.
    route.origin = address;
    route.destination = address;
    // Set new route.
    routesObj.showRoute(route);
    return;
  });

  $calculateRoadBtn.on('click', function() {
    var address = $address.val();
    distance = $distance.val();
    // Convert address to coordinates.
    routesObj.convAddrToLoc(gmap, address);
  });

  // If clicked enter, then use upper click event.
  $address.on('keyup', function(e) {
    // preventDefault stops another events and use only this one.
    // It is neccessary to fuck off google.
    e.preventDefault();
    if (e.keyCode === 13) {
      $submitDistBtn.trigger("click");
    }
  });

}

// function() is a document ready. It is needed to load all scripts.
(function($) {
  var $mapPage = $('#mapPage');
  if ($mapPage.length === 0) {
    return;
  }
  initMapPage($mapPage);
})(jQuery);