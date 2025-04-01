let element= document.getElementById("para");
element.innerHTML="<p>hello i am new paragraph</p>";
element.style.color="aqua";

// let newButton=document.createElement("button");
//   newButton.innerHTML="click me";

// document.body.appendChild(newButton);

// newButton.addEventListener("click", function() {
//     alert("Button Clicked!");
// });

let newButton=document.createElement("button");
newButton.innerHTML="click me";
let div=document.getElementById("pa");
div.appendChild(newButton);
newButton.style.color="aqua";
newButton.style.backgroundColor="green";

let newPara=document.querySelector(".myClass");
newPara.setAttribute("Class","newPara")
newPara.style.backgroundColor="green";
newPara.style.color="aqua";




