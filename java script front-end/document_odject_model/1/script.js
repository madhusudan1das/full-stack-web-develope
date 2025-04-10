// // document.getElementById("click").addEventListener("click", function() {                //select with id
// //     let title = document.getElementById("title");
// //     title.textContent = "Hello Madhusudan"; // Change text
// //     title.style.color = "blue"; // Change color
// // });

// console.dir(document.head.childNodes[1]);
// document.body.style.background = "red";
// // document.getElementById("title").innerHTML="hello"

document.getElementById("click").addEventListener("click", function () {
  //id . Toggle Text When Clicking
  let title = document.getElementById("title");
  if (title.textContent === "Hello Amintomai") {
    title.style.color="aqua";
    title.textContent = "Hello Madhusudan";
    // title.style.color = "blue";
  } else {
    title.textContent = "Hello Amintomai";
    title.style.color = "black";
  }
});

// document.getElementById("title").style.display = "block";
// // document.getElementById("title").style.display = "none";


