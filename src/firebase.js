import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: "AIzaSyDY-qzyPFj_3upn66IFTOyORrj9AnObs_U",
  authDomain: "amblestorysynth.firebaseapp.com",
  databaseURL: "https://amblestorysynth-default-rtdb.firebaseio.com/", // TODO: Add your databaseURL here
  projectId: "amblestorysynth",
  storageBucket: "amblestorysynth.appspot.com",
  messagingSenderId: "1934221459",
  appId: "1:1934221459:web:34daf6d7a5616927c1ed66"
});

export const db = app.firestore();
export const roomsCollection = db.collection('rooms');

export const rtdb = app.database();