
const title = document.getElementById("title");
const description = document.querySelector(".description");
const button = document.getElementById("changeBtn");


title.innerText = "Welcome Nizam";
title.style.color = "blue";
title.style.fontSize = "40px";

description.innerText = "DOM means Javascript can control HTML.";
description.style.color = "green";

button.addEventListener("click", function () {
    title.innerText = "Button Clicked!";
    title.style.color = "red";


    description.innerText = "You successfully changed HTML using Javascript.";
    description.style.color = "purple";
})

console.log(button);