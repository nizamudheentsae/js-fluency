
const productForm = document.getElementById("productForm");
const nameInput = document.getElementById("nameInput");
const quantityInput = document.getElementById("quantityInput");
const priceInput = document.getElementById("priceInput");
const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");
const productList = document.getElementById("productList");
const totalOutput = document.getElementById("totalOutput");

let products = JSON.parse(localStorage.getItem("products")) || [];

productForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const quantity = Number(quantityInput.value);
    const price = Number(priceInput.value);

    if (name === "") {
        message.innerText = "Product name is required";
        message.style.color = "red";
        return;
    }

    if (quantity <= 0) {
        message.innerText = "Quantity must be greater than 0";
        message.style.color = "red";
        return;
    }

    if (price <= 0) {
        message.innerText = "Price must be greater than 0";
        message.style.color = "red";
        return;
    }

    const product = {
        name: name,
        quantity: quantity,
        price: price
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    message.innerText = "Product added successfully";
    message.style.color = "green";

    nameInput.value = "";
    quantityInput.value = "";
    priceInput.value = "";

    renderProducts();
});

clearBtn.addEventListener("click", function () {
    products = [];

    localStorage.removeItem("products");

    message.innerText = "All products cleared";
    message.style.color = "red";

    renderProducts();
});

function renderProducts() {
    productList.innerHTML = "";

    products.forEach(function (product) {
        const li = document.createElement("li");

        const stockValue = product.quantity * product.price;

        li.innerText =
            product.name +
            " | Qty: " +
            product.quantity +
            " | Price: " +
            product.price +
            " | Value: " +
            stockValue;

        productList.appendChild(li);
    });

    const totalStockValue = products.reduce(function (sum, product) {
        return sum + product.quantity * product.price;
    }, 0);

    totalOutput.innerText = "Total Stock Value: " + totalStockValue;
}

renderProducts();   
