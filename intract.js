/*function showmymessage(){
    var a=10;
    var b=20;
    console.log(a+b);
    console.log(typeof(b));
}*/
/*
primitive Data Types:
    store single vlaues(Number, String, Boolean, undefined, null, Symbol,Null,bigInt)
non primitive data types:
    store multiple vlaues(object, Array, Function)
*/
let str = 'hello world';
let str1 = "hello ";
let str2 = `world`;
console.log(str);
console.log(str1);
console.log(str2);

//boolean
let bool1=true;
let bool2=false;
console.log(bool1);
console.log(bool2);
console.log(typeof bool1);

//null
let n=null;
console.log(n);
console.log(typeof n);

//undefined
let u;
console.log(u);
console.log(typeof u);

//symbol
let sym=Symbol('sym');
console.log(sym);
console.log(typeof sym);
//symbols are unique and immutable data types that can be used as keys for object properties

//bigint
let bigInt=9007199254740991n;
console.log(bigInt);
console.log(typeof bigInt);

//object
let obj={
    name:"John",
    age:30
};
console.log(obj);
console.log(typeof obj);

//non-primitive data types: array
//1.push() - adds an element to the end of the array
let arr=[1,2,3];
arr.push(4);
console.log(arr);

//2.pop() - removes the last element from the array
arr.pop();
console.log(arr);

//3.shift() - removes the first element from the array
arr.shift();
console.log(arr);

//4.unshift() - adds an element to the beginning of the array
arr.unshift(0);
console.log(arr);


for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}
console.log(numbers.indexOf(3));
function add(a,b){
    console.log(a+b);
    return a+b;
}
add(5,10);
add(2,3);
add(1,4);

function friendName(name) {
    console.log("My friend's name is " + name);
}


friendName("Arun");
friendName("Priya");
friendName("Kavin");

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10));