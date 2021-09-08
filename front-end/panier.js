let panier = JSON.parse(localStorage.getItem("productStore"));
console.log(panier);



const positionPanier = document.querySelector(".product-container-panier");
console.log(positionPanier);

if(panier === null){
// console.log("je sui vide!");
const panierVide = `

<div class="card container-panier-vide">
<div>Panier est vide!</div>
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


//surprimer produit 

let btnTrash = document.querySelectorAll(".supprimer");
console.log(btnTrash);










