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