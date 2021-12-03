import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyDHMzMswQ3EcOgcF6XtPc7RXCLkatbSax8',
  authDomain: 'login-e00cc.firebaseapp.com',
  projectId: 'login-e00cc',
  storageBucket: 'login-e00cc.appspot.com',
  messagingSenderId: '94213446447',
  appId: '1:94213446447:web:09307121acbb8ceedadfda',
  measurementId: 'G-21HW9JKQST',
};

const appFire: any = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(appFire);
export default appFire

