


// function checkHoisting(){
    
//     console.log(a);
//     console.log(b);
//     console.log(c);
    

//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a,b,c);
    
// }
// checkHoisting();

// ...............................................................................................
// console.log(foo());

// function foo(){
//     return "hello"
// }

// console.log(bar());
// var bar = function(){
//     return "hello"
// };

// op: function hoisting incase of first case;
// second case variable is declared and try to access it ,it is getting hoisted to top so we'll get undefined for bar,so if we try to call bar(); we're calling undefined(), so we're getting bar is not a function;

// ............................................................................


// 2. for const we'll get cannot access
// for let we'll get refernece error

// ......................................................... 



// console.log(a);
    // console.log(b);
    // console.log(c);
    


    // b = 20;
    // var b;   // undefined
    // let b;     // cannot access 


    // .............................................. 

    // function test(){
    //     console.log(x);
    //     var x=5;
        
    // }
    // test()   //op: undefined


    // ........................................................




    // var x= 10;
    // function test(){
    //     console.log(x);
    //     var x = 20;
    // }
    // test();     //op: undefined

//....................................................................

// console.log(typeof foo);
// var foo = function(){
//     console.log("hello");
    
// };

// // op: undefined


// ..........................................................................

// console.log(test);
// var test = 10;
// function test(){};
//     console.log(test);
    
// op : f test(){}
//      10


// ............................................................................

// foo();     // op: normal function call an dfunction , so we'll get foo as output
// bar();    //op: bar is not function: bcoz we've used var to hold the function, so it has value as undefined
// function foo(){
//     console.log("foo");
    
// }

// var bar = function(){
//     console.log("bar");
    
// };

