// OOPs Pillars in JavaScript

//1. Inheritance
//2. Polymorphism
//3. Encapsulation
//4. Abstraction

//encapsulation
//data(properties) and methods (functions) ko ek single unit (class)
// me bundle krna
//data hidding -> private properties and methods
//aur ise bahar se direct access nahi kr sakte hain
//emcapsulation se data security badhati hai 
// au code modular aur maintainable banta hai
//capsulation example in js
// capsule ->data +method
//wrap ->bundle krna ->class me data aur method ko wrap krna

//abstraction 
//user ko sirf essential information provide 
// karna aur unnecessary details hide karna abstraction kehlata hai
//complexity ko reduce karta hai aur code ko maintainable banata hai
//abstraction se code samjhna aur use krna easy hota hai
//example of abstraction    
//atm machine   ->user ko sirf withdraw,deposit,check balance ka option dikhata hai
//atm machine ke andar complex logic hota hai jo user se hide hota hai


//encapsulation and abstraction me difference
//encapsulation -> data aur method ko ek unit me bundle krna
//abstraction -> user ko essential information provide krna aur 
// unnecessary details hide krna

//inheritance
//ek class ke properties aur methods ko dusre class me reuse karna inheritance
//  kehlata hai
//code reusability badhati hai
//extends keyword se inhertance hota hai 
//supers() -> parent class ke constructor ko call karta hai child class ke constructor me

//javascript me inheritance prototype inheritance ke through hota hai
//parent -> base class,super class
//child -> derived class,sub class
//prototype chain ke through inheritance hota hai
//ke prototype se properties aur methods inherit karta hai child class
 
class admin {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("Hello my name is "+ this.name +" My age is " + this.age);
    }
}
    class superAdmin extends admin {
    constructor(name,age,role){
        super(name,age);
        this.role=role;
    }
    displayRole(){
        console.log("My role is "+ this.role);
    }

}
let admin1 = new admin("Alice",30);
admin1.greet();

//polymorphism ->Many forms
//same method has different implementation in different classes
//method overloading -> same method name different parameters ke sath define karna
//METHOD Overriding -> Child classs me parent class ke method ko redefine karna
//javascript me method overloading nahi hota hai lekin method overriding hota hai

class animal {
    speak(){
        // this.speak() function call itself thats is called recursion
        console.log("Animal is speaking...");
    }
}
class cat extends animal {
    speak(){
        console.log("Cat is meowing...");
    }
}
class dog extends animal {
    speak(){
        console.log("Dog is barking...");
    }
}
let dog1 = new dog();
dog1.speak();

let cat1= new cat();
cat1.speak();
