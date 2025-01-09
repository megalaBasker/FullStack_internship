// /* -- BASIC DECLARATION -- */
// /*
// var data = "value";
// data = 1
// data = true
// data = [1,2,3,4]
// data={key:1}
// console.log(data); // here the last declared data value will be displayed
// var itsstring="hello there"
// console.log(itsstring.length);
// console.log(itsstring.split(""));
// console.log(itsstring.trim());
// console.log(itsstring.lastIndexOf)
// console.log("str"+"1");
// var newvar = 123
// console.log(typeof newvar)
// var newvar1 = "uhfuiwhjiwhfuiwuh"
// */
// // numbers
// var num = 123.45
// console.log(Number.parseInt(num))
// var str = "123"
// console.log(typeof Number(str))
// console.log(typeof + str)


// //math
// var intval = 123.4
// var intval2 = 123.7
// console.log(Math.round(intval))   //123
// console.log(Math.round(intval2))  //124
 
// console.log(Math.ceil(intval))    //124
// console.log(Math.ceil(intval2))   //124

// console.log(Math.floor(intval))   //123
// console.log(Math.floor(intval2))  //123

// console.log(Math.min(1,2,5,6,3))  //1
// console.log(Math.max(1,2,5,6,3))  //6

// console.log(Math.random()*100)   // 9.703680058038898
//array
// var arrayV = [1,"hi",{onj:1}];
// console.log(
// arrayV[0])

// console.log(arrayV);

// arrayV.unshift(20);
// arrayV.shift();
// console.log(arrayV);

// var datavar = "hello";
// //olleh
// datavar=datavar.split("");
// datavar=datavar.reverse();
// datavar=datavar.join("");
// console.log(datavar);
// for(var i=0;i<5;i++){
//     console.log(i);
// }
// for(var j=5;j>0;j--){
//     console.log(j);
// }
// var i=5;
// while(i>=0){
//     console.log(i);
//     i--;
// }
// do{
//     console.log("hello");
// }while(false)
// ["apple","orange","pineapple","mango"].forEach((i,k)=>{
//         console.log(k,i);
//     })
// if(true){
//     console.log("true statement");
// }else{
//     console.log("false block");
// }
// if(0){
//     console.log("true statement");
// }else if(2){
//     console.log("block 2 passed");
// }else{
//     console.log("false block");
// }
// var character='a';
// if(character=='a'){
//     console.log("yes");
// }else{
//     console.log("no");
// }
// var character='b';
// if(character=='a'){
//     console.log("yes");
// }
// else if(character=='b'){
//     console.log("b is there");
// }else{
//     console.log("no");
// }
// ASSESSMENT - 2   - check character is vowel or consonant
// var c = 'o';
// if(c== 'a' || c=='e' || c=='i' ||c=='o' || c=='u'){
//     console.log("vowel")
// }
// else{
//     console.log("consonent")
// }                                     //vowel



// // switch 
// var h='f'
// switch(true){
//     case h=='a':
//     console.log("vowel");
//     break;

//     case h=='e':
//     console.log("vowel");
//     break;

//     case h=='i':
//     console.log("vowel");
//     break;

//     case h=='o':
//     console.log("vowel");
//     break;

//     case h=='u':
//     console.log("vowel");
//     break;

//     default:
//         console.log("consonant")
// }                               
// var character = prompt("enter the value");
// switch(true){
//     case character=='a':
//         case character=='b':
//             case character=='c':
//                 console.log("yes")
//                 break
//                 default:
//                     console.log("no")
        
// }
// var character = prompt("enter the value");
// character=character??'b'
// switch(character){
//     case character=='a':
//         case character=='b':
//             case character=='c':
//                 console.log("yes")
//                 break
//                 default:
//                     console.log("no")
        
// }
// var samplevar='a';
// samplevar=samplevar=='a'?true:samplevar=='b'?true:false;
// console.log(samplevar);
//  var val = 10
//  function hello(){
//     console.log(val);
// }
// hello()
// console.log(eval(1+4-3+8));
// function sayHello(){
//     console.log("Hello world");
// }
// sayHello()
// function multiple(x,y){
//     console.log(x*y);
    
// }
// multiple(5,6);

//method overloading
// function multiply(x,y,z){
//     return x * y * z;
// }
// var answer = multiply(5,4,6);
// console.log(answer);
// var check = 10;
// var check = "string";
// console.log(check);
// var check1 = 10;
// var check1 = 20;
// console.log(check1);
//let /const varName=(par)=>{return}

