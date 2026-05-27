

const title = document.getElementById("title");
const button = document.getElementById("clickBtn");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");
const countrySelect = document.getElementById("countrySelect");
const countryOutput = document.getElementById("countryOutput");
const loginForm = document.getElementById("loginForm");
const emeilInput = document.getElementById("emailInput");
const formOtput = document.getElementById("formOutput");




button.addEventListener("click", function () {
    title.innerText =  "Button was clicked";
    title.style.color = "red";
});

nameInput.addEventListener("input", function (event) {
    output.innerText = "Hello, " + event.target.value;
});

countrySelect.addEventListener("change", function(event) {
    countryOutput.innerText = "selected country: " + event.target.value;
});


loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (emailInput.value === "") {
        formOutput.innerText = "Please enter your email";
        formOutput.style.color = "red";
    } else {
        formOutput.innerText = "Submitted email: " + emailInput.value;
        formOutput.style.color = "green";
    }
});