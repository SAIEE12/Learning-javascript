// let str = "SAI MANISH";
// let size = 0
// for (let val of str){
//     console.log("val = ",val);
//     size++;
// }
//  console.log("String size",size);
// let name = prompt("enter your name");
// console.log("name =",name);

 /*Loops in the javascript -->for loop 
                         -->while loop
                         -->do-while loop
                         -->for of loop(used to return the split values of string)
                         -->for in loop(used to return the keys & values)
                         */
//for of loop 
// let Str = "sai";
// for (let i of Str){
//     console.log("i=",i)
// }
 

//for in loop
// let student ={
//     name:"sai",
//     age:23,
//     isPass:true,
// };
// for (let key in student){
//     console.log(key,student[key]);
// }

//practice question 1 - print the even/odd number from 1-100 (for loop)

//practice question 2 - guessing number (while loop)
let gameNum = 77;
let userNum = prompt("Enter the guess number");
while(userNum != gameNum) {
     userNum = prompt("Entered the wrong guess number,Renter the guess number");

}
console.log("congratulation you have entered the correct number");