let filter = {
  'YGdqOTDDmrbGm80gM5UHicxMBgS2': true,
  'HUXmyv1dSSUnIvYk976MPWUSaTG2': true,
  'hPdk0Qpo0Gb5NsWSgxsqPM7M2EA2': true
};

function setup() {
  noCanvas();
  // Initialize Firebase
let config = {
	apiKey: "AIzaSyCcq-9sW0-3WQ6zoLmzZ5UuXQLLebTRMbI",
	authDomain: "color-classification-ab7d3.firebaseapp.com",
	databaseURL: "https://color-classification-ab7d3.firebaseio.com",
	projectId: "color-classification-ab7d3",
	storageBucket: "color-classification-ab7d3.appspot.com",
	messagingSenderId: "574671660934"
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

  // saveJSON(allData, 'colorData.json');
  console.log(allData.entries.length);
}