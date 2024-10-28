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

 // using list 

        // data.map((ele)=>{
        //     const list = document.createElement("li")
        //     list.innerText = ele.firstName
        //     return root.appendChild(list)
        // })


const fetchApi = ()=>{
    let url = fetch("https://dummyjson.com/users")
    .then(async (res)=>{
        let userdata = await res.json()
        let data = userdata.users 
        console.log(data);
        console.log(userdata.users);
       
        data.map((ele)=>{

            const root = document.getElementById("root")
            const mytable = document.getElementById("mytable")
            const trow = document.createElement("tr")
    
            const fname = document.createElement("td")
            const lname = document.createElement("td")
            const id = document.createElement("td")

            id.innerText = ele.id;
            fname.innerText = ele.firstName;
            lname.innerText = ele.lastName;

            root.appendChild(mytable)
            mytable.appendChild(trow);
            trow.append(id,fname,lname);
            
        })
        
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
}
fetchApi();

// const fectchData = ()=>{
//     let response = fetch("url")
//     .then((res)=>{
//         let data = res.json()
//         let userdata = data.users

//         userdata.map((ele)=>{

//         })
//     })
// }

const Ap = ()=>{
    let resp = fetch("")
    .then((res)=>{
        let fetchdata = res.json()
        let data = fetchdata.users

        data.map((ele)=>{
            const mytable = document.getElementById("mytable")
            const trow = document.getElementById("tr")

            const fname = document.createElement("td")
            const lname = document.createElement("td")

            fname.innerText = ele.fname
            lname.innerText = ele.lname

            root.appendChild(mytable)
            mytable.appendChild(trow)
            trow.append(fname,lname)
        })
    })
    .catch((err)=>{
        console.log(err);
        
    })
}