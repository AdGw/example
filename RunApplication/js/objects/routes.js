/* global google, inz */
(function($) {
  // routes is a object which contains all inits to set routes to selected map.
  const routes = map => {
    // eventDispatcher allows to send letiables outside the object by events.
    let output = inz.eventDispatcher.create();
    let trigger = output.trigger;
    delete output.trigger;

    // Total kilometers distance.
    let $total = $("#total");
    let totalDistance = 0;

    // gRoute is a object which contains legs distance, polyline, waypoints,
    // warnings, etc.
    let gRoute = {};

    let startPosition = {};
    let options;
    let directionObjs;

    // Initialisation services and display renderer.
    let directionsService = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
      map: map,
      panel: $("#right-panel")[0] // right panel on map (to manage zoom)
    });

    let geocoder = new google.maps.Geocoder();

    const geocodeAddress = (gMap, address) => {
      let loc = {};
      geocoder.geocode(
        {
          address: address
        },
        (results, status) => {
          if (status === "OK") {
            loc = {
              location: {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              }
            };
            trigger("location", loc);
          } else {
            loc = { err: "failed to geocode result." };
            trigger("location", loc);
          }
        }
      );
    };

    const countDistanceKM = gRoute => {
      let total = 0;
      // Iterate over waypoints called 'legs'.
      for (let i = 0; i < gRoute.routes[0].legs.length; i++) {
        total += gRoute.routes[0].legs[i].distance.value;
      }
      // change to kilometers.
      total = total / 1000;
      return total;
    };

    const displayRouteWithWaypoints = route => {
      // directionService.route()
      if (route === undefined || Object.keys(route).length === 0) {
        return;
      }
      directionObjs.service.route(
        {
          origin: route.origin,
          destination: route.destination,
          waypoints: route.waypoints,
          travelMode: options.travelMode,
          avoidTolls: options.avoidTolls
        },
        (response, status) => {
          if (status === "OK") {
            directionObjs.display.setDirections(response);
          } else {
            // cannot be alert here!
            window.alert("Could not display directions due to: " + status);
          }
        }
      );
    };

    const displayRoute = route => {
      // directionService.route()
      directionObjs.service.route(
        {
          origin: route.origin,
          destination: route.destination,
          travelMode: options.travelMode,
          avoidTolls: options.avoidTolls
        },
        (response, status) => {
          if (status === "OK") {
            directionObjs.display.setDirections(response);
          } else {
            // cannot be alert here!
            window.alert("Could not display directions due to: " + status);
          }
        }
      );
    };

    const generateThirdPoint = (circle, dist, request, percTol) => {
      let distTol = dist * percTol / 100;
      console.log("distance to find: " + dist);
      (function fn(n, distance, result, request) {
        if (n >= 30) {
          gRoute = result;
          trigger("changed", { gRoute: gRoute, route: request });
          return;
        }
        console.log("dist:" + distance);
        setTimeout(() => {
          let error = Math.abs(dist - distance);
          let position = inz.nav.pointInCircle(
            circle.midPoint,
            (circle.radius - error * 0.25) / 2.5 * 1000
          );

          position = {
            lat: position.latitude,
            lng: position.longitude
          };

          if (error < distTol) {
            gRoute = result;
            trigger("changed", { gRoute: gRoute, route: request });
            return;
          }

          request.waypoints[1].location = position;

          directionsService.route(request, res => {
            if (!res || res.routes.length === 0) {
              fn(n + 1, distance, result, request);
            } else {
              let dist = countDistanceKM(res);
              fn(n + 1, dist, res, request);
            }
          });
        }, 700);
      })(0, 0, {}, request);
    };

    const prepareForThirdPoint = (request, distance, percTol) => {
      console.log("Generating third point!!!");

      let v1 = {
        latitude: request.origin.lat,
        longitude: request.origin.lng
      };

      let v2 = {
        latitude: request.waypoints[0].location.lat,
        longitude: request.waypoints[0].location.lng
      };
      // calculate middle point in straight line between v1 and v2.
      let midPoint = inz.nav.midPoint(v1, v2);

      // calculate radius of new circle between points in straight line
      // (mid point and first point)
      let radius = inz.nav.straightDist(v1, midPoint) / 1000;

      request.waypoints[1] = { location: {} };

      let circle = {
        midPoint: midPoint,
        radius: radius * 10
      };

      generateThirdPoint(circle, distance, request, percTol);
    };

    const generateSecondPoint = (startPosition, routeDist, percTol) => {
      let newDist = routeDist * 0.7;
      let distTol = newDist * percTol / 100;
      console.log("distance to find: " + routeDist);
      (function fn(n, distance, result, request) {
        if (n >= 30) {
          gRoute = result;
          prepareForThirdPoint(request, routeDist, percTol);
          // trigger("changed", { gRoute: gRoute, route: request });
          return;
        }
        console.log("dist:" + distance);
        setTimeout(() => {
          let error = Math.abs(newDist - distance);

          let position = inz.nav.pointAtDistance(
            {
              latitude: startPosition.lat,
              longitude: startPosition.lng
            },
            (newDist - error * 0.25) / 2.5 * 1000
          );

          position = {
            lat: position.latitude,
            lng: position.longitude
          };
          if (error < distTol) {
            gRoute = result;
            prepareForThirdPoint(request, routeDist, percTol);
            // trigger("changed", { gRoute: gRoute, route: request });
            return;
          }

          request = {
            origin: startPosition,
            destination: startPosition,
            travelMode: options.travelMode,
            avoidTolls: options.avoidTolls,
            waypoints: [
              {
                location: position
              }
            ]
          };

          directionsService.route(request, res => {
            if (!res || res.routes.length === 0) {
              fn(n + 1, distance, result, request);
            } else {
              let dist = countDistanceKM(res);
              fn(n + 1, dist, res, request);
            }
          });
        }, 700);
      })(0, 0, {}, {});
    };

    // ------------- EVENTS --------------

    // On change directions (and add new waypoints) call countDistanceKM
    // to refresh total distance (in kilometers).
    // Also it sends google route object outside by 'changed' event.
    directionsDisplay.addListener("directions_changed", () => {
      let generatedRoute = directionsDisplay.getDirections();
      totalDistance = countDistanceKM(generatedRoute);
      gRoute = generatedRoute;
      // Show total distance.
      $total.text(totalDistance + " km");

      // Trigger sends event 'changed' with google route object outside
      // this object (to main-page.js).
      trigger("changed", { gRoute: gRoute });
    });

    return $.extend(output, {
      // getTotalDistance return total distance for routes.
      getTotalDistance: () => totalDistance,
      // getRoute returns route which is a object from google map.
      getRoute: () => gRoute,
      getDirectionObj: () => {
        let directionObjs = {
          service: directionsService,
          display: directionsDisplay
        };
        return directionObjs;
      },
      getStartPosition: () => startPosition,
      convAddrToLoc: function(gMap, address) {
        geocodeAddress(gMap, address);
      },
      addWaypoint: function(startPosition, distance, percTol) {
        generateSecondPoint(startPosition, distance, percTol);
      },
      setOptions: function(opts, directsObj) {
        directionObjs = directsObj;
        options = opts;
      },
      showRoute: function(route) {
        displayRoute(route);
      },
      showRouteWithWaypoints: function(route) {
        displayRouteWithWaypoints(route);
      }
    });
  };

  // Create namespace 'inz' (object) with possibility to create routes object.
  // This is global object.
  // To check this object, write 'inz' in browser console.
  window.inz = $.extend(true, window.inz, {
    routes: {
      create: routes
    }
  });
})(jQuery);
