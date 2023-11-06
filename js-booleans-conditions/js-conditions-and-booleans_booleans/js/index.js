console.clear();

console.log(Boolean("Try it out"));


let number = 2 == "2";
console.log(Boolean("2==2: ", number));

number = 2 === "2";
console.log(Boolean("2==='2': ", number));

number = 2 === 2;
console.log(Boolean("2===2: ", number));

let message = "hello World";
console.log(Boolean, message);

message = "";
console.log(Boolean," '': ", message);

message = true;
console.log(Boolean,"true : ", message);

number = 0;
console.log(Boolean,"0: ", number);

number = 50;
console.log(Boolean,"50: ", number);

number = -50;
console.log(Boolean,"-50: ", number);

number = 5 > 1;
console.log(Boolean,"5 > 1: ", number);

number = 1 > 10;
console.log(Boolean,"1 > 10: ", number);

message = false;
console.log(Boolean,"false: ", message);