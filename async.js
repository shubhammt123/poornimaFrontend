

// Timers

// setTimeout(()=>{
//     console.log("Hello Poornima");
// },2000);

// let interval = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("Interval cleared")
// },10000)

// console.log("First Console");

// setTimeout(()=>{    // worker thread
//     console.log("Inside Timeout");
// },0);

// console.log("Second Console");

// Promises - object ---> output / error

let promise = new Promise((resolve,reject)=>{
    let data = {fullName : "Shubham" , address : "Jaipur"}
    try {
        setTimeout(()=>{
            resolve(data);
        },2000)
    } catch (error) {
        reject(error);
    }
})


// promise
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)});

// Json - js object notation

// const fetchData = ()=>{
//     return fetch("https://fakestoreapi.com/products");
// }


// fetchData()
// .then((response)=>response.json())
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})


// Async await

// const fetchData = async ()=>{
//     try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// fetchData();

// let date = new Date();

// console.log(date.toLocaleTimeString());

// let number = Math.floor(1000 + Math.random()*9000);

// console.log(number)

// DOM - Document Object Model

let myDiv = document.getElementById("container")
console.log(myDiv);

// document.getElementById("button").onclick = function(){
//     console.log("Hello Poornima")
// }

document.getElementById("button").addEventListener("click",function(){
    document.getElementById("container").style.backgroundColor = "yellow";
});