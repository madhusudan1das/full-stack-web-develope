document.getElementById("demo").innerHTML="<h1>i am h1 heading";

let element=document.createElement("button");
    element.innerText="click me";
    let div=document.getElementById("create_button");
    div.prepend(element);
