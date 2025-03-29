const element = document.getElementById("myH1"); 

// Get and display the current class
let value = element.getAttribute("class"); 
document.getElementById("demo").innerText = "Current class: " + value;

// Function to change the class attribute
function changeClass() {
    element.setAttribute("class", "new-class");
    document.getElementById("demo").innerText = "Updated class: " + element.getAttribute("class");
}
