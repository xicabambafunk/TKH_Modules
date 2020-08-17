

// CODE PEN LINK: 
// https://codepen.io/xicabmbafnk/pen/BaKzyzy




CHALLENGE 01




  
let fullNames = ["Westly", "Snipes", "Nicholas", "Cage", "Nasir", "Jones", "Sean", "Carter", "Sean", "Combs", "Michael", "Jordan", "Patrick", "Ewing"]

let firstNames = [fullNames[0], fullNames[2], fullNames[4], fullNames[6], fullNames[8], fullNames[10], fullNames[12]]

let lastNames = [fullNames[1], fullNames[3], fullNames[5], fullNames[7], fullNames[9], fullNames[11], fullNames[13]]


console.log(firstNames)
console.log(lastNames)




-----


CHALLENGE 02




for (var i = 4; i <= 156; i+=4)
  console.log(i)




-----



CHALLENGE 03

var World01 = ["Wipe", "the", "sweat", "off", "my", "dome", "spit", "the", "phlegm", "on", "the", "streets", "Suede",
"Timbs", "on", "my", "feets", "makes", "my", "cipher", "complete", "Whether", "cruising", "in", "a", "Sikh's", "cab", "or", "Montero", "Jeep", "I", "can't", "call", "it", "the", "beats", "make", "me", "falling", "asleep", "I", "keep" "falling", "but", "never", "falling", "six", "feet", "deep", "I'm", "out", "for", "presidents", "to", "represent", "me", "I'm", "out", "for", "presidents", "to", "represent", "me", "I'm", "out", "for", "dead", "presidents", "to", "represent", "me"]

/* ^^^^^I was looking at ways to go through all that...... but I found a simpler way online with a g search & letter replacement */




var World = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh\'s cab, or Montero Jeep I can\'t call it, the beats make me falling asleep I keep falling, but never falling six feet deep I\'m out for presidents to represent me, I\'m out for presidents to represent me, I\'m out for dead presidents to represent me,"

var newWorld = World.replace(/s/g, '$');

console.log(newWorld)



