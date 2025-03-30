function appendElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Appended Element";
    document.getElementById("container").appendChild(newElement);
    newElement.style="cursor:pointer"

}

function prependElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Prepended Element";
    document.getElementById("container").prepend(newElement);
    newElement.style="cursor:pointer"

}

function insertBeforeElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Inserted Before";
    let referenceElement = document.getElementById("existingElement");
    referenceElement.parentNode.insertBefore(newElement, referenceElement);
    newElement.style="cursor:pointer"
}

function insertAfterElement() {
    let newElement = document.createElement("div");
    newElement.className = "new-element";
    newElement.textContent = "Inserted After";
    let referenceElement = document.getElementById("existingElement");
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
    newElement.style="cursor:pointer"

}

function insertAdjacent() {
    let referenceElement = document.getElementById("existingElement");
    referenceElement.insertAdjacentHTML("beforebegin", "<div class='new-element'>Before Begin</div>");
    referenceElement.insertAdjacentHTML("afterend", "<div class='new-element'>After End</div>");
    newElement.style="cursor:pointer"

}
