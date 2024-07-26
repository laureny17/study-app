// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtd2MKRlH3dgQb-mulbLJCYKHmb0IumF8",
  authDomain: "study-app-a4cba.firebaseapp.com",
  projectId: "study-app-a4cba",
  storageBucket: "study-app-a4cba.appspot.com",
  messagingSenderId: "536702443948",
  appId: "1:536702443948:web:04909f2895a4e9c98bda09",
  measurementId: "G-6EEDYL2ZY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
