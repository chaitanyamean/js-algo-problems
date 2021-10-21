// What is a callback function in javascript
// Function are first class citizens, 
// we can take a function and pass a function in it, 
// The passing function is called Callback function

function x(){
}

x(function y(){
})

function f1(i) {
    console.log("Parameter value", i);
    let i = 10; 
}
f1(0);