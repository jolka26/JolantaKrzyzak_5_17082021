const urlApi = "http://localhost:3000/api/furniture ";

main()

async function main() {
    const products = await getProducts()
    // console.log(products)
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
//   .then(function(products) {
//     //   console.log(products)
//     return products
//   })
  .catch(function(error) {
    alert ("error quelque chose ne va pas.. êtes-vous connecté à api ?")
  })
}


 // affichage de produit --> name, price
function displayProduct(){

    document.getElementById("products").innerHTML +=   `
    <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="product image">
        <div class="card-body " >
            <h5 class="product__name">${product.name}</h5>
            <p class="product__price">${product.price} €</p>
            <a href="" class="btn btn-primary">Voir produit</a>
        </div>
    </div>

  
  `

}


