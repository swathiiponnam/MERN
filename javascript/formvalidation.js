

// // events
// const btn = document.getElementById("mybtn")

// btn.addEventListener("mouseover", (event) => {
//     btn.innerText = "you are in"
//     btn.style.backgroundColor = "skyBlue"
// })

// btn.addEventListener("mouseout", (event) => {
//     btn.innerText = "Click Me"
//     btn.style.backgroundColor = "goldenrod"
// })

// btn.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("this event is from btn")
// })

// const parentDiv = document.getElementById("tragDiv")

// parentDiv.addEventListener("click", (event) => {
//     console.log("this event is from div");
// })



// // form validation
// const myForm = document.getElementById("myForm") //targeting form
// const nameField = document.getElementById("name") // targeting name field
// const emailField = document.getElementById("email") //targeting email field

// myForm.addEventListener("submit", (event) => {
//     // this is to prevent the default behaviour of my submit btn
//     event.preventDefault()

//     // taking the form values
//     let nameInput = nameField.value
//     let emailInput = emailField.value


//     // checking the value
//     if (nameInput == "" || emailInput == "") {
//         alert("u should fill all the fields")
//     }
//     // pattern to match from regular exp
//     const mailPattern = "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
//     const namePattern = "^[a-zA-Z][a-zA-Z\s]*$"

//     // targetting the p tag to display error
//     const nameError = document.getElementById("nameError")
//     const emailError = document.getElementById("emailError")

//     if (!nameInput.match(namePattern)) {
//         nameError.innerText = "The pattern failed for name"
//         nameError.style.color = "red"
//     } else {
//         nameError.innerText = ""
//     }

//     if (!emailInput.match(mailPattern)) {
//         emailError.innerText = "The pattern failed for email"
//         emailError.style.color = "red"
//     } else {
//         emailError.innerText = ""
//     }
// })


// .......................................User Form Validation...........


// const userForm = document.getElementById("userForm")
// const uname = document.getElementById("uname")
// const phone = document.getElementById("phone")
// const mail = document.getElementById("mail")
// const address = document.getElementById("address")
// const pincode = document.getElementById("pincode")
// const subbtn = document.getElementById("subbtn")
// userForm.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     let nameField = uname.value ;
//     let phoneField = phone.value ;
//     let mailField = mail.value ;
//     let addressField = address.value;
//     let pincodeField = pincode.value;

//     if(nameField == "" || phoneField == "" || mailField == "" || addressField == "" || pincodeField == ""){
//         alert(" * all fields are required")
//     }

//     // patterns

//    let namePattern = "^[A-Za-z]+(?: [A-Za-z]+)*$"
//    let phonePattern = "[6-9][0-9]{9}"
//    let mailPattern =  "^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
// //    let addressPattern = "/^[0-9A-Za-z\s]+$/"
//     let pincodePattern = "[1-9][0-9]{5}"

//    const nameError = document.getElementById("nameError")
//    const phoneError = document.getElementById("phoneError")
//    const mailError = document.getElementById("mailError")
//    const addressError = document.getElementById("addressError")
//    const pincodeError = document.getElementById("pincodeError")

// //    name validation
//    if(!(nameField.match(namePattern))){
//     nameError.innerText = "name pattern is not matched"
//     nameError.style.color = "red"
//    }
//    else{
//     nameError.innerText = ""
//    }

// //    phone validation
//    if(!(phoneField.match(phonePattern))){
//     phoneError.innerText = "phone pattern is not matched"
//     phoneError.style.color = "red"
//    }
//    else{
//     phoneError.innerText = ""
//    }


// //    mail validation

//    if(!(mailField.match(mailPattern))){
//     mailError.innerText = "mail pattern is not matched"
//     mailError.style.color = "red"
//    }
//    else{
//     mailError.innerText = ""
//    }

// //    address validation

// //    if(!(addressField.match(addressPattern))){
// //     addressError.innerText = "address pattern is not matched"
// //     addressError.style.color = "red"
// //    }
// //    else{
// //     addressError.innerText = ""
// //    }

// // pincode validation

// if(!(pincodeField.match(pincodePattern))){
//     pincodeError.innerText = "pincode pattern is matched"
//     pincodeError.style.color = "red"
// }
// else{
//     pincodeError.innerText =""
// }

// })


// const myfrm = document.getElementById("myfrm")
// const uname1 = document.getElementById("uname")




// // myfrm.addEventListener("submit",(event)=>{
// //     event.preventDefault();

// //     let unameIn = uname1.value

// //     // patterns

// //     let unamePat = "[a-zA-Z]"

// //     // error

// //     let nameERR = document.getElementById("nameERR")
// //     // pattern valdation

// //     if(unameIn == ""){
// //         nameERR.innerText
// //     }
// // })





const mydiv = document.getElementById("mydiv")
const btn = document.getElementById("btn")
mydiv.addEventListener("click",(event)=>{
    // mydiv.innerText = "div clicked"
    mydiv.style.backgroundColor = "red"
    console.log("event from div");
    
})

btn.addEventListener("click",(event)=>{
    btn.innerText = "btn clicked"
    btn.style.backgroundColor = "pink"
    event.stopPropagation();
    console.log("event from btn");
    
})
btn.addEventListener("mouseout",(event)=>{
    btn.innerText = "click"
})