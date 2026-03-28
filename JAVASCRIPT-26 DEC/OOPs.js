//what is oop 
//oop stand for object oriented programming 
//programming ka ek style hai jisme hum real world entities ko 
//objects ke form me represent karta hain 

//real time example of oops

//car->object
//properties -> color,model,year,brand 
//methods->start(),stop(),accelerate(),brake()

//car ka design/blueprint -> class
//car ka actual object -> object 

//class ek blueprint hota hai jisme hum properties aur method 
//define karta hai n
//object class ka actual instance hota hai jisme hum class ke 
// properties aur methods ko use karta hai n

class student {
    constructor (name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }

}
const s1 =new student ("alice",22,"Los Angles");
console.log(s1);

const s2 =new student ("Bob",20,"USA");
console.log(s2);


//class->keyword to define a class
//student-> class name 
//constuctor ->special method to initialize object properties
//this key is used to current object refer krta hai 

class Car {
    constructor (brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(this.brand + " " + this.model + "is starting....");
    }
    stop(){
        console.log(this.brand + " " + this.model + "is stoppping....");
        
    }
    accelerate(){
        console.log(this.brand + " " + this.model + "is Accelerate....");   
    }
    brake(){
        console.log(this.brand + " " + this.model + "is brake....");

    }
}

let car1=new Car("Toyata","Camry",2020);
console.log(car1);
car1.start();
car1.stop();
car1.accelerate();
car1.brake();


//wap to create a class for bank account with properties
//account number,acout holder name, bank bakance and methods deposit,
//withdraw, check balance 

class Account{
    constructor (AccountNo, AccountHolder , BankBalance){
        this.AccountNo = AccountNo;
        this.AccountHolder = AccountHolder;
        this.BankBalance = BankBalance;
    }
    deposit(){
        console.log(this.AccountNo +" " + "Amount is deposit..");   
    }
    withdraw(){
        console.log(this.AccountNo + " " + this.AccountHolder + " is withdraw..");   
    }
    checkbalance(){
        console.log(this.AccountNo + " " + this.BankBalance +  " is check bank balance ..");   
    }
}

    let bank1 = new Account("abc14","Ms.Ishita Nimje",15000);
    console.log(bank1);
    bank1.deposit();
    bank1.withdraw();
    bank1.checkbalance();

    


