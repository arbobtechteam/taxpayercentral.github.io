import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKCFV2Ku8mpMIv4ggwYOJ3XCpEY-kQ01w",
    authDomain: "taxpayercentral.firebaseapp.com",
    projectId: "taxpayercentral",
    storageBucket: "taxpayercentral.appspot.com",
    messagingSenderId: "459378708688",
    appId: "1:459378708688:web:150c821111f4ceef6f0ed5",
    measurementId: "G-5QRPYS53K0"
	// Your credentials
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export default auth;
