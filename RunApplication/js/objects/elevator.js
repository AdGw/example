/* global google, inz */
// Can use this script when page loaded all scripts (document ready).
(function($) {
  // elevator function is a closure (object) private letiables and public
  // methods. It is create and manage new elevator for map.
  // This function returns object with methods which are using public methods.
  // Params:
  //  $elevator       [element] - html element which should be a new elevator.
  //  map             [object]  - google map object.
  const elevator = ($elevator, map) => {
    let gPath = [];
    let gRoute = {};

    let output = inz.eventDispatcher.create();
    let trigger = output.trigger;
    delete output.trigger;

    let difficultyLvl = "";
    // Create an ElevationService.
    let elevator = new google.maps.ElevationService();

    // showPolyline shows new polyline on elevation path.
    const showPolyline = () => {
      // Display a polyline of the elevation path.
      new google.maps.Polyline({
        path: gPath.routes[0].overview_path,
        strokeColor: "#0000CC",
        strokeOpacity: 0.4,
        strokeWeight: 0,
        map: map
      });
    };

    const countAscents = elev => {
      let ascents = 0;
      let biggest = 0;
      let startAscIndex = 0;
      let isAsc = false;
      for (let j = 1; j < elev.length; j++) {
        let e = elev[j].elevation;
        let ep = elev[j - 1].elevation;

        if (e - ep <= 0) {
          isAsc = false;
          startAscIndex = j;
          continue;
        }

        let v1 = {
          latitude: elev[j].location.lat(),
          longitude: elev[j].location.lng()
        };

        let v2 = {
          latitude: elev[startAscIndex].location.lat(),
          longitude: elev[startAscIndex].location.lng()
        };

        let dist = inz.nav.straightDist(v1, v2);
        if (dist >= 10 && isAsc === false) {
          let diffH = elev[j].elevation - elev[startAscIndex].elevation;

          let angle = inz.nav.toDegrees(Math.atan(diffH / dist));
          if (angle > biggest) {
            biggest = angle;
          }
          if (angle > 2.8) {
            isAsc = true;
            ascents++;
          }
        }
      }
      return ascents;
    };

    const drawElevation = data => {
      let chart = new google.visualization.ColumnChart($elevator);
      document.getElementById("map").style.opacity = "1";
      $(".spinner").remove();
      // Draw elevation chart.
      chart.draw(data, {
        fontSize: 14,
        height: 150,
        hAxis: {
          textStyle: {
            fontName: "Arial",
            fontSize: 15
          }
        },
        legend: "none",
        titleY: "Height(m)",
        titleX: "Distance(km)"
      });
    };

    const prepareElevation = (elevations, status) => {
      if (status !== "OK") {
        // Show the error code inside the chartDiv.
        window.alert("Cannot show elevation: request failed because " + status);
        return;
      }

      let ascents = countAscents(elevations);
      console.log("ascents: " + ascents);

      if (
        (difficultyLvl === "easy" && ascents >= 3) ||
        (difficultyLvl === "hard" && ascents < 3)
      ) {
        trigger("generate-new");
        return;
      }

      // Create a new chart in the $elevator.
      // Extract the data from which to populate the chart.
      // Because the samples are equidistant, the 'Sample'
      // column here does double duty as distance along the
      // X axis.
      let data = new google.visualization.DataTable();

      data.addColumn("string", "Sample");
      data.addColumn("number", "Wysokosc");

      for (let i = 0; i < elevations.length; i++) {
        data.addRow(["", elevations[i].elevation]);
      }

      drawElevation(data);
      trigger("show-map", { gPath: gPath, gRoute: gRoute });
    };

    // prepareAndShowElevation prepare and show elevation from google path
    // object.
    const prepareAndShowElevation = gPath => {
      // Create a PathElevationRequest object using this array.
      // Ask for 512 samples along that path.
      // Initiate the path request.
      elevator.getElevationAlongPath(
        {
          path: gPath.routes[0].overview_path,
          samples: gPath.routes[0].overview_path.length
        },
        prepareElevation
      );
    };

    return $.extend(output, {
      // getElems gets $elevator element and returns it to user.
      getElem: () => {
        return $elevator;
      },
      // setPath sets path on elevator (show heights) and shows it.
      setPath: (p, route, difficulty) => {
        difficultyLvl = difficulty;
        gPath = p;
        gRoute = route;
        showPolyline(p);
        prepareAndShowElevation(p);
      }
    });
  };

  // Create namespace 'inz' (object) with possibility to create map object.
  // This is global object.
  // To check this object, write 'inz' in browser console.
  window.inz = $.extend(true, window.inz, {
    elevator: {
      create: elevator
    }
  });
})(jQuery);
