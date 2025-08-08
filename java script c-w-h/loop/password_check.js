let correctPIN = "1234"; // Set your correct 4-digit PIN
let attempts = 0;
let maxAttempts = 4;
let userPIN;

do {
    userPIN = prompt("Enter your 4-digit PIN:");
    attempts++;

    if (userPIN === correctPIN) {
        alert("✅ Access granted! Welcome.");
        break;
    } else {
        alert("❌ Incorrect PIN. Attempt " + attempts + " of " + maxAttempts);
    }

    if (attempts === maxAttempts) {
        alert("🔒 Account locked due to too many incorrect attempts.");
        break;
    }

} while (attempts < maxAttempts);
