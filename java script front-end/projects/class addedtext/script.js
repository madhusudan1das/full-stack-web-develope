document.addEventListener("DOMContentLoaded", function() {
    let divs = document.querySelectorAll(".gita"); // Select all divs with class "myDiv"

    let uniqueTexts = [" - Hello Madhu!", " - Welcome to JavaScript!", " - Have a great day!"];

    divs.forEach((div, index) => {
        div.textContent += uniqueTexts[index]; // Append unique text to each div
    });
});
