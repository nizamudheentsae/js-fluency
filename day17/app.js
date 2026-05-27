const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "") {
        message.innerText = "Email is required";
        message.style.color = "red";
    } else if (!email.includes("@")) {
        message.innerText = "Please enter a valid email";
        message.style.color = "red";
    } else if (password === "") {
        message.innerText = "Password is required";
        message.style.color = "red";
    } else if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        message.style.color = "red";
    } else {
        message.innerText = "Login successful for " + email;
        message.style.color = "green";

        emailInput.value = "";
        passwordInput.value = "";
    }
});