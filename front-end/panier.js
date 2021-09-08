let panier = JSON.parse(localStorage.getItem("productStore"));
//console.log(panier);


main ();

function main() {
    command();
    viderPanier();
    prixTotal();
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
    <div>Nom produit: ${panier[j].name}</div>
    <div>Quantite:  ${panier[j].number}</div>
    <div>Color:  ${panier[j].color}</div>
    <div>Prix:  ${prix2 * panier[j].number} €</div>
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