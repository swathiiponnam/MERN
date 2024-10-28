// promises

let myPromise = new Promise((resolve,reject)=>{
    let x = 10 + 5;
    if(x === 15){
        resolve(" success")
    }
    else{
        reject(" failed")
    }
})
myPromise.then((mess)=>{
    console.log("my promise is",mess);
    
})
myPromise.catch((mess)=>{
    console.log("my promise is",mess);
    
})