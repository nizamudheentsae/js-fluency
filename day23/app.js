const productForm =
document.getElementById("productForm");

const nameInput =
document.getElementById("nameInput");

const priceInput =
document.getElementById("priceInput");

const message =
document.getElementById("message");

const productList =
document.getElementById("productList");


let products = [];




// VALIDATION FUNCTION

function createProduct(name, price){


    if(name.trim() === ""){


        throw new Error(
            "Product name is required"
        );


    }



    if(price <= 0){


        throw new Error(
            "Price must be greater than zero"
        );


    }



    return {

        name: name,
        price: price

    };


}




// FORM SUBMIT

console.log(productForm);
console.log(nameInput);
console.log(priceInput);
console.log(message);
console.log(productList);


productForm.addEventListener(
"submit",
function(event){


    event.preventDefault();



    try {


        const product =
        createProduct(

            nameInput.value,

            Number(priceInput.value)

        );



        products.push(product);



        renderProducts();



        message.innerText =
        "Product added successfully";


        message.style.color =
        "green";



        nameInput.value = "";

        priceInput.value = "";



    }


    catch(error){


        message.innerText =
        error.message;


        message.style.color =
        "red";


    }


    finally{


        console.log(
            "Validation completed"
        );


    }

console.log("Form submitted");
});





// DISPLAY FUNCTION


function renderProducts(){


    productList.innerHTML = "";



    products.forEach(
    function(product){


        const li =
        document.createElement("li");



        li.innerText =
        product.name +
        " : " +
        product.price;



        productList.appendChild(li);


    });


}