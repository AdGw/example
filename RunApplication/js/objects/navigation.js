(function($) {
  let EARTH_RADIUS = 6371000;
  let DEG_TO_RAD = Math.PI / 180.0;
  let THREE_PI = Math.PI * 3;
  let TWO_PI = Math.PI * 2;

  const isFloat = n => !isNaN(parseFloat(n)) && isFinite(n);

  const recursiveConvert = (input, callback) => {
    if (input instanceof Array) {
      return input.map(function(el) {
        return recursiveConvert(el, callback);
      });
    }
    if (input instanceof Object) {
      input = JSON.parse(JSON.stringify(input));
      for (let key in input) {
        if (input.hasOwnProperty(key)) {
          input[key] = recursiveConvert(input[key], callback);
        }
      }
      return input;
    }
    if (isFloat(input)) {
      return callback(input);
    }
  };

  const toRadians = input => recursiveConvert(input, val => val * DEG_TO_RAD);

  const toDegrees = input => recursiveConvert(input, val => val / DEG_TO_RAD);

  const pointAtDistance = (inputCoords, distance) => {
    let result = {};
    let coords = toRadians(inputCoords);
    let sinLat = Math.sin(coords.latitude);
    let cosLat = Math.cos(coords.latitude);

    let bearing = Math.random() * TWO_PI;
    let theta = distance / EARTH_RADIUS;
    let sinBearing = Math.sin(bearing);
    let cosBearing = Math.cos(bearing);
    let sinTheta = Math.sin(theta);
    let cosTheta = Math.cos(theta);

    result.latitude = Math.asin(
      sinLat * cosTheta + cosLat * sinTheta * cosBearing
    );
    result.longitude =
      coords.longitude +
      Math.atan2(
        sinBearing * sinTheta * cosLat,
        cosTheta - sinLat * Math.sin(result.latitude)
      );
    result.longitude = (result.longitude + THREE_PI) % TWO_PI - Math.PI;

    return toDegrees(result);
  };

  // straight line distance counting.
  const straightDist = (v1, v2) => {
    let R = EARTH_RADIUS; // Radius of the earth in km
    let dLat = toRadians(v2.latitude - v1.latitude); // deg2rad below
    let dLon = toRadians(v2.longitude - v1.longitude);
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(v1.latitude)) *
        Math.cos(toRadians(v2.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    return d;
  };
  const midPoint = (v1, v2) => {
    return {
      latitude: (v1.latitude + v2.latitude) / 2,
      longitude: (v1.longitude + v2.longitude) / 2
    };
  };

  const pointInCircle = (coord, distance) => {
    let rnd = Math.random();
    // use square root of random number to avoid high density at the center
    let randomDist = Math.sqrt(rnd) * distance;
    return pointAtDistance(coord, randomDist);
  };

  // // calculate middle point in straight line between v1 and v2.
  // let mid = midPoint(v1, v2);
  // // calculate distance between points in straight line
  // // (mid point and first point)
  // let distance = straightDist(v1, mid);
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
})(jQuery);
