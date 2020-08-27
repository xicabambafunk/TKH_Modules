
var World = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh\'s cab, or Montero Jeep I can\'t call it, the beats make me falling asleep I keep falling, but never falling six feet deep I\'m out for presidents to represent me, I\'m out for presidents to represent me, I\'m out for dead presidents to represent me,"

var spWorld = World.split(" ");

for(var i=0; i<spWorld.length; i++) {
 
  var loopWorld = spWorld[i].replace(/s/gi, '$');
  var grnWorld = loopWorld.toString("");  
/*   I'm having troubles getting it join or tostring */
  console.log(grnWorld)
}
