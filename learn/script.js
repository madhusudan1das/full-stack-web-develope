// document.getElementById("hello").addEventListener("click", function () {
//     alert("Hello JavaScript");
// });


document.getElementById("hello").addEventListener("click", function () {
    this.innerText = "Hello JavaScript"; // Change button text when clicked
});
