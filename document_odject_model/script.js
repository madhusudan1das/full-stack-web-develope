document.getElementById("click").addEventListener("click", function() {
    let title = document.getElementById("title");
    title.textContent = "Hello Madhusudan"; // Change text
    title.style.color = "blue"; // Change color
});

console.dir(document.head.childNodes[1]);
document.body.style.background="red";
document.getElementById("title").innerHTML="hello"