import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDAZ57dLt90HE9-5u7LePUJAA6o5ylQaXI",
    authDomain: "vue-realtime-chat.firebaseapp.com",
    databaseURL: "https://vue-realtime-chat.firebaseio.com",
    projectId: "vue-realtime-chat",
    storageBucket: "vue-realtime-chat.appspot.com",
    messagingSenderId: "766786995310"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({
      timestampsInSnapshots: true
  })

  export default firebaseApp.firestore();