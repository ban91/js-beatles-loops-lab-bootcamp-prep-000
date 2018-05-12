const music = ["John", "Paul", "George", "Ringo"];

const instr = ["guitar", "guitar", "bass", "drums"];


function theBeatlesPlay(music, instr){
  var band = [];
  for (let i = 0; i < 4; i++){
  band.push(`${music[0]} plays ${instr[0]}`);
}
return band;
}