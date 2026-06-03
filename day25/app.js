const loadBtn = document.getElementById("loadBtn");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

loadBtn.addEventListener("click", loadUsers);

async function loadUsers() {

    message.innerText = "Loading users...";

    userList.innerHTML = "";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        message.innerText =
        "Users loaded successfully";

        users.forEach(function(user){

            const li =
            document.createElement("li");

            li.innerText =
            user.name;

            userList.appendChild(li);

        });

    }

    catch(error){

        message.innerText =
        "Failed to load users";

        console.log(error);

    }

}