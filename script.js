

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyB3E2pu2CLs7z5TpmCcComb5_s10CnGxR0",
  authDomain: "miniprojet-15888.firebaseapp.com",
  projectId: "miniprojet-15888",
  storageBucket: "miniprojet-15888.firebasestorage.app",
  messagingSenderId: "928633813181",
  appId: "1:928633813181:web:e1061cdb9104f447d05fd4",
  measurementId: "G-NS0B0408Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




function showChallenge(){

 const defis = " Ton Defis : "
   //mettez le defis du jours ici//
   const NouveauDefisDuJour = ["Dit bonjour à un inconnu", "Écris une chose positive sur ta journée"];


    const Affichage=document.getElementById('welcome-title')

    const aujourdhui = new Date();
    const jourUnique = Math.floor(aujourdhui.getTime() / (1000 * 60 * 60 * 24));
    const index = jourUnique % NouveauDefisDuJour.length;

    Affichage.textContent= defis + NouveauDefisDuJour[index];
  
}
window.showChallenge = showChallenge;

const btnCommunaute = document.getElementById('btn-communaute');
const viewAccueil = document.getElementById('view-accueil');
const viewChat = document.getElementById('view-chat');
const btnRetour = document.getElementById('btn-return');

btnCommunaute.addEventListener('click', (e) => {
    e.preventDefault(); 
    viewAccueil.style.display = 'none'; 
    viewChat.style.display = 'flex';   
    console.log("Bienvenue dans le salon !");
});


btnRetour.addEventListener('click', (e) => {
  viewChat.style.display = 'none';
  viewAccueil.style.display = 'flex';
});
