
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZE5ZzOntMCJeKKxwae589xQUklHwAlCE",
  authDomain: "rect-crud-bbb49.firebaseapp.com",
  databaseURL: "https://rect-crud-bbb49-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rect-crud-bbb49",
  storageBucket: "rect-crud-bbb49.appspot.com",
  messagingSenderId: "824097387398",
  appId: "1:824097387398:web:c9d7dee3541aa066453207",
  measurementId: "G-1Z6Y3K9454"
};



const firebase = require('firebase');

const db = firebase.initializeApp(firebaseConfig);

module.exports = db;


// module.exports= db;
//export const db = getFirestore(app);



// export const auth = getAuth();
// export const storage = getStorage(app);

// export const analytics = getAnalytics(app);