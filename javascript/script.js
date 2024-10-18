console.dir(document);
console.log(document, "normal log");

let myBody = document.all;
console.log(myBody[5])


// selectors

let selectedEle = document.getElementById("head1")
selectedEle.style.color = "red"
selectedEle.innerText = "<h6>Hello</h6>"
selectedEle.innerHTML = "<h6>Hello</h6>"


console.log(selectedEle.innerHTML, "innerText")

let querySelectEle = document.querySelectorAll("p")

console.log(querySelectEle, "inner text of the first p tag")

// create the elements and display in to the browser

const parent = document.getElementsByClassName("secondDiv");
const parentID = document.getElementById("parent")
const myCreation = document.createElement("P");
myCreation.innerText = "this is straight form js"

parent[0].appendChild(myCreation)

console.log(parent, "this is the slected")
console.log(parentID, "this is the selection with Id")

const firstParent = document.getElementsByClassName("firstDiv")
let myelement = document.createElement("h1")
myelement.innerText = "The content"
myelement.className = "myHeader"
myelement.id = "hd1"
myelement.style.color = "yellow"

parent[0].appendChild(myelement)
firstParent[0].appendChild(myelement)
parentID.appendChild(myelement)

console.log(myelement, "this is my creation2")
console.log(firstParent, "first div")

// events
// const myInput = document.getElementById("nameText")

// myInput.addEventListener('change', (event) => {
//     console.log(event.target.value)
// })
// console.log(myInput, "my input")

const btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
    btn.innerText = "Yes Clicked"
    console.log(event, "this is the event")
})



