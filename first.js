var firstName = 'Emamul islam';
var lastName = 'Shaj';

// numeric, float, string
let age=24.678;
var nid = 123765;
var gender = 'male';

console.log('First name: ' + firstName + '\n' + 'LastName: ' + lastName + '\n' + 'Age:' + age + '\n' + 'Nid No:' + nid + '\n' + 'Male or Female' + gender);

// Datatype conversion

var conver_age = parseInt(age);
console.log(conver_age);

// String concatination
var fullName = firstName +' '+ lastName;
console.log(fullName);

// toFixed() - returns string, and convert

var firstNum = 0.06;
var secondNum = 0.9;

var sum = firstNum + secondNum;
sum = sum.toFixed(2);
console.log(sum);
sum = parseFloat(sum);
console.log(sum);


// modulus
var numberFirst = 11;
var numberSecond = 3;

var modulus = numberFirst % numberSecond;

console.log(modulus);
