let fullNames = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"]

let mergeNames = fullNames.toString(" ")
let rmCommas = mergeNames.replace(/,/gi, ' ')
var arrayIndex = rmCommas.split(" ");

let firstNames = arrayIndex;
let lastNames = arrayIndex.slice();

let arrayFirst = [1, 3, 5, 7, 9, 11, 13]
for(let i in arrayFirst) {
  if(arrayFirst.hasOwnProperty(i)) {
    firstNames.splice(arrayFirst[i]-i,1)
  }
}
console.log(firstNames)
let arraySecond = [0, 2, 4, 6, 8, 10, 12, 14]
for(let i in arraySecond) {
  if(arraySecond.hasOwnProperty(i)) {
    lastNames.splice(arraySecond[i]-i,1)
  }
}


console.log(firstNames)
console.log(lastNames)

