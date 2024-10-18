// const apiFetch = async () => {

//     const resp = await fetch('https://dummyjson.com/users')
//         .then(async (resp) => {
//             let response = await resp.json()
//             console.log(response.users, "resp from fetch")
//         })
//         .catch((msg) => {
//             console.log(msg)
//         })
// }

// apiFetch()

// // promise and fetch

// const resp = new Promise((resolve, reject) => {
//     const sum = 6 + 7
//     if (sum === 10) {
//         resolve("promise success")
//     } else {
//         reject("promise rejected")
//     }
// })

// resp.then((message) => {
//     console.log("this is my", message)
// })

// resp.catch((message) => {
//     console.log("this is my", message)
// })




// Fetch APi and print it using map method


const fetchApi = async ()=>{
    let url = fetch("https://dummyjson.com/users")
    .then(async (res)=>{
        let userdata = await res.json()
        let data = userdata.users 
        console.log(data);
        
        console.log(userdata.users);

        const root = document.getElementById("root")

        // using list 

        // const mycreation = data.map((ele)=>{
        //     const list = document.createElement("li")
        //     list.innerText = ele.firstName
        //     return root.appendChild(list)
        // })


        // using table

        // const mycreation = data.map((ele)=>{
        //     const td1 = document.createElement("tbody")
        //     td.innerText = ele.firstName 
          
        //     return root.appendChild(td)
        // })

        const mycreation = data.map((ele)=>{
            const fname = document.createElement("td")
            fname.innerText = ele.firstName

            const lname = document.createElement("td")
            lname.innerText = ele.lastName
          
            const id = document.createElement("td")
            id.innerText = ele.id

            root.appendChild(td)
            root.appendChild(td)
            root.appendChild(td)

            root.appendChild(tr)
        })
        
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
}
fetchApi();
