let newButton = document.createElement("button");
newButton.innerText = "Click Me";
let div = document.getElementById("container"); // Fixing the ID issue
    div.append(newButton);
    //this under two only for style 
newButton.style.backgroundColor="black";
newButton.style.color="yellow";

let newHeading=document.getElementById("h1");
newHeading.innerHTML="<h1>hello i am new heading using js</h1>";
document.getElementById("body").prepend(newHeading);




function appendElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Appended Element";
    document.getElementById("container").appendChild(newElement);
}

function prependElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Prepended Element";
    document.getElementById("container").prepend(newElement);
}

function insertBeforeElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Inserted Before";
    let referenceElement = document.getElementById("existingElement");
    referenceElement.parentNode.insertBefore(newElement, referenceElement);
}

function insertAfterElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Inserted After";
    let referenceElement = document.getElementById("existingElement");
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function insertAdjacent() {
    let referenceElement = document.getElementById("existingElement");
    referenceElement.insertAdjacentHTML("beforebegin", "<div class='new-element'>Before Begin</div>");
    referenceElement.insertAdjacentHTML("afterend", "<div class='new-element'>After End</div>");
}

// Fix the last button-adding issue

