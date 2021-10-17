//reactweb
import firebase from 'firebase/compat/app';
// import { getDatabase ,ref,set,get} from "firebase/database";
import  "firebase/compat/database";



const firebaseConfig = {
    apiKey: "AIzaSyApiS6f1z452kfWd7j9ifYwez2mSdZftpk",
    authDomain: "fir-1-57d41.firebaseapp.com",
    databaseURL: "https://fir-1-57d41-default-rtdb.firebaseio.com",
    projectId: "fir-1-57d41",
    storageBucket: "fir-1-57d41.appspot.com",
    messagingSenderId: "116872143359",
    appId: "1:116872143359:web:ec0eca4aabb476fb8407ca"
  };
  const app = firebase.initializeApp(firebaseConfig)
 
const db=firebase.database().ref()
//  const db = ref(getDatabase(app))


  export default db;
 