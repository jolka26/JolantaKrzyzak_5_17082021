const urlApi = "http://localhost:3000/api/furniture/";
const url2 = "produit.html" + "?";


main()

async function main() {
    const products = await getProducts()
    for (product of products) {
        displayProduct(product)
    }
}
// recupere les produits depuis API  , en cas d'erreur de connection, message d'erreur
function getProducts() {
    return fetch(urlApi)
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .catch(function(error) {
            alert("error quelque chose ne va pas.. êtes-vous connecté à api ?")
        })
}


// affichage de produit --> name, price, image
function displayProduct() {

    document.getElementById("products").innerHTML += `
    <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="product image">
        <div class="card-body " >
            <h5 class="product__name"><strong>${product.name}</strong></h5>
            <p class="product__price">${product.price} €</p>
            <a href='${url2}id=${product._id}' class="btn btn-primary">Voir produit</a>
        </div>
    </div>
  `
}