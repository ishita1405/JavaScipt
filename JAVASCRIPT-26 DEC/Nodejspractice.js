function greet(name, callback){
  console.log("Hello " + name);
  callback();
}

greet("Ishita", function(){
  console.log("Welcome!");
});