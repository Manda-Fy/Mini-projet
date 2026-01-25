

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
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

// Fonction pour envoyer un message de test
async function envoyerTest() {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      texte: "Salut l'équipe !",
      date: new Date()
    });
    console.log("Message envoyé avec l'ID : ", docRef.id);
    alert("Connexion réussie ! Le message est dans Firebase.");
  } catch (e) {
    console.error("Erreur d'ajout : ", e);
  }
}

// Appelle la fonction pour tester tout de suite au chargement
envoyerTest();


function showChallenge(){

 defis = " Ton Defis : "
   //mettez le defis du jours ici//
   const NouveauDefisDuJour = ["Dit bonjour à un inconnu", "Écris une chose positive sur ta journée"];


    const Affichage=document.getElementById('welcome-title')

    const aujourdhui = new Date();
    const jourUnique = Math.floor(aujourdhui.getTime() / (1000 * 60 * 60 * 24));
    const index = jourUnique % NouveauDefisDuJour.length;

    Affichage.textContent= defis + NouveauDefisDuJour[index];
  
}