let btn=document.getElementById("btn1");
btn.onclick=()=>{
    console.log("button clicked");
    let a=12;
    ++a;
    console.log(a);
    alert("clicked");
}

// let div=document.getElementById("div1");
// div.onmouseover=()=>{
//     console.log("you are inside div");
    
// }
document.getElementById("div1").onmouseover=function(evt){
    console.log("clicked");
    console.log(evt.type);
    console.log(evt.target)
    console.log(evt.timeStamp)
    alert("helloo")
}
