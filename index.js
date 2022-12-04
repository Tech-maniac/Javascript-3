// let vs const vs var
//ES6 : (2015) :

//Difference 1 : 
// const favColor = "green";
// console.log(favColor);

// favColor = "yellow";
// console.log(favColor);

//2nd Difference : Scope
//Block scope : works only within curly brackets
//let & const => block scope
//var => function scope

function info()
{
    const myHobby = "Coding";
    console.log(myHobby);

    if(true)
    {
        const myHobby2 = "Dancing";
        myHobby2 = "singing";
        console.log("Inner 1st Hobby " + myHobby );
        console.log("Inner 2nd Hobby " + myHobby2);
    }
    console.log("Outer 2nd Hobby " + myHobby);
}
//  console.log("Outermost 1st Hobby " + myHobby);
//  console.log("Outermost 2nd Hobby " + myHobby2);

//info();


//Template Literals/Template strings : 

// for(let num=1; num<= 10; num++)
// {
//     let tableNum = 9;

//     //console.log(tableNum + "*" + num + "=" + tableNum * num );

//     console.log(`${tableNum} * ${num} = ${tableNum * num}`);
// }

//ES6 : Arrow function/fat arrow function 

// function sum(){

// }

const sum =()=>{
    let a=10,b=20;
    let total = a+b;
    return `Sum of 2 numbers is : ${total}`
}

//console.log(sum());

const sum1 =()=>{
    return `Sum of 2 numbers is : ${(a=10)+(b=20)}`
}

//console.log(sum1());

//Array in JS :
// helps store multiple values in a single variable.

var fruits = ["mango","cherry","apple","pineapple"];

//push : adds items at the end
//fruits.push("banana","papaya");
//console.log(fruits);

//unshift :adds items at the start
//fruits.unshift("banana","papaya");
//console.log(fruits);

//pop method : removes the last element
fruits.pop();
console.log(fruits);

// shift : removes the first element
fruits.shift()
console.log(fruits);

//console.log(fruits);

//index number : starts from 0

//Traversal in Array
// console.log(fruits);

//Length property
// console.log(fruits[fruits.length-1]);

//for..in loop : Gives index number
for(let elements in fruits)
{
    //console.log(elements);
}

//for..of loop : returns values at that index number
for(let elements of fruits)
{
    //console.log(elements);
}

//for each loop : (for..in & for..of loop's combo)
fruits.forEach(function (element, index, array){

    //console.log(element + "Index : "+index + "Array : "+array);

})
//fat arrow function :
fruits.forEach((element, index, array)=>{
    //console.log("Value : " + element + " Index : "+index );
})

const alphabets = ["apple", "cow", "ball"];
//console.log(alphabets.toString());

//console.log(alphabets.sort());

const nums = [100, 25,75,0];
//console.log(nums.sort());

//Numeric sort :
//Asc sort


// console.log(nums.sort(function(a,b){
//     return a  - b;
// }));

//Des sort


// console.log(nums.sort(function(a,b){
//     return b-a;
// }));

//String methods :

var string1 = "Hello world";

// console.log(string1.length);

//map method :

let numbers = [25,36,49,64];

let newNumbers = numbers.map((currentElements)=>{
    return Math.sqrt(currentElements);
})

console.log(newNumbers);

//Date & Time :

let currentDate = new Date();
//console.log(currentDate);

console.log(currentDate.toLocaleString());
console.log(currentDate.toString());

//seconds since jan 1st 1970
console.log(Date.now());


//month starts from 0 to 11
var d = new Date();

console.log(d.toLocaleString());

console.log(d.getFullYear());

const currentTime = new Date();
console.log(currentTime.getTime());
console.log(currentTime.getHours());


let numberXYZ = 8.1;
console.log(Math.ceil(numberXYZ));

//0 to 9
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//ES7 : 

let details = {
    myName : "rahul",
    myAge : 27,
    getData(){console.log("Im a function")},
    tOrf : true
}

console.log(details.getData());