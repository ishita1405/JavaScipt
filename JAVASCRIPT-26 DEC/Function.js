//functions is a reusable block of code hota hai jise hum ek
//specific task ko perform karne ke liye define karta hai n
//functions are independent block of code 
//that can be called and executed whenever needed

console.log("Function in js");

//function declarations
//1. normal functions
function add(a,b){
    return a+b;
}
console.log(add(5,6));

//function name -> add
//Parameters -> a,b
//function body -> return a+b;
//function call let sum=add(5,6)
//console.log(sum)

function greet(){
    console.log("Hello World");
    let a = 10;
    let b=20;
    console.log("sum of a and b is "+(a+b));
   
}
greet();


//2. Expresion Functions 
//ek variable me functions ko assign krna
const substract = function(a,b){
    return a -b;
}
console.log(substract(12,10));

//3 Arrow functions 
//ek concise syntax to define function
//arrow function me function keyword nahi hota hai 
//arrow function me this keyword ka behaviour diffrent hota hai 

const multiply = (a,b)=>{
    return ( a*b);
}
console.log(multiply(5,10));

//function and method 
//function ek independent  block of code hota hai 
//method ek functions hota hai jo kisi object ke ander define hota hai 
//method ko object ke through ccall kiya jata hai 

let person2 = {
    name: "Alice",
    age:20,
    greet: function(){
        console.log(" Hello my name is "+ this.name +" My age is " + this.age);
    }
}
person2.greet();
// greet(); not work directly 


class Reactangle {
    constructor(width,height){
        this.width = width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
    perimeter(){
        return (this.width+this.height);
    }
}


const react1 = new Reactangle (12,15);

console.log("Width: ", react1.width);
console.log("Height: ", react1.height);
console.log("Area: ", react1.area());
console.log("Perimeter: ", react1.perimeter());

