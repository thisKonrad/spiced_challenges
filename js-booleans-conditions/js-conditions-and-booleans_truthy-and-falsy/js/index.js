const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean("Helllo World!");
console.log("Helllo World!" + truthyOrFalsy);

/**
 * console.log(2 == "2")
VM136:1 true
undefined
console.log(2 === "2")
VM221:1 false
undefined
console.log("hello world")
VM291:1 hello world
undefined
console.log("")
VM341:1 
undefined
console.log(" ")
VM392:1  
undefined
console.log(true)
VM458:1 true
undefined
console.log(0)
VM504:1 0
undefined
console.log(-50)
VM557:1 -50
undefined
console.log(50)
VM608:1 50
undefined
console.log(5>1)
VM679:1 true
undefined
console.log(1>10)
VM739:1 false
undefined
console.log(false)
VM809:1 false
undefined
 */