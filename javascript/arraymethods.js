// let arr = [20,30,40,50,15,22]

// res = arr.push([1,2])  //op : 7 (length)

// res = arr.pop()        // op :  updated array

// res = arr.shift()      // op: 6 (length)

// res = arr.unshift(60)   // op: updated array

// console.log(res);
// console.log(arr);


// ................concat ..............

let  arr1 = [4,5,6] ;
let arr2 = [9,8,7];

// res = arr1.concat(arr2)

// console.log(res);    // op: concatinated array

// console.log(arr1,arr2);   //op: original array


// ................slice................


// res = arr.slice(1,4)

// console.log(res);   //op :  [30, 40, 50]

// console.log(arr);   //op: original array


// .................splice................

let arr = [20,30,40,50,15,22]

// res = arr.splice(1,3,80,90)

// console.log(res);   // returns: deleted items [30,40,50]

// console.log(arr);   // yes -updated array


// ................ForEach.................

// let res_arr=[]

// arr.forEach((ele,index)=>{
//     console.log(ele ,"elements" );
//     console.log(index , "index");

//     let res = ele*10;

//     res_arr.push(res)
    
    
// });
// console.log(res_arr);
    
// console.log(arr);


// ................map..................

arr.map((ele)=>{
    res = ele*2;
    console.log(res);
    
})

// ................