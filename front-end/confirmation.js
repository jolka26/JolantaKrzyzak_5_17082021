let totalKey = JSON.parse(localStorage.getItem("totalPrix"));

main();

function main() {
    displayOrder();
}

function displayOrder() {

    document.querySelector(".confirmation").innerHTML = `
    <div class="card container-panier-vide">
    <p>Statut de la commande pour la somme <strong>${totalKey} €</strong> - Traitement en cours; </p>
    <p> Votre commande est passée, elle est en cours de traitement par l'équipe d'ORINOCO.  </p>
    <p>Merci!</p>
    </div>
    <button class="retour"><a href="index.html" >Retour à l'accueil </a></button>
    `
    localStorage.clear()
}