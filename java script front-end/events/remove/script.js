// document.getElementById("btn1").addEventListener("click", function () {
//     document.getElementById("p1").innerHTML = "<p>This is my p1</p>";

// if(p1=="<p>This is my p1</p>"){
//     document.getElementById("btn1").removeEventListener("click",function(){
//         document.getElementById("p1").innerHTML="<p> </p>"
//     });
// }
// });

document.getElementById("btn1").addEventListener("click", function () {
    let p1 = document.getElementById("p1");

    if (p1.innerHTML.trim() === "") {
        p1.innerHTML = "<p>This is my p1</p>";
    } else {
        p1.innerHTML = "";
    }
});
