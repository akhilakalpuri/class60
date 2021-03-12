import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_wJnNJzXnXfUFayBoN9gaYIXVkW91cvQ",
    authDomain: "wireless-buzzer-c2311.firebaseapp.com",
    databaseURL: "https://wireless-buzzer-c2311-default-rtdb.firebaseio.com",
    projectId: "wireless-buzzer-c2311",
    storageBucket: "wireless-buzzer-c2311.appspot.com",
    messagingSenderId: "197911344995",
    appId: "1:197911344995:web:92e99f9739629b98da8556",
    measurementId: "G-36VWR4EG03"
}

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default  firebase.database()