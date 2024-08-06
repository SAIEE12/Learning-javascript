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
// let gameNum = 77;
// let userNum = prompt("Enter the guess number");
// while(userNum != gameNum) {
//      userNum = prompt("Entered the wrong guess number,Renter the guess number");

// }
// console.log("congratulation you have entered the correct number");

//practice question 3 taking ip from user and print the name by adding "@" at starting and size at the end

// let uname = prompt("Enter the name without any spaces");

// let fullname = "@" + uname + uname.length;
// console.log(fullname);


//ARRAYS
// let marks = [1,2,3,4,5,6];
// console.log(marks );

// using for loop 

// let names = ["sai", "manish", "sunny"]
// for (let idx = 0; idx < Array.length; idx++){
//     console.log(names);
// }




//using for of loop
//let names = ["sai", "manish", "sunny"]

// for (let name of names) {
//     console.log(name);
// }

//sum of the marks
// let marks = [1,2,3,4,5,6]

// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`the average sum of marks = ${avg}`);


//offer question
// let items = [250,645,300,900,50];

// let idx =0;
// for (let val of items){
//     console.log(`value at index = ${val}`);
//     let offer = val/10;
//     items[idx] -= offer;
//     console.log(`the final price= ${items[idx]}`);


//     idx++;
// }



let itm = [250,300,900];
let i = 0;
for (let el of itm){
    console.log(`the original price of the item = ${el}`)
    let offer = el/10;
    itm[i] += offer
    //console.log(`${offer}`);
    console.log(`the final price of the item = ${itm[i]}`);

    i++
}