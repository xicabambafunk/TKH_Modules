const mnthIncome = parseInt(prompt("monthly income:"));
const mnthRent= parseInt(prompt("monthly rent (& utilities):"));
const mnthFood= parseInt(prompt("monthly food costs:"));
const commute = parseInt(prompt("commute costs:"));
const other = parseInt(prompt("other expenses:"));
const savingsGoal = parseInt(prompt("saving goal:"));


let totalCost = (mnthRent + mnthFood + commute + other) * 12;
let totalEarnings = mnthIncome * 12;
let savingsEarned = totalEarnings - totalCost;

if (savingsEarned < savingsGoal) {
  console.log("Savings goal is not reached. You saved: $" + savingsEarned + ". Needing to save: $" + (savingsGoal - savingsEarned) + " more.");
}

if (savingsEarned > savingsGoal) {
  console.log("Savings goal achieved! You saved: $" + savingsEarned);
}
