//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey: "AIzaSyA2pl3g7j5aI1NSRut3Bfsh5CmFQtjAkMQ",
  authDomain: "k-koding-myhoneytip.firebaseapp.com",
  databaseURL: "https://k-koding-myhoneytip-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "k-koding-myhoneytip",
  storageBucket: "k-koding-myhoneytip.appspot.com",
  messagingSenderId: "324237621078",
  appId: "1:324237621078:web:6ba4e48f0ec59fc33c08f7",
  measurementId: "G-VLZTXDTRS5"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()