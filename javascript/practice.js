// scope

// 1.Global scope

// var v1 = "js";
// let v2 = 10;
// const v3 = 50;

// function myFunction(){
//     console.log(v1);
//     console.log(v2);
//     console.log(v3);
    
// }

// myFunction();

// 2. Functional or Local scope

// function checkScope(){
//     var v1 = "js";
//     let v2 = 10;
//     const v3 = 50;  

//     console.log(v1,v2,v3);
    
// }
// console.log(v1,v2,v3);  // error: v1 is not defined

// checkScope();

// 3. Block Scope

// function checkBlockScope(){
//     let n = 20;
//     if(n%2 == 0){
//         console.log(`${n} is even number`);
//         let res = "even number"  //Reference error : res is not defined
        
//     }
//     else{
//         console.log(`${n} is odd number`);
        
//     }
//     console.log(res);
// }
// checkBlockScope();


// 4. lexical scope

// function outerFunction(){
//     const v1 = 10;
//     function innerFunction(){
//         const v2 = 20;
//         console.log(v1);  //can access bcoz of lexical scope
//     }
//     innerFunction();
//     console.log(v2);   // error: v2 is not defined
    
// }

// outerFunction();

