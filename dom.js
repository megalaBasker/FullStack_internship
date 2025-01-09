//getElementByid
//getElementsbyCallName
//getElementByTagName
//querySelector
//querySelectorAll

// let h1=document.getElementById("tag1")
// console.log(h1);

// //text manipulation

// //  h1.innerHTML="hello there"
// h1.innerText="hello"

// location.assign("google.com")
// Create a new div element
// let div = document.createElement("div");

// // Create a text node and append it to the div
// let textnode = document.createTextNode("created using js");
// div.append(textnode);

// // Assign multiple classes to the div
// div.classList.add("divClass", "class2", "class3");

// // Get the element with id "data" (make sure this element exists in the HTML)
// let body = document.getElementById("data");

// // Append the created div to the "data" element
// body.append(div);
// let list = document.getElementsByClassName("one")[4]
// console.log(list)
// let list = document.querySelector("ul li")
// console.log(list)
// let list = document.querySelectorAll("ul li")
// console.log(list)
// let body = document.getElementById("data")
// let ul = document.createElement("ul")
// let li1 = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")
// let li4 = document.createElement("li")
// let li5 = document.createElement("li")
// ul.append(li1,li2,li3,li4,li5)
// console.log(ul)
// let text = document.createTextNode("onion")
// let text1 = document.createTextNode("orange")
// let text2 = document.createTextNode("apple")
// let text3 = document.createTextNode("mango")
// let text4 = document.createTextNode("banana")

// li1.append(text)
// li2.append(text1)
// li3.append(text2)
// li4.append(text3)
// li5.append(text4)
// body.append(ul)
// // ul.style.color="red"  
// // ul.style.backgroundColor="yellow"
// ul.style.cssText="color:teal"

// let li6 = document.createElement("li")
// let text5 = document.createTextNode("teddy")
// ul.append(li6)
// li6.append(text5)
let body = document.getElementById("data")
// let fruits = ["apple","banana","mango","orange","sapota"]
//  let ul = document.createElement("ul")
// fruits.map(i=>{
//     let li = document.createElement("li")
//     let tn = document.createTextNode(i)
//     li.append(tn)
//     ul.append(li)
// })
// // console.log(ul);
// body.append(ul)
// body.children[0].remove()
// let li = document.getElementById("one")
// li.remove()
// let date=new Date()
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// var parent = document.getElementsByClassName("div1")[0];
// parent.addEventListener("click", () => {
//    alert("You clicked the parent");

// });
// let child1 = document.getElementsByClassName("div2")[0];
let child2 = document.getElementsByClassName("div3")[0];
// child1.addEventListener("click", () => {
//   alert("You clicked on child1");

// });
// const event1 = (e)=>{
//     alert("you clicked the child2")
//     remove()
// }

// child2.addEventListener("click", event1) 
// const remove=() => {
//     child2.removeEventListener("click",event1)
// }
// Add mouseup event listener
child2.addEventListener("mouseup", (e) => {
    console.log("Mouse up event triggered on:", e.target.tagName);
});

// Add mouseleave event listener
child2.addEventListener("mouseleave", (e) => {
    console.log("Mouse leave event triggered on:", e.target.tagName);
});

// Add mousedown event listener
child2.addEventListener("mousedown", (e) => {
    console.log("Mouse down event triggered on:", e.target.tagName);
});