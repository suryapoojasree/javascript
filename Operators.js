//Arithmetic Operators
let x = 6;
let y = 8;
//Addition
let z = x + y;
console.log(z);
//Subtraction
let z1 = x - y;
console.log(z1);
//Multiplication
let z3 = x * y;
console.log(z3);
//Exponentiation
let z4 = x ** y;
console.log(z4);
//Divison
let z5 = x / y;
console.log(z5);
//Modulus(Remainder)
let z6 = x % y;
console.log(z6);
//Increment
x++;
let z7 = x;
console.log(z7);
//Decrement
x--;
let z8 = x;
console.log(z8);
// x**y produces the same result as Math.pow(x,y)
let z9 = Math.pow(x, y);
console.log(z9);

//Assignment Operator
// additional assignment operator
let text = "Hello";
text += "world";
console.log(text);
//subtraction assignment operator
x -= 5;
console.log(x);
//multiplicatiom assignment operator
y *= 2;
console.log(y);
//exponnentiation assignment operator
x **= 2;
console.log(x);
//division assoignment operator
y /= 2;
console.log(y);
//remainder assignment operator
y %= 4;
console.log(y);

//Shift assignment Operator
//Left shift assignment Operator
x <<= 3;
console.log(x);
//Right Shift assignment Operator
y >>= 2;
console.log(y);
//Unsigned Right shift assignment operator
let e = 38;
e >>>= 5;
console.log(e);

//Logical assignment operator
//logical AND assignment operator
x &&= 7;
console.log(x);
//logical OR assignment operator
let a = 10;
a ||= 4;
console.log(a);
//nullish coalescing assignment operator
// a ?= 8;
// console.log(a);

//Bitwose AND assignment operator
let b = 10;
b &= 15;
console.log(b);
//Bitwise OR assignment operator
b |= 12;
console.log(b);
//Bitwise XOR assignment operator
b ^= 26;
console.log(b);
