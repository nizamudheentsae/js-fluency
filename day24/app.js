const loadBtn = document.getElementById("loadBtn");
const message = document.getElementById("message");
const productList = document.getElementById("productList");

console.log(loadBtn);
console.log(message);
console.log(productList);

function getProducts() {
  return new Promise(function (resolve, reject) {
    let sucess = true;
    setTimeout(function () {
      if (sucess) {
        resolve([
          {
            name: "Laptop",
            price: 3000,
          },
          {
            name: "Mouse",
            price: 50,
          },
        ]);
      } else {
        reject("Server Error");
      }
    }, 2000);
  });
}

loadBtn.addEventListener("click", async function () {

    message.innerText = "Loading....."

    try {
        const products = await getProducts();
        message.innerText = "Products Loaded";

        productList.innerHTML = "";

        products.forEach(function (product) {
            const li = document.createElement("li")

            li.innerText= 
            product.name + ":" + product.price

            productList.appendChild(li)

        });
    }

    catch (error) {
        message.innerText = error;
    }
})