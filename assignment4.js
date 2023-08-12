// problem-1;

function cubeNumber(number){
    if(typeof number !== 'number'){
        console.log("Enter a valid number");
    }
    else if(number < 0){
        console.log("Enter a posivite number");
    }else{
        return number*number*number;
    }
}
// let result =cubeNumber(4);
// console.log(result);

// problem-2;

function matchFinder(string1, string2){
    if(typeof string1 !== 'string' || typeof string2 !=='string'){
        console.log('Enter a valid String ');
    }else{
        let findSubString = string1.toLocaleLowerCase().includes(string2.toLocaleLowerCase());
        return findSubString;
    }
}

let result = matchFinder('John Mendis', 'ohn');
console.log(result);



// problem-4

function findAddress(obj){
    if(typeof obj !== 'object'){
        console.log('Enter the valid object');
    }else{
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        return street+','+house+','+society;
        
    }
}


let obj = 
{
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
let print = findAddress(obj);
console.log(print);


// problem-5

function canPay(changeArray, totalDue){ 
    if(changeArray.length === 0){
        console.log('You have given an empty array!');
    }
    else{ 
        let sum =0; 
        for(let i =0; i<changeArray.length; i++){
            sum = sum + changeArray[i];
        }
        if(sum >= totalDue){
            return true;
        }else{
            return false;
        }
    }
}

//calculate: 1+1+1+1+(n+1)+n +1+1 = n + (n+1) + 6; ==> n2+2n+6 =>2n+n+7
// cg(x) + n = 2*O(n) + 7

let arrayOfTaka=[1,5,5];//1
let potatoPacketPrice = 10;//1

let showMe= canPay(arrayOfTaka, potatoPacketPrice);//1
console.log(showMe);//1