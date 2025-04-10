let black=false;
document.getElementById("btn1").addEventListener("click",function(){
    if(black){
        document.body.style.backgroundColor="white";
    }else{
        document.body.style.backgroundColor="black"
    }
    black=!black;//for toggle button
});