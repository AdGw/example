/* global google */
// Can use this script when page loaded all scripts (document ready).
(function($) {
  // map function is a closure (object) private letiables and public methods.
  // It is create and manage new map.
  // This function returns object with methods which are using public methods.
  // Params:
  //  $map            [element] - html element which should be a new map.
  //  tryGeolocation  [boolean] - if true, try get geolocation.
  //                            - if false, ignore geolocation.
  const map = ($map, tryGeolocation) => {
    let output = {};
    let userPosition = {};

    // initMap initialises map with default options (location set to Szczecin).
    const initMap = () => {
      let gmap = new google.maps.Map($map, {
        center: {
          lat: 52.229,
          lng: 21.012
        },
        zoom: 15
      });
      return gmap;
    };

    // Create new map with default options.
    let gmap = initMap();

    // Add handling map information (legends, buttons, etc.) for newly created
    // map.
    let infoWindow = new google.maps.InfoWindow({
      map: gmap
    });

    // handleGeoLocationError handles geolocation errors.
    // Params:
    //  browserHasGeolocation [boolean] -
    //  infoWindow
    const handleGeoLocationError = (browserHasGeolocation, infoWindow, pos) => {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
    };

    // setUserPosition sets marker on map which defines user position.
    // It sets also map centering on following position.
    // params:
    //    position [object]: {
    //      lat: string,  - latidute
    //      lng: string   - longitude
    //    }
    const setUserPosition = position => {
      infoWindow.setPosition(position);
      infoWindow.setContent("Twoja lokalizacja.");
      gmap.setCenter(position);
    };

    // askForGeolocation asks user if he wants to use geolocation to get his
    // position which can be used as marker. Also sets position.
    const askForGeolocation = pos => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            userPosition = pos;
            setUserPosition(pos);
          },
          () => {
            handleGeoLocationError(true, infoWindow, gmap.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation.
        handleGeoLocationError(false, infoWindow, gmap.getCenter());
      }
    };

    // Get user position from geolocation if tryGelocation is set as true
    // and sets it on map.
    if (tryGeolocation) {
      askForGeolocation();
    }

    return $.extend(output, {
      // getElem returns $map element.
      getElem: () => {
        return $map;
      },
      // getMap returns map object.
      getMap: () => {
        return gmap;
      },
      // getUserPosition gets actually user position.
      getUserPosition: () => {
        return userPosition;
      },
      // setUserPosition sets new user position on map and update letiable
      // (it uses private method).
      // params:
      //    position [object]: {
      //      lat: string,    - latidute
      //      lng: string     - longitude
      //    }
      setUserPostion: position => {
        setUserPosition(position);
        userPosition = position;
      }
    });
  };

  // Create namespace 'inz' (object) with possibility to create map object.
  // This is global object.
  // To check this object, write 'inz' in browser console.
  window.inz = $.extend(true, window.inz, {
    map: {
      create: map
    }
  });
})(jQuery);
