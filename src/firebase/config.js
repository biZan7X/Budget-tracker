import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
	apiKey: "AIzaSyAwV66qciTLd-5A0lxhQant2AiRnIZdej0",
	authDomain: "budget-app-83561.firebaseapp.com",
	projectId: "budget-app-83561",
	storageBucket: "budget-app-83561.appspot.com",
	messagingSenderId: "285842282505",
	appId: "1:285842282505:web:0502dbff73f57b654cc0d8",
});

export const db = firebase.firestore();
export default firebase;
