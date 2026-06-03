



const loadBtn =document.getElementById("loadBtn");
const message = document.getElementById("message");
const userContainer = document.getElementById("userContainer");


loadBtn.addEventListener("click", loadUsers);

async function loadUsers() {
    message.innerText = "Loading users...";
    userContainer.innerHTML = ""; // Clear previous users

    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");

        const users = await response.json();

        message.innerText = "Users loaded successfully!";

        users.forEach(function(user) {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.style.margin = "10px";
            div.style.padding = "10px";

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Company: ${user.company.name}</p>
            
            `;

            userContainer.appendChild(div);


        })
    }
    catch (error) {
        message.innerText = "Failed to load users. Please try again.";

        console.log(error);
    }
}