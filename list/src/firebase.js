import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB1Ea47G7fNZsfA8gTFbMpNm-keoB2D3b4",
    authDomain: "todo-list-e5c31.firebaseapp.com",
    databaseURL: "https://todo-list-e5c31.firebaseio.com",
    projectId: "todo-list-e5c31",
    storageBucket: "todo-list-e5c31.appspot.com",
    messagingSenderId: "817242177829"
  };

export const firebaseApp = firebase.initializeApp(config);
export const taskRef = firebase.database().ref('tasks');
export const completeTaskRef = firebase.database().ref('completeTasks');