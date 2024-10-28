// storage
// locaal storage

// local and session storage
const myData = {
    name: "swathi",
    place: "vijayawada"
}

let stringForm = JSON.stringify(myData)

// localStorage.setItem("token", stringForm)
// localStorage.removeItem("tolen")


// session storage

sessionStorage.setItem("ses_token",stringForm)



