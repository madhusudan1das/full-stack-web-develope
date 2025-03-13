let score = Number(prompt("Enter score")); // Convert input to a number
let grade;

switch (true) {
  case score >= 90:
    grade = 'A';
    break;
  case score >= 80:
    grade = 'B';
    break;
  case score >= 70:
    grade = 'C';
    break;
  case score >= 60:
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log("Your grade is:", grade); // Output the grade
