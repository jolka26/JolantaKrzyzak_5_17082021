let totalKey = JSON.parse(localStorage.getItem("totalPrix"));
let contact = JSON.parse(localStorage.getItem("contact"));


main();

function main() {
    displayOrder();
}

/// function qui affiche la confirmation et prix total de la commande, puis vide le local storage

function displayOrder() {

 

    document.querySelector(".confirmation").innerHTML = `
    <div class="card container-panier-vide">
    <p>Statut de la commande pour la somme <strong>${totalKey} €</strong> - Traitement en cours; </p>
    <p>Votre commande est passée, elle est en cours de traitement par l'équipe d'ORINOCO.  </p>
    <p>Confirmation envoyé à l'adresse mail: <strong> ${contact.email} </strong></p>
    <p>Merci de votre achat. À bientôt! </p>
    </div>
    <button class="retour" onclick="window.location.href='index.html'">Retour à l'accueil </button>
    `
    localStorage.clear();
    setTimeout("window.location.href = 'index.html'", 5000);
}