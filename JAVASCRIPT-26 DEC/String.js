//string
//Collections of characters
//Sequence of characters
//charachter -> Letter,nummber,symbol,space
//string = text data

//single quote, double quotes,backticks(template literals)me string

let str1 = 'hello world @ Skillected';

//" " or '' `` me string create kr sakte hain 
//Double quotes ans single quotes same hi hote hai

// multi line allow krna hain 

let text = `Hello 
Skillected`;

let name4  = "Skillected"
console.log(`hello ${name4}`);

// ${}
//template litrals me ${} ka use krke variable ya 
// expression ko String me embed kr sakte hain 
// string interpolations kehte hain is process hai

// String properties
//length -> String ki length batate hai
let str2 = "HEllo World";
console.log(str2.length);

//length is property of string that returns the number of 
// character in the string, including space and special character

//txt.length->error aayega kayyuki lenghth
//  ek property hai function nhi hai
//property = no brackets
//function = brackets

//accessing characters in string

let str3 = "Skillected";
console.log(str3[0]);
console.log(str3[1]);
console.log(str3[2]);
console.log(str3[str3.length - 1]);  // d

//string me characters ko index ke through access kr sakte hai n 
//string me index 0 se start hota hai
//str3[0]-> S


//sTring method 
//method ke sath judda function hota hain 
//string me method ka use karke hum string ko manupulate kr sakte hain 

//toUppercase = string ke sare character ko
//uppercase me convert krta hain 

let str4 = "hello world";
console.log(str4.toUpperCase());


// tolowercase () -> string ke sare charachter lowecase me convter hota hai 
console.log(str3.toLowerCase());

//include()-> check krta hai ki string me spaceified sunstring exist 
// krta hai ye nhi , true ya false return krta hia 
console.log(str4.includes("Worldsh"));

//Slice (start, end) -> string ke specified start 
//index se end index tak

let Str5 = " Helloworlds"
console.log(Str5.slice(0,5));

//replace (oldValue,newValue) -> String me specified oldvalue
//ko new value se replace krta hai
//sirf pehle  occurense replace hota hai

let str6="Hello world, welcome to the worlds"
console.log(str6.replace ("world","Skill"));

//trim ()-> String ke starting aur ending ke space ko remove krta hai 
let str7 = "Hello world";
console.log(str7.trim());

//split(seprator)=String ko specified separtor ke baasis pe 
//split krta hai aur ek array return krta hai
let str8 = "hello world welcome to skillected";

console.log(str8.split(" "));

//template literal
//code cleaner
//readable
//professional

let name7 = "Skillected";
let age2 = 1;
console.log(`our institute name is ${name7} and he has ${age2}`);

console.log("out instite name "+ name7 + " and he has age is" +age2);

//String immutable
//immutablr means string change nhi hota 
//String ko directly change nhi kr sakte

let text1 = "Skillected";
text1[0] = "y";
console.log(text1);

//reverse String

let name8 = "Skillected";
// 1.split -> String to convert array
// 2 revese -> Array reverse
// 3 join -> array join and made String

let reversed = name8.split("").reverse().join("");
console.log(reversed);

//palindrome string  check
//same forward or backward 

//Case Sensitive
let pal = "abba"
let l = pal.toLowerCase()
let rev = l.split("").reverse().join("");
if(l === rev){
    console.log("Palindrome ");  
}else{
    console.log("Not Palindrome");   
}

let pal1 = "abbbbbbadfba"
let rev1 = pal1.split("").reverse().join("");
if(pal1 === rev1){
    console.log("Palindrome ");  
}else{
    console.log("Not Palindrome");   
}



