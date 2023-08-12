// while loop
// var number=0;

// while(number < 10){
//     console.log(number);
//     number++;
// }

// loop break

var numbers = [34,12,45,106, 89,99,66,76,87,34];

// for(var i =0; i<numbers.length; i++){
//      var number= numbers[i];
//      if(number > 70){
//         break;
//      }
//      console.log(number);
// }

// // loop continue
// for(i =0; i<numbers.length;i++){
//     var number = numbers[i];
//     if(number >50){
//         continue;
//     }
//     console.log(number);
// }

// reverse loop
for(var i=numbers.length; i>=1; i--){
    var number = numbers[i];
    console.log(number);
}


//run loop from 30 to 86 and stop when it cross 44

for(var i=30; i<=86; i++){
    if(i > 44){
        break;
    }
    console.log(i);
}
