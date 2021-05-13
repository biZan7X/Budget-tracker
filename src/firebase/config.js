import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyBNrAWjhOA55xpsEL4QwZsaYKeWdMjp-mY",
	authDomain: "firegram-9dc99.firebaseapp.com",
	projectId: "firegram-9dc99",
	storageBucket: "firegram-9dc99.appspot.com",
	messagingSenderId: "839019329071",
	appId: "1:839019329071:web:237dc70701b42bec3ff8da",
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
