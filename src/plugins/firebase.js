

import Vue from 'vue'



import firebase from 'firebase/app'

import 'firebase/firebase-auth'



import * as firebaseui from 'firebaseui'



const firebaseConfig = {

    apiKey: "AIzaSyD7DzlbKIUgaV4ac1Dv_6XhXL_Dsq9yu2A",
    authDomain: "movie-921e1.firebaseapp.com",
    databaseURL: "https://movie-921e1.firebaseio.com",
    projectId: "movie-921e1",
    storageBucket: "movie-921e1.appspot.com",
    messagingSenderId: "603681534954",
    appId: "1:603681534954:web:825de4ac9586ed16a17893"
}



firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())



Vue.prototype.$firebase = firebase

Vue.prototype.$firebaseui = ui