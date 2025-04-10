// // document.getElementsById("myImage").addEventListener("click", function(){
// //     document.getElementsById("myImage").src="image.png";
// // });
// document.getElementById("myImage").addEventListener("click", function() {
//     document.getElementById("myImage").src = "image.png";
// });
document.getElementById("turnOn").addEventListener("click", function() {
    document.getElementById("lightBulb").src = "image.png"; // Change to your 'on' image
});

document.getElementById("turnOff").addEventListener("click", function() {
    document.getElementById("lightBulb").src = "image1.png"; // Change to your 'off' image
});

