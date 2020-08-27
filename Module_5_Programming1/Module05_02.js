const grade = parseInt(prompt("Your score?"));


if (grade > 95) {
  console.log("Your grade: A+");
} 
else if (grade >= 91 && grade <= 95) {
  console.log("Your grade: A");
} 
else if (grade >= 89 && grade <= 90) {
  console.log("Your grade: A-");
} 
else if (grade >= 85 && grade <= 88) {
  console.log("Your grade: B+");
} 
else if (grade >= 77 && grade <= 84) {
  console.log("Your grade: C+");
} 
else if (grade >= 71 && grade <= 76) {
  console.log("Your grade: C");
}
else if (grade >= 68 && grade <= 70) {
  console.log("Your grade: D+");
}
else if (grade >= 64 && grade <= 67) {
  console.log("Your grade: D");
}
else if (grade < 63) 
  console.log("Your grade: F");


