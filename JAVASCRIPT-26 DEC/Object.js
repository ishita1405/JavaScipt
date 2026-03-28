     // object
        // object ek container hota hai 
        // jisme hum key value pair store kr sakte hai n 
        // object me data ko key ke through access karte hain 
        // object me key strinf ya symbol hota hai 
        // object me value kisi type ki ho sakti hai
        //array                     object
        //index based               key value pair
        //access by index           access by keu
        // MUTABLE                  mutable
        // Same type or diff type      key can string or symbol

        let arr=[1,2,3,4,5];

        let student={
            name:"John",
            age: 30,
            city:"New York"
        }
        // student -> Object ka name 
        // { } -> object literal sytax
        // key value pair -> name : John age: 30 

        // student - > object 
        //name,age,city->property
        //value ->alice,30
        //acccess object properties (dot notations)
        console.log(student.name)
        console.log(student.age)
        console.log(student.city)
        
        //bracket notation -> Jab ley dynamic ho 
        console.log(student["name"]);
        console.log(student["age"]);
        console.log(student["city"]);
        

        // add new property to object 
        student.email = "nimjeishita@gmail.com"
        console.log(student)

        //delete property from object 
        delete student.age;
        console.log(student)

        //upadates 
        student.name ="Bob";
        console.log(student)

//wap to print all property of object using for in loop

    let classStudent={
        name:"alex",
        age:40,
        email:"nimjeishita@gmail.com"
    }
    for(let i in classStudent){
        console.log(i+":" + classStudent[i]);
    }

    //Key->name , email property name 
    // student[key] -> Student["name"]->"alex" value 
    //dot notation kam hai karta hai dynamic key ke case me 

let person = {
    name:"Maxwell",
    age:45,
    skill:["js","python"],
    adress:{
        street:"123,main st",
        city: "NEw york"
    }
}
