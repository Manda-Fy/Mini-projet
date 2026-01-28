
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
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

async function envoyerMessage() {
    const input = document.getElementById('msg-input');
    const texte = input.value.trim();
    if (texte !== "") {
        try {
            
            await addDoc(collection(db, "messages"), {
                contenu: texte,
                date: serverTimestamp(),
                auteur: "Anonyme"        
            });
            input.value = ""; 
            console.log("Message envoyé !");
        } catch (erreur) {
            console.error("Erreur d'envoi : ", erreur);
        }
    }
}
document.getElementById('send-btn').addEventListener('click', envoyerMessage);

// Optionnel : Envoyer aussi avec la touche "Entrée"
document.getElementById('msg-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') envoyerMessage();
});
const q = query(collection(db, "messages"), orderBy("date", "asc"));

// 2. On écoute cette requête en temps réel
onSnapshot(q, (snapshot) => {
    const messagesDisplay = document.getElementById('messages-display');
    messagesDisplay.innerHTML = ""; // On vide l'écran pour tout redessiner proprement

    snapshot.forEach((doc) => {
        const message = doc.data();
        
        // 3. Création visuelle du message (Le DOM)
        const divMessage = document.createElement('div');
        divMessage.classList.add('message-bulle'); // On pourra styliser cette classe en CSS
        
        // On remplit le contenu
        divMessage.innerHTML = `
            <span class="auteur">${message.auteur}</span>
            <p class="texte">${message.contenu}</p>
        `;
        
        messagesDisplay.appendChild(divMessage);
    });

    // 4. Scroll automatique vers le bas pour voir le dernier message
    messagesDisplay.scrollTop = messagesDisplay.scrollHeight;
});