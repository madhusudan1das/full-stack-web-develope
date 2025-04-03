function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleString(); // HH:MM:SS format
    document.getElementById("clock").innerHTML = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display immediately

// function updateDate() {
//     const now = new Date();
//     const dateString = now.toLocaleDateString(); // Correctly formats date & time
//     document.getElementById("date").innerHTML = dateString;
// }

// // Update every 100ms
// setInterval(updateDate, 100);
// updateDate(); // Initial call to display immediately
