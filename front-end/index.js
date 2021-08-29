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
    // return "displayProducts"

    document.getElementById("main").innerHTML +=   `
       <div class="product"> 
        

       <div class="card" style="max-width: 18rem;" >
       <img src="${product.imageUrl}" class="card-img-top" alt="product image">
       <div class="card-body">
         <h5 class="card-title">${product.name}</h5>
         <p class="card-price">${product.price} €</p>
         <a href="" class="btn btn-primary">Voir</a>
       </div>
     </div>

  
     </div>
  
  `


    // <img src="${product.imageUrl}" class="product__image" id="product__image" alt="product image" width="150" height="150">
    // // <h3 class="product__name text-center" id="product__name">${product.name}</h3>
    // // <p class="product__price text-center" id="product__price">${product.price}</p>
    // // </div> 

 //    <div class="product"> 
  //    <div class="row">
  //    <div class="col-4">
  //    <div class="card" style="width: 18rem;">
  //    <img src="${product.imageUrl}" class="card-img-top" alt="product image">
  //    <div class="card-body">
  //      <h5 class="card-title">${product.name}</h5>
  //      <p class="card-price">${product.price} €</p>
  //      <a href="" class="btn btn-primary">Voir plus</a>
  //    </div>
  //  </div>
  //  </div>
  //  </div>
  //  </div>
}


