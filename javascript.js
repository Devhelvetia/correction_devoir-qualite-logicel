
Oui, vous pouvez inclure le bouton pour accéder aux conditions générales d'utilisation juste après le message de confirmation. Voici comment vous pouvez faire :

javascript
Copy code
if(confirm('Acceptez-vous les conditions de protection des données personnelles de ce site ?')) {
    // Oui
    alert('Ok');
    var boutonConditions = document.createElement("button");
    boutonConditions.textContent = "Conditions générales d'utilisation";
    boutonConditions.addEventListener("click", function() {
        // Ici vous pouvez définir l'action lorsque l'utilisateur clique sur le bouton pour afficher les conditions générales d'utilisation
        // Par exemple, vous pouvez rediriger l'utilisateur vers une autre page contenant les conditions d'utilisation
        window.location.href = "chemin_vers_conditions_utilisation.html";
    });
    document.body.appendChild(boutonConditions);
} else {
    // Non
    alert('Annulation');
}