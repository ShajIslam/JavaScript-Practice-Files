var fruits = ['apple', 'bannana', 'orange'];

console.log(fruits.indexOf('bannana'));

// splice method add or remove elements from any position of array

fruits.splice(1,1);

 console.log(fruits);

 fruits.splice(1,0,'mango');
/**
 * parameter:
 * 1:which index your want to add/remove
 * 2: if you don't want to delet ant elements from array just keep it 0
 * 3:which element you want to add.
 */
 console.log(fruits);





