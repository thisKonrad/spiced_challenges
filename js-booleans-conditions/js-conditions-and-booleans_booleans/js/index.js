console.clear();

//console.log(Boolean("Try it out"));


let number = 2 == "2";
console.log("2==2: ", Boolean(number));

number = 2 === "2";
console.log("2==='2': ", Boolean(number));

number = 2 === 2;
console.log("2===2: ", Boolean(number));

let message = "hello World";
console.log("hello World: ", Boolean(message));

message = "";
console.log(" '': ", Boolean(message));

message = true;
console.log("true : ", Boolean(message));

number = 0;
console.log("0: ", Boolean(number));

number = 50;
console.log("50: ",Boolean(number));

number = -50;
console.log("-50: ",Boolean(number));

number = 5 > 1;
console.log("5 > 1: ",Boolean(number));

number = 1 > 10;
console.log("1 > 10: ",Boolean(number));

message = false;
console.log("false: ", Boolean(message));