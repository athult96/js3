var readlineSync = require("readline-sync");

let num = readlineSync.question("enter number :");
if (num==1){
    console.log("monday");
}else if(num==2){
    console.log("tuesday");
}
else if(num==3){
    console.log("Wednesday");
}
else if(num==4){
    console.log("Thursday");
}
else if(num==5){
    console.log("friday");
}
else if(num==6){
    console.log("saturday");
}
else if(num==7){
    console.log("sunday");
}