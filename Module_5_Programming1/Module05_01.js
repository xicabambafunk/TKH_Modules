const wkIncome = parseInt(prompt("weekly income:"));
const wkRent= parseInt(prompt("weekly rent (& utilities):"));
const wkFood= parseInt(prompt("weekly food costs:"));
const commute = parseInt(prompt("weekly commute costs:"));
const other = parseInt(prompt("other expenses:"));
const savingsGoal = parseInt(prompt("yearly saving goal:"));


let totalCost = (wkRent + wkFood + commute + other) * 52;
let totalEarnings = wkIncome * 52;
let savingsEarned = totalEarnings - totalCost;

if (savingsEarned < savingsGoal) {
  console.log("Savings goal is not reached. You saved: $" + savingsEarned + ". Needing to earn/save: $" + (savingsGoal - savingsEarned) + " more.");
}

if (savingsEarned > savingsGoal) {
  console.log("Savings goal and more was achieved! You saved: $" + savingsEarned);
}

if (savingsEarned == savingsGoal) {
  console.log("Savings goal is perfectly achieved! You saved: $" + savingsEarned)
}