document.getElementById("div1").onclick=function(evt){
    console.log("clicked");
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX, evt.clienty);
    // console.log(evt.cancelable);
}