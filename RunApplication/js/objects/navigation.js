(function($) {

  var EARTH_RADIUS = 6371000;
  var DEG_TO_RAD = Math.PI / 180.0;
  var THREE_PI = Math.PI * 3;
  var TWO_PI = Math.PI * 2;

  function isFloat(n) {

    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function recursiveConvert(input, callback) {
    if (input instanceof Array) {
      return input.map(function(el) {
        return recursiveConvert(el, callback);
      });
    }
    if (input instanceof Object) {
      input = JSON.parse(JSON.stringify(input));
      for (var key in input) {
        if (input.hasOwnProperty(key)) {
          input[key] = recursiveConvert(input[key], callback);
        }
      }
      return input;
    }
    if (isFloat(input)) {
      return callback(input);
    }
  }

  function toRadians(input) {
    return recursiveConvert(input, function(val) {
      return val * DEG_TO_RAD;
    });
  }

  function toDegrees(input) {
    return recursiveConvert(input, function(val) {
      return val / DEG_TO_RAD;
    });
  }

  function pointAtDistance(inputCoords, distance) {
    var result = {};
    var coords = toRadians(inputCoords);
    var sinLat = Math.sin(coords.latitude);
    var cosLat = Math.cos(coords.latitude);

    var bearing = Math.random() * TWO_PI;
    var theta = distance / EARTH_RADIUS;
    var sinBearing = Math.sin(bearing);
    var cosBearing = Math.cos(bearing);
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);

    result.latitude = Math.asin(sinLat * cosTheta + cosLat * sinTheta *
      cosBearing);
    result.longitude = coords.longitude +
      Math.atan2(sinBearing * sinTheta * cosLat, cosTheta - sinLat *
        Math.sin(result.latitude));
    result.longitude = ((result.longitude + THREE_PI) % TWO_PI) - Math.PI;

    return toDegrees(result);
  }

  // straight line distance counting.
  function straightDist(v1, v2) {
    var R = EARTH_RADIUS; // Radius of the earth in km
    var dLat = toRadians(v2.latitude - v1.latitude); // deg2rad below
    var dLon = toRadians(v2.longitude - v1.longitude);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(v1.latitude)) * Math.cos(toRadians(v2.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  // var v1 = {
  //   latitude: 53.4285438,
  //   longitude: 14.552811600000041
  // };

  // var v2 = {
  //   latitude: 53.465305401854586,
  //   longitude: 14.646180620802864
  // };
  function midPoint(v1, v2) {
    return {
      latitude: (v1.latitude + v2.latitude) / 2,
      longitude: (v1.longitude + v2.longitude) / 2
    };
  }

  function pointInCircle(coord, distance) {
    var rnd = Math.random();
    // use square root of random number to avoid high density at the center
    var randomDist = Math.sqrt(rnd) * distance;
    return pointAtDistance(coord, randomDist);
  }

  // // calculate middle point in straight line between v1 and v2.
  // var mid = midPoint(v1, v2);
  // // calculate distance between points in straight line
  // // (mid point and first point)
  // var distance = straightDist(v1, mid);
  // console.log(pointInCircle(mid, distance));

  window.inz = $.extend(true, window.inz, {
    nav: {
      pointInCircle: pointInCircle,
      midPoint: midPoint,
      straightDist: straightDist,
      pointAtDistance: pointAtDistance,
      toDegrees: toDegrees
    }
  });

}(jQuery));