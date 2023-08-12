// feet to inch

function feetToInch(feet){
    var result = 12 * feet;
    return result;

}

var showInFeet = feetToInch(5);
console.log("In Feet: " , showInFeet);

// centimeter to meter
function centimeterToMeter(centimeter){
    var result =  centimeter/1000;
    return result;
}
var showInMeter = centimeterToMeter(6755);
console.log("In Meter: ", showInMeter);

/**
 * count paper
 * book1==100
 * book2==200
 * book3==300
 * write a function named paperRequirements, which will take three parameter and 
 * calculate how much paper you need for each book and for all books 
 */

function paperRequirements(book1, book2, book3){
    const book1PaperNeed = 100;
    const book2PaperNeed = 200;
    const book3PaperNeed = 300;

    const book1PaperRequired = book1 * 100;
    const book2PaperRequired = book2 * 200;
    const book3PaperRequired = book3 * 300;

    var totalPaperNeed = book1PaperRequired + book2PaperRequired + book3PaperRequired;
     
    return totalPaperNeed;
}

var requiredTotalPaper = paperRequirements(2,4, 7);
console.log('Total Paper Need : ', requiredTotalPaper);

// Find the big name from array

function bestFriend(friends){
    let myBestFriend = friends[0];
    for(let i=1; i<friends.length;i++){
        if(friends[i].length > myBestFriend.length){
            myBestFriend = friends[i];
        }
    }
    return myBestFriend;
}

let myFriends =['lafsan', 'koumi', 'plabon', 'azad', 'shanto','maisha an noor'];
let show=bestFriend(myFriends);
console.log(show);