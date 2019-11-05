let filter = {
  'YGdqOTDDmrbGm80gM5UHicxMBgS2': true,
  'HUXmyv1dSSUnIvYk976MPWUSaTG2': true,
  'hPdk0Qpo0Gb5NsWSgxsqPM7M2EA2': true
};

function setup() {
  noCanvas();
  // Initialize Firebase
var firebaseConfig = {
      apiKey: "AIzaSyDzrZUScnXhP6YpxCWDj1k113hqBnFcoGc",
      authDomain: "color-classification-eee25.firebaseapp.com",
      databaseURL: "https://color-classification-eee25.firebaseio.com",
      projectId: "color-classification-eee25",
      storageBucket: "color-classification-eee25.appspot.com",
      messagingSenderId: "664559696364",
      appId: "1:664559696364:web:f68a040e4af400128a68c9",
      measurementId: "G-WG36KR82FH"
    };
	firebase.initializeApp(config);
  	database = firebase.database();
  	let ref = database.ref('colors');
  	ref.once('value', gotData); //, errorData);
}


function gotData(results) {
  let data = results.val();

  let allData = {
    entries: []
  };

  // Processing data
  let keys = Object.keys(data);
  for (let key of keys) {
    let record = data[key];
    let id = record.uid;
    if (!filter[id]) {
      allData.entries.push(record);
    }
  }

  saveJSON(allData, 'colorData.json');
  console.log(allData.entries.length);
}

