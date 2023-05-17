var readlineSync = require("readline-sync");

let num = readlineSync.question("enter number :");

for(let i=1; i<=10; i++){
    console.log(i,"*",num,"=",i*num);
}
