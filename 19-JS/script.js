//type conversion or coercion

console.log("20" + 5); //205 - string concatenation
console.log("20" - 5); //15 - integer

console.log("20" * 5); //100 
console.log("20" / 5); //4

console.log(true + 1); //2
console.log(false + 1); //1

console.log(true + "Hello"); //trueHello
console.log(true - "Hello"); //NaN

console.log(Number("42")); //42
console.log(Number("Hello")); //NaN - Not a Number

console.log(typeof String(123)); //string
console.log(String(true)); //true - a string

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean("Hello")); //true
console.log(Boolean('')); //false

console.log(parseInt("15.788")); //15
console.log(parseFloat("3.14323")); //3.14323