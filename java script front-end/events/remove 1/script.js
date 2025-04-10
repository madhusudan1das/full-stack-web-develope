let btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(){
    console.log("clicked");
});
let tf=function(){
    console.log("clicked 1");
};
btn1.addEventListener("click",tf);

btn1.removeEventListener("click",tf);