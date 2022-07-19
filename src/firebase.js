import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDXOZ__3LpryPsFYOnow43UbpcauFrPUS0",
  authDomain: "assistant-2d36d.firebaseapp.com",
  projectId: "assistant-2d36d",
  storageBucket: "assistant-2d36d.appspot.com",
  messagingSenderId: "483234374223",
  appId: "1:483234374223:web:cdb8cbafe952b45284403a",
};

const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
