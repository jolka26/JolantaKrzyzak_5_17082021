let params = new URL(document.location).searchParams;
let id = params.get("id");
// console.log(id);
// const productName = document.getElementsByClassName("nameProduit");
// const productPrice = document.getElementsByClassName("prixProduit");
// const productNumber = document.getElementById("productNumber");
// const productColor = document.getElementById("varnish");

getProducts();

// recupere le produit depuis API  , en cas d'erreur de connection, message d'erreur, si non il affiche produit choisir 
function getProducts() {
 return fetch(`http://localhost:3000/api/furniture/${id}`)
  .then(function(httpBodyResponse) {
    return httpBodyResponse.json()
  })
  .catch(function(error) {
    alert ("error quelque chose ne va pas.. êtes-vous connecté à api ?")
  })
  .then(function(result) {
      const produit = result;
      const color = result.varnish;
      

      displayProduct();
      addColor();
      addPanier();

      function displayProduct(){
  
        document.getElementById("main").innerHTML +=   `
        <div class="product-container">
        <div class="card" id="card-product">
        <img class="card-img-top" id="imgProduit" src="${produit.imageUrl}" alt="meuble en chêne">
    
        <section id="bloc-product">
            <h2 class="nameProduit"> ${produit.name}</h2>
            <div class="descriptionProduit"> ${produit.description}</div>
            <div class="prixProduit"><strong>${produit.price} €</strong></div>

            <label for="varnish">Choisir le vernis:</label>
            <select name="varnish" id="varnish">
            </select> <br>
            <label for="productNumber">Quantité :</label>
            <input id="productNumber" type="number" name="productNumber" value="1" min="1" max="10">

            <button id="addPanier" data-id=${produit._id}>Ajouter au panier</button> <br>

            <a href="index.html" class="retour">Retour </a>
        </section>
        </div>
        
        </div>
    `
    }

    function addColor(){

        for (let i=0; i < color.length; i++ ) {

            document.getElementById("varnish").innerHTML += `
            <option value="${color[i]}"> ${color[i]} </option>
            `
        }
    }

    function addPanier() {

        const addButton = document.getElementById("addPanier");

        const productNumber = document.getElementById("productNumber");
        const productColor = document.getElementById("varnish");

        addButton.addEventListener("click", (event) => {

            event.preventDefault();

            if (productNumber.value > 0 && productNumber.value < 11 ) {
            let votreProduit = {
                // name: produit.name.innerHTML,
                // price: produit.price.innerHTML,
                // number: produit.value, + " €"
                // color: produit.varnish.value

                name: produit.name,
                price: produit.price + " €",
                number: productNumber.value,
                color: productColor.value,
                id: id
            };

            console.log(votreProduit);

            let panier = [];

            const popupConfirmation = () => {
                if(window.confirm(`${productNumber.value} produit vernis: ${productColor.value} à éte bien ajouté dans le panier!
                 Pour continuer achats cliquer CANCEL, pour consulter votre panier OK`)){
                    window.location.href = "panier.html"
                }else {
                    window.location.href = "#"
                }
            }

            if(localStorage.getItem("productStore") !== null) {
                panier = JSON.parse(localStorage.getItem("productStore"));
            }

            panier.push(votreProduit);
            localStorage.setItem("productStore", JSON.stringify(panier));
            popupConfirmation();

            }
        });

    }
  })

}



