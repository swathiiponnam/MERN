// 1. function to remove duplicate values from an array?

// let arr = [20,13,17, 25,30,25,44,17]
// function remove_dup(){
//    let res = arr.filter((ele,index)=>arr.indexOf(ele) === index
//    )
//    console.log(res);
   
// }
// remove_dup()

// 2. check if the given string is palindrome or not 

// function palindrome(s) {
//   let j = s.length-1
//   for (let i = 0; i < s.length / 2; i++) {
//     if (s[i] !== s[j]) {
//         console.log('no');
//         return false;
//     }
//       j--;
//   }
//   console.log("yes, it is a palindrome");
  
// }
// palindrome("madam");


// 3. fibonacci series

// function fibonacci(n){
//   let num1 = 0;
//   let num2 = 1;

//   for(let i=1;i<=n;i++){

//     console.log(num1);
//     let res = num1 + num2;
//     num1 = num2;
//     num2 = res;
    
//   }

// }
// fibonacci(10)

// 4. Find and return the largest number in an array?

// let arr = [20,13,17, 25,30,25,44,17]

// let res = Math.max(...arr)
// console.log(res);

// 5. FizzBuzz : Fizz for multiples of 3 ,Buzz for multiple of 5; FizzBuzz for multiple of 3 and 5

// function fizzbuzz(n){

//   for(let i=1; i<=n;i++){
//     if(i%3 === 0 && i%15 !== 0){
//       console.log("Fizz");
      
//     }
//     else if (i%5 === 0 && i%15 !== 0) {
//       console.log("Buzz");
      
//     } 
//     else if(i%15 === 0) {
//       console.log("FizzBuzz");
      
//     }
//     else{
//       console.log(i);
      
//     }
//   }
// }
// fizzbuzz(50)


// 6. Reverse a number

// let num = 542;
// let res = num.toString().split('').reverse().join('')
// console.log(res);


let num = -542;
let rem = num%10;
let div = num/10
console.log(rem , div);


// 7. check if 2 given strings are anagram

// function anagram(s1,s2){
//   // let s1 = "top";
//   // let s2 = "opt"

//   if(s1.split('').sort().join('') === s2.split('').sort().join('')){
//     console.log('anagram');
    
//   }
//   else{
//     console.log('not an anagram');
    
//   }
// }
// anagram('top','opt');

// 8. find and return the first non-repeating charcter in a string?

// s = "option"


// function non_repeat_char(s){
//   for(let i=1; i<s.length;i++){
//     for(let j=0; j<s.length-1;j++){
//       if(i!==j && s[i]===s[j]){
//         break;
//       }
//       else{
//         console.log(s[i]);
//         break;
//       }
//     }
//     break;
//   }
// }
// non_repeat_char('option')

// 9.write a function to sum the all elements of nested array

// let arr = [2,3,[4,6],9,[3,15,6],10]
// res_arr = arr.flat();
// sum = res_arr.reduce((acc,cur)=>acc+cur,0)
// console.log(sum);

// or 

// function sum_array(arr){
//   res_arr = arr.flat();
//   sum = res_arr.reduce((acc,cur)=>acc+cur,0)
//   console.log(sum);
  
// }
// sum_array([2,3,[4,6],9,[3,15,6],10])


// 10. move all zeroes in an array to end while keeping the order of non-zero elements

// let arr = [1,4,0,0,8,2,0,3];
// let arr1 =[]
// let arr2 = []

// arr.map((val)=>{
//   if(val>0){
//       arr1.push(val)
//   }
//   else if(val == 0){
//       arr2.push(val)
//   }
// })

// let result =arr1.concat(arr2)
// console.log(result);


// 11.  Count the number of vowels (a, e, i, o, u) in a given string.

// let s = "swathi";
// let vowels = 'aeiouAEIOU';

// let count = 0;
// for (const char of s) {
//   if(vowels.includes(char)){
//     count++;
//   }
// }
// console.log(count);


// 12.  Find the missing number in a sequence of integers from 1 to `n`, where one number is missing.

// let arr = [1,2,3,5,6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i+1]-arr[i]>1){
//         let res= arr[i]+1;
//     }
// }
// console.log(res);


// 13. Flatten a nested array into a single-level array.

// let arr = [2,3,[4,6],9,[3,15,6],10]
// res = arr.flat()
// console.log(res);


// 14. Find the longest word in a given string.



// function longest_word(s){
//     s = s.split(" ")
//     let ind = s.reduce((acc,cur,i)=>{
//         if(cur.length>s[acc].length){
//             return i;
//         }
//         return acc;
//     },0);
//     return s[ind];
// }
// console.log(longest_word(" JavaScript is a scripting and programming language"));

//15. Given an array of integers and a target sum, return the indices of the two numbers that add up to the target

// let arr = [20,30,15,10,5];
// let sum = 35;

// for(let i=0; i<arr.length;i++){
//   for(let j=1;j<arr.length-1;j++){
//     if(arr[i]+arr[j]== sum){
//       console.log(i,j);
      
//     }
//   }
// }