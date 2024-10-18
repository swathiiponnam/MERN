// 1. Converting Kilometers to Miles and Celsius to Fahrenheit
// let km = 5;
// let miles = km* 0.6;
// console.log(`${km} kilometer is equal to ${miles} miles`);

// let cel = 35;
// let Fahrenheit = (9/5* cel) +32
// console.log(`${cel} Celcius is equal to ${Fahrenheit} Fahrenheit`);



// 2. Checking any number’s nature if it is positive, negative, or zero

// let n = prompt("enter a nymber")
// if(n>0){
//     console.log("positive num");

// }
// else if(n<0){
//     console.log("negative num");

// }
// else if(n === 0){
//     console.log("given number zero");

// }
// else{
//     console.log("wrong input");

// }

// 3. Generating a random number

// let res = Math.random()
// console.log(res*10);

// 4. Checking if a number is odd or even and checking if a number is prime or not

// function checkOddEve(n){
//     if(n%2 === 0){
//         console.log(`${n} is even number`);

//     }
//     else{
//         console.log(`${n} is odd number`);

//     }
// }
// checkOddEve(27);

// ........................prime number or not.................




// function prime(n) {
//     // let n=13;
//     if (n < 2) {
//         console.log("not a prime number");

//     }
//     for (let i = 3; i <= n; i++) {
//         if (n % i == 0) {
//             console.log("not a prime");
//             break;
//         }
//         console.log("prime number");
//         break;
//     }
    


// }
// prime(13);




// 5. Finding largest number among three numbers

// let num1 = 10;
// let num2 = 4;
// let num3 = 14;

// if(num1>num2){
//     if(num1>num3){
//         console.log(`${num1} is largest`);

//     }
//     else{
//         console.log(`${num3} is largest`);

//     }
// }
// else{
//     if(num2>num3){
//         console.log(`${num2} is largest`);

//     }
//     else{
//         console.log(`${num3} is largest`);

//     }
// }


// 6. Finding factorial of any number

// function fact(n){
//     fact = 1
//     for(let i=1;i<=n;i++){
//         fact *= i;
//     }
//     console.log(fact);

// }
// fact(6);

// 7. Finding Armstrong number in any interval

function Armstrong(n){
    // let n = 153;
    let str = n.toString()
    let length = str.length
    let res = 0;
    for(let i=0;i<=length-1;i++){
        let sum = 0;
        sum += Math.pow(str[i],length)
        res = res + sum
    }
    console.log(res);
    if(res == n){
        console.log(`${n} is armstrong number`);

    }
    else{
        console.log(`${n} is not an armstrong number`);

    }

}
Armstrong(153);


// 8. Finding if numbers have the same last digit

// function sameLastDigit(x,y){
//     if(x%10 === y%10){
//         console.log(`yes,${x} and ${y} have same last digit`);

//     }
//     else{
//         console.log(`no,${x} and ${y} have same last digit`);
//     }
// }
// sameLastDigit(43,653);




// 9. Checking palindrome

// function palindrome(){
//     let s = "oppo";
//     let len = s.length;
//     for(let i=0;i<len-1;i++){
//         if(s[i]!==s[len-1]){
//             console.log("not a palindrome");
//             break;
//         }
//         len--;
//         console.log("yes,palindrome");  
//         break;
//     }
// }
// palindrome()


// 12. Finding factors of numbers

// let num = 24;
// for(let i=1;i<=num;i++){
//     if(num%i == 0){
//         console.log(i);
        
//     }
// }


// 13. Printing Fibonacci sequence

// function fibonacci(n){
//     let num1 = 0;
//     let num2 = 1;
//     for(let i=1;i<=n;i++){
//         console.log(num1);
//         let res = num1 + num2;
//         num1 = num2;
//         num2 = res;
//     }
// }

// fibonacci(7)


// 14. Replacing characters of a string

// let s = "this is javascript assignment questions and answers"
// res = s.replace('javascript','java')
// console.log(res);


// 15. Reversing characters of a string

// let s = "swathi"
// let arr = s.split("")
// let arr1 = []
// for(let i in arr){
//     arr1.unshift(arr[i])
//     res = arr1.toString()
// }
// console.log(res);

// 16. Sorting words in alphabetical order

// let statement = "Sorting words in alphabetical order";

// let res = statement.split(" ").sort().join(" ")
// console.log(res);




