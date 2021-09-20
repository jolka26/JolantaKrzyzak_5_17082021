let params = new URL(document.location).searchParams;
let id = params.get("id");


getProducts();

// recupere le produit depuis API  , en cas d'erreur de connection, message d'erreur, si non il affiche produit choisir 
function getProducts() {
    return fetch(`http://localhost:3000/api/furniture/${id}`)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .catch(function(error) {
            alert("error quelque chose ne va pas.. êtes-vous connecté à api ?")
        })
        .then(function(result) {
            const produit = result;
            const color = result.varnish;

            displayProduct();
            addColor();
            addPanier();

            function displayProduct() {

                document.getElementById("main").innerHTML += `
        <div class="product-container">
        <div class="card card-product" id="card-product">
        <img class="card-img-top" id="imgProduit" src="${produit.imageUrl}" alt="meuble en chêne">
      
        <section id="bloc-product">
            <h2 class="nameProduit"><strong>${produit.name}</strong> </h2>
            <div class="descriptionProduit"> ${produit.description}</div>
            <div class="prixProduit"><strong>Prix: ${produit.price} €</strong></div>

            <label for="varnish">Choisir le vernis:</label>
            <select name="varnish" id="varnish">
            </select> <br>
            <label for="productNumber">Quantité (max 10):</label>
            <input id="productNumber" type="number" name="productNumber" value="1" min="1" max="10"> <br>
            <div class="addConfirmation"><span id="addConfirmation"> </span></div>
    
            <div id="buttons">
            <button class="retour"onclick="window.location.href='index.html'">Retour à l'accueil </button>
            <button class="addPanier" data-id=${produit._id}>Ajouter au panier</button> 
            </div>
        </section>
        </div>
        
        </div>
    `
            }

            // function permetre de recuperer- choisir le color/vernis

            function addColor() {

                for (let i = 0; i < color.length; i++) {

                    document.getElementById("varnish").innerHTML += `
            <option value="${color[i]}"> ${color[i]} </option>
            `
                }
            }

            //function addPanier permetre ajouter produit choisi dans notre panier en ecoutant notre methode addEventListener(), apres on cree un cle dans le local storage

            function addPanier() {

                const addButton = document.querySelector(".addPanier");

                const productNumber = document.getElementById("productNumber");
                const productColor = document.getElementById("varnish");

                addButton.addEventListener("click", (event) => {

                    event.preventDefault();

                    if (productNumber.value > 0 && productNumber.value < 11) {
                        let votreProduit = {

                            name: produit.name,
                            price: produit.price + " €",
                            number: productNumber.value,
                            color: productColor.value,
                            id: id
                        };

                        console.log(votreProduit);

                        let panier = [];

                        if (localStorage.getItem("products") !== null) {
                            panier = JSON.parse(localStorage.getItem("products"));
                        }

                        panier.push(votreProduit);
                        localStorage.setItem("products", JSON.stringify(panier));
                        document.querySelector("#addConfirmation").textContent = ` ${productNumber.value} produit - ${produit.name}, 
                        vernis: ${productColor.value} à éte bien ajouté dans le panier!`;
                        setTimeout("location.reload(true);", 3000);
                    }
                });

            }
        })

}