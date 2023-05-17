var readlineSync = require("readline-sync");


let num = readlineSync.question("enter number :");
if(num%2==0){
    console.log("even number");
} else{
    console.log("odd number")
}
