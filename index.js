
function theBeatlesPlay(music, instr){
  var band = [];
  for (let i = 0; i < 4; i++){
  band.push(`${music[i]} plays ${instr[i]}`);
}
return band;
}

function johnLennonFacts(fact){
  var result = []
  var i = 0
  while (i < fact.length){
    result.push(`${fact[i]}!!!`);
    i++;
  }
  return result
}

function iLoveTheBeatles(n){
  var array = [];
  do {
  console.log('doo-bee-doo-bee-doo')
  n++
} while (n < 15);
}