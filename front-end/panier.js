let panier = JSON.parse(localStorage.getItem("productStore"));
//console.log(panier);


main ();

function main() {
    command();
    viderPanier();
    prixTotal();
    afficherFormulaire();
}

function command() {


const positionPanier = document.querySelector("#table__panier");
//console.log(positionPanier);

if(panier === null){
// console.log("je sui vide!");
const panierVide = `

<div class="card container-panier-vide">
<div>Panier est vide... </div>
<a href="index.html">Ajout le produit</a>
</div>
`;
positionPanier.innerHTML = panierVide;
}

else {
    // console.log("je ne suis pas vide!");
  produitPanier = [];


  for(j=0; j< panier.length; j++){
    //   console.log(panier.length);

    let prix = panier[j].price;
    let prix2 = parseInt(prix.substring(0, prix.length -2));

    //console.log( prix2 * panier[j].number);
   
    produitPanier = produitPanier + `
    <div class=" container-recapitulatif">
    <div class="info">Nom: ${panier[j].name}</div>
    <div class="info"> Quantite:  ${panier[j].number}</div>
    <div class="info"> Color:  ${panier[j].color}</div>
    <div class="info">Prix:  ${prix2 * panier[j].number} €</div>
    </div>
    `

  }
  if(j == panier.length){
  positionPanier.innerHTML = produitPanier;
  }
}

}



//surprimer produits 
function viderPanier() {

    const btnViderPanier = document.querySelector(".supprimer");

    btnViderPanier.addEventListener("click", (event) => {
        
        localStorage.clear();
    });
}

///prix total

function prixTotal() {
    let allPrice = [];
  
  for(let k = 0; k < panier.length; k++) {
    // console.log(panier[k].price);
  
    let price = panier[k].price
    let newPrice = price.substring(0, price.length - 2)
    // //console.log(newPrice);
    let priceInt = parseInt(newPrice)
    let prixProduitDansPanier = priceInt * panier[k].number;
    // console.log("mon prix: " + prixProduitDansPanier);
    allPrice.push(prixProduitDansPanier);
    // console.log(allPrice);
  }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotal = allPrice.reduce(reducer, 0);
    //console.log(prixTotal);
  
    const totalPrice = document.querySelector("#table__total");
    
    totalPrice.innerHTML =  `
     <div class=" card container-montant-total">
    <div id="total"> TOTAL </div>
    <div id="totalprix"><strong>${prixTotal} €</strong></div>
   </div>
    `
  }

  function afficherFormulaire() {

    const positionForm = document.querySelector(".table");

    const structureForm = `
    <div class="card__form">
    <h2 class="text-center">Votre adresse de livraison</h2>
    <form class="form">
       
            <label for="firstName">Prénom:</label>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom" required>
        
            <label for="lastName">Nom:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Nom" required>
        
            <label for="adress">Adresse:</label>
            <input type="text" id="adress" name="adress"  placeholder="Adresse de livraison" required>
   
            <label for="codePostal">Code postal:</label>
            <input type="text" id="codePostal" name="codePostal"  placeholder="Code postal" required>
       
            <label for="city">Ville:</label>
            <input type="text" id="city" name="city"  placeholder="Ville" required>
         
            <label for="email">Adresse mail:</label>
            <input type="email" id="email" name="email" placeholder="Adresse mail" required>
    

    </form>
    <button class="command__button">Commander</button>
</div>
    `

    positionForm.insertAdjacentHTML("afterend", structureForm)
  }

const btnOrder = document.querySelector(".command__button");

btnOrder.addEventListener("click", (event) => {
    event.preventDefault();


//     localStorage.setItem("firstName", document.querySelector("#firstName").value);
//     localStorage.setItem("lastName", document.querySelector("#lastName").value);
//     localStorage.setItem("adress", document.querySelector("#adress").value);
//     localStorage.setItem("codePostal", document.querySelector("#codePostal").value);
//     localStorage.setItem("city", document.querySelector("#city").value);
//     localStorage.setItem("email", document.querySelector("#email").value);

// //    console.log(document.querySelector("#firstName").value);
// //    console.log(document.querySelector("#lastName").value);
// //    console.log(document.querySelector("#adress").value);
// //    console.log(document.querySelector("#codePostal").value);
// //    console.log(document.querySelector("#city").value);
// //    console.log(document.querySelector("#mail").value);

// const form = {
//     firstName: localStorage.getItem("firstName"),
//     lastName: localStorage.getItem("lastName"),
//     adress: localStorage.getItem("adress"),
//     codePostal: localStorage.getItem("codePostal"),
//     city: localStorage.getItem("city"),
//     email: localStorage.getItem("email"),
// }
// console.log(form);

const objetEnvoyer = {
    panier,
    // form
}
// console.log(objetEnvoyer);

})



 
