// import firebase from "./firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBRfWEolVIZ8fb0Ub-cmivtpniCXM43mc4",
//   authDomain: "clone-b721b.firebaseapp.com",
//   projectId: "clone-b721b",
//   storageBucket: "clone-b721b.appspot.com",
//   messagingSenderId: "358379827960",
//   appId: "1:358379827960:web:f277f16b3063216ac6810d",
//   measurementId: "G-KT5EKGR9EW",
// });

// const auth = firebase.auth;

// export default { auth };

// import firebase from "./firebase";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBRfWEolVIZ8fb0Ub-cmivtpniCXM43mc4",
//   authDomain: "clone-b721b.firebaseapp.com",
//   projectId: "clone-b721b",
//   storageBucket: "clone-b721b.appspot.com",
//   messagingSenderId: "358379827960",
//   appId: "1:358379827960:web:f277f16b3063216ac6810d",
//   measurementId: "G-KT5EKGR9EW",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// export { auth }; // Export 'auth' as a named export

// export default firebaseApp; // Export the default firebaseApp

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRfWEolVIZ8fb0Ub-cmivtpniCXM43mc4",
  authDomain: "clone-b721b.firebaseapp.com",
  projectId: "clone-b721b",
  storageBucket: "clone-b721b.appspot.com",
  messagingSenderId: "358379827960",
  appId: "1:358379827960:web:f277f16b3063216ac6810d",
  measurementId: "G-KT5EKGR9EW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth(); // Use firebaseApp.auth() instead of firebase.auth()

export { auth }; // Export 'auth' as a named export

export default firebaseApp; // Export the default firebaseApp
