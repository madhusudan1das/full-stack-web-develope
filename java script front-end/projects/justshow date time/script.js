// document.getElementById("date").addEventListeners("click", function(){
// document.getElementById("demo").innerHTML= new Date(); 
// });


document.querySelector("#date").addEventListener("click", function(){
    document.querySelector("#demo").innerHTML=Date();    //query selector 
});