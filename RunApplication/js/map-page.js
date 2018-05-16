/* global google, inz */
const initMapPage = $mapPage => {
  // Prepare visualisation chart.
  google.load("visualization", "1", {
    packages: ["columnchart"]
  });

  // Submit new address button.
  let $submitDistBtn = $mapPage.find("#submit");
  // New address input in form.
  let $address = $mapPage.find("#address");
  // let $submitAddressBtn = $mapPage.find('#submitAddress');
  let $distance = $mapPage.find("#distance");
  // let $submitDistanceBtn = $mapPage.find('#submitDistance');
  let $calculateRoadBtn = $mapPage.find(".calculate-road");
  let $walkingMode = $mapPage.find("#walkingMode");
  let $bicyclingMode = $mapPage.find("#bicyclingMode");
  let $distanceRange = $mapPage.find(".rangeslider");

  let $easyDifficult = $mapPage.find('input[value="easy"]');
  let $hardDifficult = $mapPage.find('input[value="hard"]');

  let difficulty = "";

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
  let $map = $mapPage.find("#map")[0];
  let $elevationChart = $mapPage.find("#elevation_chart")[0];

  let mapObj = inz.map.create($map, true);
  // Get google map object from mapObj closure.
  let gmap = mapObj.getMap();

  let routesObj = inz.routes.create(gmap);
  let elevatorObj = inz.elevator.create($elevationChart, gmap);

  let distance = 0;

  // route should be always managed from outside of object.
  let route = {};

  // Prepare options to displayRoute.
  let options = {
    travelMode: "WALKING",
    avoidTolls: true
  };

  let directionsObjs = routesObj.getDirectionObj();

  routesObj.setOptions(options, directionsObjs);

  // Make possibility to use autocomplete on our input.
  let originAutoComplete = new google.maps.places.Autocomplete($address[0]);

  // When autocomplete is selected, change location.
  originAutoComplete.addListener("place_changed", function() {
    // Get geometry of selected place from autocomplete field.
    originAutoComplete.getPlace();
  });

  // Handle routes object events.
  routesObj.on("changed", data => {
    elevatorObj.setPath(data.gRoute, data.route, difficulty);
  });

  elevatorObj.on("generate-new", () => {
    let percTol = $distanceRange.val();
    routesObj.addWaypoint(route.origin, distance, percTol);
  });
  elevatorObj.on("show-map", data => {
    routesObj.showRouteWithWaypoints(data.gRoute);
  });

  routesObj.on("location", loc => {
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
    if ($distance[0].value == "") {
      window.alert("Please input a distance");
      return;
    }
    if ($walkingMode[0].checked) {
      options.travelMode = "WALKING";
    } else if ($bicyclingMode[0].checked) {
      options.travelMode = "BICYCLING";
    } else {
      window.alert("Please choose an activity");
      return;
    }

    if ($easyDifficult[0].checked) {
      difficulty = "easy";
    } else if ($hardDifficult[0].checked) {
      difficulty = "hard";
    } else {
      window.alert("Please choose a difficulty level");
      return;
    }

    routesObj.setOptions(options, directionsObjs);

    let percTol = $distanceRange.val();
    routesObj.addWaypoint(route.origin, distance, percTol);
  });

  // On submit address get new address from form and add it into
  // routes object.
  $submitDistBtn.on("click", () => {
    let address = $address.val();
    // Modify old route - change origin and destination.
    route.origin = address;
    route.destination = address;
    // Set new route.
    routesObj.showRoute(route);
    return;
  });

  $calculateRoadBtn.on("click", () => {
    let address = $address.val();
    distance = $distance.val();
    // Convert address to coordinates.
    routesObj.convAddrToLoc(gmap, address);
    if (address !== "" && distance !== "" && distance.match(/^\d+$/)) {
      document.getElementById("map").style.opacity = "0.2";
      let div = document.createElement("div");
      div.setAttribute("class", "spinner");
      document.body.appendChild(div);
    } else {
      alert("Please input data properly");
    }
  });

  // If clicked enter, then use upper click event.
  $address.on("keyup", function(e) {
    // preventDefault stops another events and use only this one.
    // It is neccessary to fuck off google.
    e.preventDefault();
    if (e.keyCode === 13) {
      $submitDistBtn.trigger("click");
    }
  });
};

// function() is a document ready. It is needed to load all scripts.
(function($) {
  let $mapPage = $("#mapPage");
  if ($mapPage.length === 0) {
    return;
  }
  initMapPage($mapPage);
})(jQuery);
