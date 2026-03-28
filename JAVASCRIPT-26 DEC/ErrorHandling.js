//exception -> error handling mechanism
//expection -> unexpected error that occurs during the program execution of a program
//try -> code block jisme error aane ka possibility hota hai
//catch -> code block jisme expection ko handle kiya jata hai
//finally -> code block jisme jo hamesha expecte hota hai chahe exception aaye ya nahi aaye dono case me execute hota hai
//  aaye dono case me execute hota hai
//throw -> custom error throw karna ke liye use hota hai
//jb program chal raha hai unexpected erroe atta hai
//unexpected errror ata hai to program crash ho jata hai


//type of error
//syntax error -> code likhte time syntax hota hai 
//ex: 
//if(true{
// console.log("this will cause a syntax error");
//}
//detected before execution 

//reference error -> jb hum aisa variable ko access karte hai 
//jo declare nahi hua hai
// ex:
//let num2 = num3 + 5;
//detectrf during execution

//type error -> jb hum kisi value ke sath incompatible
//operation perform karte hai
//ex:
// let num1 = 10;
// num1.toUpperCase();
//detect during execution

//range error -> number ke range se bahar jana 
//eval error -> eval() function ke sath related error 
//URI error -> encodeURI() ya decodeURI() function ke sath related error


//try catch example
// try block me code likhte hain jisme exception aa sakta hai(doubtful code)
//  catch block me code likhte hain jo exception ko handle karte hain (handle code)
//finally block me cod likhte hain jo hamesha execute hota hai 
//chahe expections aaye ya nahi aaye (cleanup code)

try {
    let num2 = num3 + 5; // reference error
}catch(error){
    console.log("an error occurred : "+ error.message);
    console.log(error.name);
    // console.log(error);
}finally{
    console.log("This will always execute");  
}

//OOPs 
//Exception Handing
//array amd object
//String:
//STRing is an text
//js me string ek sequence of charachter hota hai

//string create 
//1. single quotes ya double quotes me string create kr sakte hai 
let name1 ="skillected";
let name2 = "skillected";
//template litral
let name3 =`skillected ${name1}`