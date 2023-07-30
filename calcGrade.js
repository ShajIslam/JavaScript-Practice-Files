var alia, julia, malia, kalia, dalia;

var scores =[97,76,54,63,47];

// set array values 
alia = scores[0];
julia = scores[1];
malia = scores[2];
kalia = scores[3];
dalia = scores[4];

if(80 <= scores[0] <=99){
    console.log('Alia got :' +alia +'Grade -' + 'A+');
}else if(70 <= scores[1] <=79){
    console.log('julia got :' + 'A-');
}
// add elemet at the first position an array

scores.unshift(4,0);
console.log(scores);

// remove an element from first position of an array

scores.shift();
console.log(scores);



