// console.log(a1);

// var ,  let , const

// 2015 - ES6  ---> ecmascript

// Datatypes - primitive and refrence or non primitive

// string , number , booleans , undefined, symbol, bigint
// array , object , date , null

var a = "shubham";

var a = 20; 
// variable defined with var can be  redeclared and can be reassigned

console.log(a);

let b = "Jain";

b = 30;
// variable defined with let cannot be  redeclared but can be reassigned

const c = "Poornima";
// c = 40;
// variable defined with const cannot be  redeclared and reassigned
console.log(c);

// scopes - global scope , block  scope , functional or local scope.

// var - global scope variable but in case of function it becomes functional scope or local scope variable
// let and const - block scope variable

// var fullName = "Poornima"

// if(true){
// fullName = "shubham jain";
// console.log(fullName);
// }

// console.log(fullName);

function sum(){
    console.log("inside sum");
}

const sum1 = function (){
    console.log("Inside Sum1");
}

const sum2 = ()=>"hello from sum2";


console.log(sum2());

// for(let i = 0;i<=10;i++){
//     console.log(i);
// }

// array methods

// push pop shift unshift slice splice split map filter reduce sort



// console.log(arr);

// console.log(arr.push(1000))

// console.log(arr);

// console.log(arr.pop())

// console.log(arr);

// arr.shift();

// console.log(arr);

// arr.unshift(1000);

// console.log(arr);

// slice splice



// let slicedArr = arr.slice(2, 7); -- array and string

// console.log(slicedArr);

// splice - to add or remove elements from array
// arr.splice(2 , 0 ,"shubham", "jain"); -- array
// console.log(arr);



// map -- higher order functions

// let newArr = arr.map((item , i)=>{ // callback functions 
//     return i;
// })

// console.log(newArr);
// console.log(arr);



// let newArr = arr.filter((item)=>{
//     return item <1000;
// });

// console.log(newArr);
// console.log(arr)

// let Arrsum = arr.reduce((acc,curr)=>{
//     return acc + curr;
// },1000) 
//  acc curr
    //  1000   1 = 1
    //  1   2 = 3
    //  3   4 = 7
    //  7  32 = 39
    //  39 3  = 42
    //  42 2  = 44
    //  44    = 120

// console.log(Arrsum)


// arr.sort((a,b)=>{
//     return b-a;
// });

// console.log(arr);

// forEach , forin , forof

// let newArr = arr.forEach((item)=>{
//    console.log(item)
// })

let numbers = [1,2,3,4,32,3,2,3,30,40];


// for(let  i = 0;i<arr.length ; i++){
//     console.log(arr[i]);
// }

// forof

// for(let number of numbers ){
//     // console.log(number);
// }

// for(let index in numbers){
//     console.log(numbers[index]);
// }

// string methods

// let str = "hello/poornima/this/is/java/full/stack/internship";

// let result=  str.split("/")
// console.log(result);

// let  joinestr =  result.join("+.+");

// console.log(joinestr)

// let str = "   hello      world     ";

// let newStr =  str.trim();
// console.log(str)
// console.log(newStr)

// let str = "shubham jain";
// let newStr = str.toLowerCase();
// console.log(newStr)

// let obj = {
//     firstName : "shubham",
//     lastName : "jain"
// }



// console.log(obj.lastName);
// console.log(obj["firstName"]);

// obj.address = "Jaipur";

// let keyName = "Department"

// obj[keyName] = "FSD"

// console.log(obj);

// spread operator destructuring template literals

let num1 = 10;
let num2 =  10;

console.log(num1 == num2);

let arr1 = [1,2,3];
let arr2 = [1,2,3];

console.log(arr1)
console.log(arr2)

console.log(arr1 == arr2);

let arr3 = [...arr1, 100 , ...arr2];

console.log(arr3);

// let obj = {
//     firstName : "shubham",
//     lastName : "jain"
// }

// let obj2 = {
//     firstName : "Poornima",
//     address  : "Jaipur",
//     section : "FSD"
// }

// let obj3 = {...obj , ...obj2 , firstName : "Vinay"};
// console.log(obj3);

let obj = {
    firstName : "Poornima",
    address  : "Jaipur",
    section : "FSD"
}

// let userName = obj.firstName;
// let userAddress = obj.address;
// let userDept = obj.section;

// let { firstName , address   , section } = obj;

// console.log(firstName);

let arr = [10,20,30,40];

let [ firstNum, ...rest ] = arr;

console.log(rest);

let fullName = "Shubham jain";

let welcomeQuote = `Hello Mr. ${fullName} , Welcome to poornima`;
console.log(welcomeQuote);

let count = 20;

if(count == 20){
    console.log("the count is matched")
}else if(count == 30){
    console.log("the count is 30")
}else{
    console.log("please provide a valid count")
}

// ternary operators

count == 20 ? console.log("the count is matched") : count == 30 ? console.log("the count is 30") : console.log("please provide a valid count");

// hoisting


let a1 = 20; //TDZ --  temporal dead zone
sumNum(); 
console.log(a1);

// function sumNum (){
//     let num = 10;
// }

var sumNum = ()=>{
    console.log("inside from sumnum");
}

// Async js

