// document.getElementById("click").addEventListener("click", function(){
// document.getElementById("para").innerHTML="hello madhusudan";

// });


document.getElementById("click").addEventListener("click", function () {
    let para = document.getElementById("para");
  
    if (para.dataset.original === undefined) {
      para.dataset.original = para.innerHTML; // Store original text
    }
  
    if (para.innerHTML === "hello madhusudan") {
      para.innerHTML = para.dataset.original; // Restore original text
    } else {
      para.innerHTML = "hello madhusudan"; // Change to new text
    }
  });
  