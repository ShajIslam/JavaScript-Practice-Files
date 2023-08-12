//object declaration and initialization
var car = {
    brand: 'toyota',
    color: 'black',
    wheel : 4,
    seat: 4
}
//print object properties
console.log(car);
//specific property value
console.log(car.color);

//show just keys/property not value
var properties = Object.keys(car);
console.log(properties);

//show just keys/properties value
var propertyValues = Object.values(car);
console.log(propertyValues);

//get object property value 1
var getValue = car.color;

//get object property value 2, when you know the specific property
var getValue1 = car['color'];

//get properties and values using for loop and for In loop

for (var i =0; i<properties.length; i++){
    var propertiesName = properties[i];
    var propertiesValue = propertyValues[i];
    console.log(propertiesName, propertiesValue);
}

//using for In
for (var propertiesName in car){
    console.log(propertiesName);
}



// find maximum camera of a phone

let phones =[
    {name: 'iphone', camera: 48, storage:256, color: 'golden',price:52000},
    {name: 'xaomi', camera: 56, storage:128, color: 'silver',price:23000},
    {name: 'symphony', camera: 12, storage:64, color: 'green',price:21000},
    {name: 'realme', camera: 28, storage:128, color: 'ash',price:800000},
    {name: 'samsung', camera: 120, storage:256, color: 'black',price:12000},

];


function expensivePhone(phones){
    let expensive = phones[0];
    for(let i=0; i<phones.length; i++){
        let elements = phones[i];
        if(elements.camera > expensive.camera ){
            expensive = elements;
        }
    }
    return expensive;
}

let mySelection = expensivePhone(phones);
console.log(mySelection);


// find total shopping products

let products = [
    {name: 'shirt', price: 1200, quantity: 2},
    {name: 'pant', price: 1800, quantity: 4},
    {name: 'shoes', price: 2500, quantity: 2},
    {name: 't-shirt', price: 800, quantity: 4}

];

function totalProduct(products){
    let sum =0;
    for(let i= 0; i<products.length; i++){
        let showProducts = products[i];
        let totalPrice = showProducts.quantity * showProducts.price;
        sum = sum + totalPrice;
    }
    return sum;
}

//Track object inside object

let expense =totalProduct(products);
console.log('total expense:' , expense);

let items = {
    shirt:{
        brand: 'Sailor',
        price: 1499,
        febric: 'Pure Cotton'
    },
    car: {
        name: 'Toyoyta',
        color: 'Black',
        price: '5999$',
        manufacturer:{
            ceo: 'koji sato',
            headOffice: 'Tokyo Japan'
        }
        
    }
}

let result = items.car.manufacturer;
console.log(result);

// array of object

let arrayOfProducts=[
    {item1:'phone', phoneName: 'iphone', Price: '599$'},
    {item2:'bike', bikeName: 'yamaha-R15-V3', Price: '5,999$'},
    {item3:'car', carName: 'toyoyta', Price: '59,999$'},
    {item4:'flat', flatName: 'duplex', Price: '599,999$'},
    {item5:'watch', watchName: 'rolex', Price: '7999$'}

]
// for(let product of arrayOfProducts){
//     console.log(arrayOfProducts);
// }
console.log(arrayOfProducts[4]);

