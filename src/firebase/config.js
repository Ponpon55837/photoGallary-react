import * as firebase from 'firebase/app'
// 用來存照片
import 'firebase/storage'
// 用來存資料
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJ3n1v2IElXMJXQjUzVDSupqSwS1p-dZA",
  authDomain: "whattalk-745a6.firebaseapp.com",
  databaseURL: "https://whattalk-745a6.firebaseio.com",
  projectId: "whattalk-745a6",
  storageBucket: "whattalk-745a6.appspot.com",
  messagingSenderId: "159446944969",
  appId: "1:159446944969:web:062be4bcbe2e0f027b9118"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage()
export const projectFirestore = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
