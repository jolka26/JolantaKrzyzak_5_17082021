let panier = JSON.parse(localStorage.getItem("productStore"));
//console.log(panier);


main ();

function main() {
    command();
    viderPanier();
    prixTotal();
    afficherFormulaire();
    order();
 
}

function command() {


const positionPanier = document.querySelector("#table__panier")
//console.log(positionPanier);

if(panier === null){
// console.log("je sui vide!");
const panierVide = `

<div class="card container-panier-vide">
<div>Panier est vide... </div>
<a href="index.html">Ajout le produit</a>
</div>
`
positionPanier.innerHTML = panierVide
}

else {
    // console.log("je ne suis pas vide!");
  produitPanier = [];


  for(j=0; j< panier.length; j++){
    //   console.log(panier.length);

    let prix = panier[j].price
    let prix2 = parseInt(prix.substring(0, prix.length -2))

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
  positionPanier.innerHTML = produitPanier
  }
}

}



//surprimer produits 
function viderPanier() {

    const btnViderPanier = document.querySelector(".supprimer")

    btnViderPanier.addEventListener("click", (event) => {
        
        localStorage.clear()
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
    let prixProduitDansPanier = priceInt * panier[k].number
    // console.log("mon prix: " + prixProduitDansPanier);
    allPrice.push(prixProduitDansPanier)
    // console.log(allPrice);
  }
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const prixTotal = allPrice.reduce(reducer, 0)
    //console.log(prixTotal);
  
    const totalPrice = document.querySelector("#table__total")
    
    totalPrice.innerHTML =  `
     <div class=" card container-montant-total">
    <div id="total"> TOTAL </div>
    <div id="totalprix"><strong>${prixTotal} €</strong></div>
   </div>
    `
  }

  function afficherFormulaire() {

    const positionForm = document.querySelector(".table")

    const structureForm = `
    <div class="card__form">
    <h2 class="text-center">Votre adresse de livraison </h2> 
    <span id="formVide" class="infoFormVide"> </span>
   
    <form name="RegForm" class="form">
       
            <label for="firstName">Prénom:</label><span id="prenomVide" class="infoVide"> </span>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom" minlength='2' maxlength='20' required>
        
            <label for="lastName">Nom:</label><span id="nomVide" class="infoVide"> </span>
            <input type="text" id="lastName" name="lastName" placeholder="Nom" maxlength='20' required>
        
            <label for="address">Adresse:</label><span id="addressVide" class="infoVide"> </span>
            <input type="text" id="address" name="address"  placeholder="Adresse de livraison" required>
   
            <label for="codePostal">Code postal:</label><span id="codePostaleVide" class="infoVide"> </span>
            <input type="text" id="codePostal" name="codePostal"  placeholder="Code postal" required>
       
            <label for="city">Ville:</label><span id="villeVide" class="infoVide"> </span>
            <input type="text" id="city" name="city"  placeholder="Ville" required>
         
            <label for="email">Adresse mail:</label><span id="emailVide" class="infoVide"> </span>
            <input type="email" id="email" name="email" placeholder="Adresse mail" required>
    

    </form>
    <button class="command__button">Commander</button>
</div>
    `

    positionForm.insertAdjacentHTML("afterend", structureForm)
  }




function order(){
const btnOrder = document.querySelector(".command__button")

btnOrder.addEventListener("click", (event) => {
    // event.preventDefault();

    const client = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address:  document.querySelector("#address").value,
        codePostal: document.querySelector("#codePostal").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value
    }
    // console.log("client");
    // console.log(client);

///validation form

const regex = (value) => {
    return /^[a-zA-Z]{3,20}$/.test(value)
}

const regexPostal = (value) => {
    return /^[0-9]{5}$/.test(value)
}

const regexEmail = (value) => {
    return /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/.test(value)
}

const regexAddresse = (value) => {
    return /^[A-Za-z0-9\s]{5,60}$/.test(value)
}

function champVide(querySelector) {
    document.querySelector(`#${querySelector}`).textContent = ""
}

function champVideText(querySelector) {
    document.querySelector(`#${querySelector}`).textContent = "Veuillez vous remplir ce champ "
}


function validFirstName() {
    const firstName = client.firstName

    if(regex(firstName)) {
        champVide("prenomVide")
        return true
    }else {
        champVideText("prenomVide")
        return false
    }
}

function validLastName() {
    const lastName = client.lastName

    if(regex(lastName)) {
        champVide("nomVide")
        return true
    }else {
        champVideText("nomVide")
        return false
    }  
}

function validAddresse() {
    const address = client.address

    if(regexAddresse(address)) {
        champVide("addressVide")
        return true
    }else {
        champVideText("addressVide")
        return false
    }
}

function validCodePostale() {
    const codePostal = client.codePostal

    if(regexPostal(codePostal)) {
        champVide("codePostaleVide")
        return true
    }else {
        champVideText("codePostaleVide")
        return false
    }  
}

function validVille() {
    const city = client.city

    if(regex(city)) {
        champVide("villeVide")
        return true
    }else {
        champVideText("villeVide")
        return false
    }
}

function validEmail() {
    const email = client.email

    if(regexEmail(email)) {
        champVide("emailVide")
        return true
    }else {
        champVideText("emailVide")
        return false
    }
}


if(validFirstName() && validLastName() && validAddresse() && validCodePostale() && validVille() && validEmail() ){
    champVide("formVide")
    localStorage.setItem("client", JSON.stringify(client))
}else {
    document.querySelector("#formVide").textContent = "Veuillez vous remplir formulaire "
}
/////fin validation form
// envoyer en server 


// const objetEnvoyer = {
//  client,
//  panier,
    
// }
//     console.log("objetEnvoyer");
//     console.log(objetEnvoyer);

//  const promise = fetch(`http://localhost:3000/api/furniture/order` , {
//         method: "POST",
//         body: JSON.stringify(objetEnvoyer),
//         headers: {
//             "Content-type" : "application/json",
//         },
//     })
})

}



