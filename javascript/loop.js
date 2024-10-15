// switch

// const fn2 = (val)=>{

//     switch (val) {
//         case 10:
//             console.log(val * 10);
//             break;
//         case 20:
//             console.log(val * 20);
//             break;
//         default:
//             console.log("no case is matching");
//             break;
//     }
// }
// fn2(20);

// first way(preferred)

// const fn3 =(val)=>{
//     switch (true) {
//         case (val<20):
//             console.log(val*20);
//             break;
//         case (val>30):
//             console.log(val*30);
//             break;
//         default:
//             console.log('no match');
            
//             break;
//     }
// }
// fn3(3);


// 2nd way

// const fn3 =(val)=>{
//     switch (val) {
//         case (val<20 && val):
//             console.log(val*20);
//             break;
//         case (val>30 && val):
//             console.log(val*30);
//             break;
//         default:
//             console.log('no match');
            
//             break;
//     }
// }
// fn3(3);



// Math object and it's methods

// console.log(Math.abs(-43));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.pow(4,3));
console.log(Math.min(13,4,2,6));
console.log(Math.max(13,5,6,2));
console.log(Math.max([13,2,5,6]));   // op: NaN : bcoz array is not a number
console.log(Math.max(...[13,2,5,6])); // op: 13
console.log(Math.min([13,2,5,6]));    // op : bcoz array is not a number
console.log(Math.round(5.7));
console.log(Math.round(5.2));

console.log(Math.random());


function my_fun1(){
    for(var i=0;i<2;i++){
        setTimeout(() => {
            console.log("hi");
            console.log(i);
            
        }, 2000);
       
        
    }
}
my_fun1();
