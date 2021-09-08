let panier = JSON.parse(localStorage.getItem("productStore"));
console.log(panier);

















































// function panierArticles() {
  
 

    // if(panier ==     null) {
    // const panierVide = `
    // <div class="product-container-panier-vide">
    //     <div> Le panier est vide </div>
    // </div>
    // `
    // positionPanier.innerHTML = panierVide;

    //     console.log("je suis vide");

    // } else {

    //     console.log("je ne suis pas vide");
    // }

//}

// const positionPanier = document.getElementsByClassName("product-container-panier");
// console.log(positionPanier);

// // // let produitPanier = [];

// // //si est vide

// if(panier === null) {



//     const panierVide = `
//     <div class="product-container-panier-vide">
//         <div> Le panier est vide </div>
//     </div>
//     `
//     positionPanier.innerHTML = panierVide;

// console.log("je suis vide");

//  }
//else {
//   console.log("je ne suis pas vide");

// // const templatePanier = document.getElementById("productrow")
// // const clonePanier = document.importNode(templatePanier.cotrue)

// // clonePanier.getElementById("name") = panier[j].name;


//     let produitPanier = document.getElementsByClassName("mytable");
//     console.log(produitPanier);

//     for (j=0; j < panier.length; j++){
//         produitPanier = produitPanier + `
//         <div class="mytable">
               
//         <div>Nom: ${panier[j].name}</div>
//         <div>color</div>
//         <div>quantite</div>
//         <div>prix</div>
//         <div>supprimer article</div>

//        </div>
//        `;
//     } 
      

// //     }
//     if (j == panier.length){
//     positionPanier.innerHTML = produitPanier;
//     }

//}

   
/* <tr>
<td>${panier[j].name}</td>
 <td> ${panier[j].color} </td>
<td> ${panier[j].number}</td>
<td> ${panier[j].price}</td>
 </tr> */
// getPanier(products);

// function getPanier() {


//     for (let products in ls) {
//         document.getElementsByClassName("product-container").innerHTML += `
//         <div class="card card-panier" id="card panier">
//         <div class="name"> ${products.name}</div>
//         <div class="color"> ${products.color} </div>
//         <div class="quantite"> ${products.number} </div>
//         <div class="prix"> ${products.price} </div>
//     </div>
  
//         `
//     }
// }

// name: productName.innerHTML,
// price: productPrice.innerHTML,
// number: productNumber.value,
// color: productColor.value,
// id: id
//  <div class="card card-panier" id="card-panier">
// <div class="name"> NAME </div>
// <tr>${panier[j].name} </tr>
// <div class="color"> COLOR </div>
// <div class="quantite"> QUANTITE </div>
// <div class="prix"> PRIX </div>
// <div class="name"> ${panier[j].name} </div>
// <div class="color"> ${panier[j].color} </div>
// <div class="quantite"> ${panier[j].number} </div>
// <div class="prix"> ${panier[j].price} </div>
// </div> 