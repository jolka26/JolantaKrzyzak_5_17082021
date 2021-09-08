let panier = JSON.parse(localStorage.getItem("productStore"));
//console.log(panier);


main ();

function main() {
    command();
    viderPanier();
    prixTotal();
}

function command() {


const positionPanier = document.querySelector(".product-container-panier");
//console.log(positionPanier);

if(panier === null){
// console.log("je sui vide!");
const panierVide = `

<div class="card container-panier-vide">
<div>Panier est vide! </div>
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
    produitPanier = produitPanier + `
    <div class="card container-recapitulatif">
    <div>Nom produit: ${panier[j].name}</div>
    <div>Quantite:  ${panier[j].number}</div>
    <div>Color:  ${panier[j].color}</div>
    <div>Prix:  ${panier[j].price}</div>
    </div>
    `;

 
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






///prix to tal

function prixTotal() {
    let allPrice = [];
 
for(let k = 0; k < panier.length; k++) {
    // console.log(panier[k].price);

    let price = panier[k].price
    let newPrice = price.substring(0, price.length - 2)
    //console.log(newPrice);
    let prixProduitDansPanier = parseInt(newPrice);
    //console.log(prixProduitDansPanier);
    allPrice.push(prixProduitDansPanier);
    // console.log(allPrice);
}
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const prixTotal = allPrice.reduce(reducer, 0);
    //console.log(prixTotal);

    const totalPrice = document.querySelector(".container-montant-total");
    
    totalPrice.innerHTML = 
    `

    <div> Montant total - ${prixTotal} €</div>
   
    `
 }

 