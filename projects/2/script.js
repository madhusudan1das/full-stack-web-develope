// document.getElementById("dem").addEventListener("click", function(){
//    document.getElementById("demo").style.fontSize="100px"
// });

document.getElementById("dem").addEventListener("click", function(){
    let textElement =document.getElementById("demo");

    if(textElement.style.fontSize==="100px"){
        textElement.style.fontSize="16px";
    }
    else{
        textElement.style.fontSize="100px";
    }
});