// const addValue=(v1,v2) =>{
//     console.log(v1+v2);
// }
// addValue(1,2)
// const addValue=(v1,v2) =>v1+v2;
// console.log(addValue(1,7));

// const addelement = (arr) =>{
//     let sum = 0
//     arr.forEach(i => {
//           sum+=i
//     })
//     return sum
// }

// console.log(addelement([1,2,3,5,6]));
// let arr=[9,8,3,2,9,8]
// let compute=arr.filter(i=>i%2 != 0)
// console.log("odd number",compute)

// let compute1 = arr.filter(i=> i%2 == 0)
// console.log("even  numbers",compute1)

// let array=[7,3,6,3];
// let compute3 =array.every(i=>i<5);
// console.log(compute3);
// let testobj = {name:"john",age:23};
// console.log(testobj)
// console.log(testobj.name)

// let {name:mo,age} = testobj
// console.log(mo,age)
// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1,6,7]
// console.log(arr2);

// function rest(...value){
      
// }
// function playGame(userChoice) {
//     const choices = ["Rock", "Paper", "Scissors"];

//     if (userChoice < 0 || userChoice >= choices.length || isNaN(userChoice)) {
//         console.log("Invalid choice! Please choose 0 for Rock, 1 for Paper, or 2 for Scissors.");
//         return;
//     }

//     const computerChoice = Math.floor(Math.random() * 3); 
//     console.log(`You chose: ${choices[userChoice]}`);
//     console.log(`Computer chose: ${choices[computerChoice]}`);

//     const result = 
//         userChoice === computerChoice
//             ? "It's a tie!"
//             : (userChoice === 0 && computerChoice === 2) || 
//               (userChoice === 1 && computerChoice === 0) || 
//               (userChoice === 2 && computerChoice === 1)   
//             ? "You win!"
//             : "You lose!";

//     console.log(result);
// }
// playGame(0);
// Array of strings
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// console.log("Original array:", fruits);

// fruits.push("fig");
// console.log("After push:", fruits);

// const removedFruit = fruits.shift();
// console.log("After shift:", fruits);
// console.log("Removed fruit:", removedFruit);

// const index = fruits.indexOf("cherry");
// console.log("Index of 'cherry':", index);

// fruits.sort();
// console.log("Sorted array:", fruits);


// fruits.reverse();
// console.log("Reversed array:", fruits);

// const longFruits = fruits.filter(fruit => fruit.length > 5);
// console.log("Fruits with more than 5 characters:", longFruits);

// const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log("Uppercase fruits:", upperCaseFruits);

// const sentence = "  JavaScript is a versatile programming language.  ";
// console.log("\nOriginal sentence:", sentence);

// const trimmedSentence = sentence.trim();
// console.log("Trimmed sentence:", "${trimmedSentence}");

// const upperCaseSentence = trimmedSentence.toUpperCase();
// console.log("Uppercase sentence:", upperCaseSentence);


// const replacedSentence = trimmedSentence.replace("versatile", "powerful");
// console.log("Replaced sentence:", replacedSentence);

// const words = trimmedSentence.split(" ");
// console.log("Words in the sentence:", words);

// const includesWord = trimmedSentence.includes("JavaScript");
// console.log("Does the sentence include 'JavaScript'?", includesWord);

// const substring = trimmedSentence.substring(0, 10);
// console.log("Substring (first 10 characters):", substring);

// const fruitsString = fruits.join(", ");
// console.log("\nFruits as a string:", fruitsString);

// const splitFruits = fruitsString.split(", ");
// console.log("Split back into an array:", splitFruits);

// const sayHello=()=>{
//     setTimeout(()=>{
//           console.log("hello");
//     },5000);

// }
// const sayBye=()=>{
//     console.log("Bye");
// }
// sayHello();
// sayBye();
// let i=0;
// const interval = setInterval(()=>{
//     console.log("hello world");
//     i++
// },3000)
// if(i==3)
//    clearInterval(interval)
// let takeTicket = new Promise((resolve, reject) => {
// if (true) {
//    resolve("yes booked");
// } else {
//    reject("not yet");
// }

// });
// takeTicket
//   .then((e) => {
//      console.log(e);

//     })
//   .catch((err) => {
//      console.log(err);

// });
// const data = () => {  
//     const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return response;    
// };
// data()
//     .then((e) => {
//           console.log("Response:", e);
//           return e.json(); 
//     })
//     .then((json) => {
//           console.log("Parsed JSON:", json); 
//     })
//     .catch((e) => console.log("Error:", e));
const data = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response;
};

data()
    .then((e) => {
        console.log(e);
        return e.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((e) => {
        console.log(e);
    });