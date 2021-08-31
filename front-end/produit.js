let params = new URL(document.location).searchParams;
let id = params.get("id");
// console.log(id);


getProducts()

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

      function displayProduct(){
  
        document.getElementById("main").innerHTML +=   `
        <div class="product-container">
        <div class="card" id="card-product">
        <img class="card-img-top" id="imgProduit" src="${produit.imageUrl}" alt="meuble en chêne">
    
        <section id="bloc-product">
            <h2 class="nameProduit"> ${produit.name}</h2>
            <div class="descriptionProduit"> ${produit.description}</div>
            <div class="prixProduit"><strong>${produit.price} €</strong></div>

            <label for="varnish">Choisir la varnish:</label>

            <select name="varnish" id="varnish">
            </select> <br>
            <button>Ajouter au panier</button> <br>

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

  })

}



