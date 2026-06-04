const productForm = document.getElementById("productForm");
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const categoryInput = document.getElementById("categoryInput");
const searchInput = document.getElementById("searchInput");
const message = document.getElementById("message");
const productCount = document.getElementById("productCount");
const productList = document.getElementById("productList");
const clearBtn = document.getElementById("clearBtn");

let products = JSON.parse(localStorage.getItem("products")) || [];

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const category = categoryInput.value.trim();

  if (name === "") {
    message.innerText = "Product name cannot be blank.";
    message.style.color = "red";
    return;
  }
  if (isNaN(price) || price <= 0) {
    message.innerText = "Please enter a valid price.";
    message.style.color = "red";
    return;
  }
  if (category === "") {
    message.innerText = "Please select a category.";
    message.style.color = "red";
    return;
  }

  const product = {
    name: name,
    price: price,
    category: category,
  };
  products.push(product);

  localStorage.setItem("products", JSON.stringify(products));

  message.innerText = "Product added successfully";
  message.style.color = "green";

  nameInput.value = "";
  priceInput.value = "";
  categoryInput.value = "";
  renderProducts(products);
});

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchText);
  });
  renderProducts(filteredProducts);
});

function renderProducts(productArray) {
  productList.innerHTML = "";

  productCount.innerText = "Total Products: " + products.length;

  productArray.forEach(function (product, index) {
    const li = document.createElement("li");
    li.innerText = `${product.name} | ${product.price.toFixed(2)} | ${product.category}`;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", function () {
      const updatedName = prompt("Edit Product Name", product.name);
      const updatedPrice = prompt("Edit Product Price", product.price);
      const updatedCategory = prompt("Edit Product Category", product.category);

      if (
        updatedName === null ||
        updatedPrice === null ||
        updatedCategory === null
      ) {
        return;
      }

      if (
        updatedName.trim() === "" ||
        isNaN(Number(updatedPrice)) ||
        Number(updatedPrice) <= 0 ||
        updatedCategory.trim() === ""
      ) {
        return;
      }

      const realIndex = products.indexOf(product);

      products[realIndex].name = updatedName.trim();
      products[realIndex].price = Number(updatedPrice);
      products[realIndex].category = updatedCategory.trim();

      message.innerText = "Product updated successfully";
      message.style.color = "green";

      localStorage.setItem("products", JSON.stringify(products));

      renderProducts(products);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
      const confirmed = confirm(
        "Are you sure you want to delete this product?",
      );

      if (!confirmed) {
        return;
      }

      const realIndex = products.indexOf(product);

      products.splice(realIndex, 1);

      localStorage.setItem("products", JSON.stringify(products));

      message.innerText = "Product deleted successfully";
      message.style.color = "green";

      renderProducts(products);
    });
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    productList.appendChild(li);
  });
}

renderProducts(products);

clearBtn.addEventListener("click", function () {
  const confirmed = confirm("Are you sure you want to clear all products?");

  if (!confirmed) {
    return;
  }

  products = [];
  localStorage.removeItem("products");

  message.innerText = "All products cleared";
  message.style.color = "green";

  searchInput.value = "";

  renderProducts(products);
});
