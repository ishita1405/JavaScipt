//js-Dynamically typed language
//no need to declare data types
console.log("Hello");

//primitive data types
let a = 5;
console.log(a);
console.log(typeof(a));

//float
let b = 1.5;
console.log(b);
console.log(typeof(b));

//string
let c = "Hello World";
console.log(c);
console.log(typeof(c));
c= 5;
//c=null;
console.log(c);

//Boolean Logic
let d = true;
console.log(d);
console.log(typeof(d));

//Number
let e = 1;
console.log(e);
console.log(typeof(e));

//undefined 
let f;
console.log(f);
console.log(typeof(f));

//Reference Data Types
let course= {
    tittle:"JavaScript",
    description:"Project based JS",
    duration:5
};
console.log(course);
console.log(typeof(course));
console.log(course.tittle);
console.log(course.description);
console.log(course.duration);


// copied by reference
//primitive data types are copied by value
//reference data types are copied by reference
let x = "IShita";
let y=x;

x = "Nimje";

console.log(x);
console.log(y);

let p={name:"Ishita"};
let q=p;
p.name="Nimje";

console.log(p);
console.log(q);

//Array and functions are also reference data types
let colors = ["red","green","blue"];
console.log(colors);
console.log(colors.length);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[0]);
console.log(typeof(colors));
console.log(colors);


//functions

//hoisting in js
//function declaration
//function can be called before its declaration
//function greet(name){
//    console.log("Hello "+name);
//}
greet("Nimje");
console.log(x);

function greet(name){
    console.log("Hello "+name);
}
//greet("Ishita");
//greet("Nimje");

var w = 10;
console.log(w); 
greet('ishu');

//executions context
//1.Memory phase - variable environment is created
//2.Code phase - code is executed line by line

//creation phase
//1. global object (window in browser, global in node)
//2. this
//3. outer environment
//4. variable object