// const urlApi = "http://localhost:3000/api/furniture ";
// console.log("hello world");

main()

async function main() {
    const products = await getProducts()
    // console.log(products)
    for (product of products) {
        displayProduct(product)
    }
}
// recupere les produits depuis API 
function getProducts() {
 return fetch("http://localhost:3000/api/furniture")
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

function displayProduct(){
    // return "displayProducts"

const templateElement = document.getElementById("templateProduct")
const cloneElement = document.importNode(templateElement.content, true)

cloneElement.getElementById("product__image").textContent = product.imageUrl[1]
cloneElement.getElementById("product__name").textContent = product.name
cloneElement.getElementById("product__price").textContent = product.price

document.getElementById("main").appendChild(cloneElement)
}