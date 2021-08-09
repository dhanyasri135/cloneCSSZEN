// telusko @navin raddy
//
// #3
// let num=4
// console.log(num);

// num=9;
// console.log(num);

// let user="dhanya's phone";
// console.log(user);

// #4

// let r=5;
// const pi=3.14;
// let area

// area=pi*r*r;
// console.log(area);

// #5

// type of a var
// let num1=9.8
// console.log(typeof num1);

// //hexadecimal
// let num2=0xf;
// console.log(num2);

// //infinity
// let num3=5/0;
// let num4=-5/0;
// console.log(num3,num4)

// //BigInt:-n in the ending represents it is a big int
// let num5=1234567890987654321n;
// console.log(num5);


// #6

// strings
// concatenating strings
// let msg="hy";
// let rsg=5;
// let ysg=msg+" "+rsg
// console.log(ysg);

// escape character
// let user="dhanya \"phone\""
// console.log(user);

// \n for new line & \t for tab & for deleting
// let naam="dhanya is\ta \ngoo\bod girl"
// console.log(naam);

// boolean
// let bool=5>6
// console.log(bool)

// null
// let x=null;
// console.log(x);

// // undefined
// let y;
// console.log(y);

// NaN
// console.log(5/"dhanya");
// console.log(typeof (5/"dhanya"));

// #7
// javascript is an interpreted language.


// #8
// type conversion and type coercion

// let num="6"; // this is string beacuase of ""
// console.log(num, typeof num);

// let num1=Number("123"); // this is a number because we mentioned number
// console.log(num1, typeof num1)

// let x
// console.log(x,typeof x);
// x=8;
// console.log(x,typeof x);
// x=x+"";                     // x becomes string
// console.log(x,typeof x);    // here coercion comes into picture
// x=x-2;
// console.log(x,typeof x);
// x=+x+4;
// console.log(x,typeof x);

// x=!x;                       // here x is converted into boolean and the operation is performed
// console.log(x,typeof x);

// console.log(Boolean(0))     // 0 is false and anyother number is true in boolean
// console.log(Boolean(null))  // false
// console.log(Boolean(undefined))     //false
// console.log(Boolean("dhanya"))

// let y="123dhanya"; // let y=Number("123dhanya") this will give Nan and if u want to atleast print the numbers in it we use parseInt
// console.log(y);
// // like below
// let z=parseInt("123 dhanya")        // this will only convert for string which have numbers at the start
// console.log(z);


// #9 
// arithemetic operators 
// let num1=4;
// let num2=2;
// let result=num1+num2;       // +-*/ can be done
// console.log(result);        // % for remainder


// let x=true;
// let y=true;
// let resultxy = x+y;       // answer will true, beacuse true will be type coerced and true = 1. so answer is 2.
// console.log(resultxy);

// let num=4;
// let x=num++;        // post increment
// let y=++num;        // pre increment
// console.log(x,y,num);

// let num=4;
// let result=Math.pow(num,3);     // finding powers using in-built functions also we can use 4**3
// console.log(result);

// #10
// relational operations

// let x="Pen"     // it compares based on ASCII values
// let y="Book"
// let data=x>y
// console.log(data);

// let a="3"
// let b=3
// let num = a===b;    // here a==b will be true beacuse it will be type coerced. and if you use a===b then it will be strict equality
// console.log(data);


// #11
// logical operators

// let x=7, y=2, z=5
// let result=x<y || x<z       // && for AND, || for OR, ! for NOT

// let n=!result               // NOT 
// console.log(result,n);


// #12
// conditional statement

// let num1=6
// let num2=9
// if(num1>num2)
//     console.log("num1 is greater");
// else
//     console.log("num2 is greater")
// console.log("bye...")


// let num1=6;
// let num2=4;
// if(num1>num2)
//     console.log("num1 is greater");    // every condition statement will take only one statement by default
// else{
//     console.log("num2 is greater");
//     console.log("yeee")    
// }                                   // giving curly braces will include all the commands in else part only
// console.log("byee")



// comparing 3

// let num1=6;
// let num2=67;
// let num3=3;
// if(num1>num2 && num1>num3){
//     console.log("num1 is greater");
// }
// else if(num2>num1 && num2>num3){
//     console.log("num2 is greater")
// }
// else{
//     console.log("num3 is greater")
// }


// even or odd

// let num1=9;
// if(num1%2===0){
//     console.log("num1 is even");
// }
// else{
//     console.log("num1 is odd")
// }


// #13
// ternary operators
// ?:
// even or odd using ternary operators
// let num=8;
// let result;
// result=num%2===0 ? "even" : "odd"
// console.log(result)


// #14
// switch statement in js

// using if-else
// let day = 'Tuesday';
// if (day=='Monday')
//     console.log('7:00 am');
// else if (day == 'Tuesday' | day=='Wednesday' | day=='Thursday')
//     console.log('4:00 am');
// else if(day == 'Friday')
//     console.log('9:00 am');
// else 
//     console.log('8:00 am');


// now using switch statement
// let day="thursday";
// switch (day) {
//     case "monday":
//         console.log("7am");
//         break;              // jump out of the block
//     case "tuesday":
//         console.log("4am");
//         break;
//     case "wednesday":
//         console.log("4am");
//         break;
//     case "thursday":
//         console.log("4am");
//         break;
//     case "friday":
//         console.log("9am");
//         break;
//     case "saturday":
//         console.log("8am");
//         break;
//     case "sunday":
//         console.log("8am");
//         break;
//     default:
//         console.log("not matching");
//         break;
// }


// #15
//template literal in JS

// let num1=7;
// let num2=8;
// let result=num1+num2;
// // console.log("the addition of " +num1+ " and " +num2+ " is " +result)
// console.log(`the addition of ${num1} and ${num2} is ${result}`)         // this is using template literal..${num1} means value of num1 and here we use back qoutes.


// #16
// while loop: initialize, condition, increment

// let i=1;
// while(i<=5)
// {
//     console.log("Hi",i);
//     i++;
// }


// do while: this will execute the loop atleast once!

// let i=10;
// do{
//     console.log("hi",i);
//     i++;
// }
// while(i<=5)


// #17
// for loop in js
// in for loop we can initialise,condition and increment on the same line 
// but if you want to give any one or any two only then:--- for(;i<=5;i++) or for(;i<=5;)

// for (let i=1;i<=5;i++)
// {
//     console.log("hi",i);
//     console.log("Hello",i)
// }


// #18


// // numbers divisible by 3
// for(let i=1;i<=100;i++)
// {
//     if(i%3===0)
//         console.log(i)
// }


// printing the numbers of a number

// let num=23456765

// while(num>0)
// {
//     console.log(num%10);
//     num=parseInt(num/10)
// }



// #19
// Objects in JS

// let ob={
//     naam:"dhanya",
//     age:19,
//     clg:"SVNIT",
//     likes:{
//         place:"kerala",
//         food:"biryani"
//     }

// }

// console.log(ob.likes.place)     // ob.age to fetch



// #20

// let ob={
//         naam:"dhanya",
//         age:19,
//         clg:"SVNIT",
//         likes:{
//             place:"kerala",
//             food1:"biryani",
//         },
//         place:"vijayawada",
//     }

// console.log(ob.likes.food?.length)   // if food or likes keywords are not available '?.' giving thi will print undefined rather than giving error
//                                     // .length gives the length of the specified value.
// delete ob.clg       // for deleting a keyword
// console.log(ob)



// #21

// let ob={
//         naam:"dhanya",
//         age:19,
//         clg:"SVNIT",
//         likes:{
//             place:"kerala",
//             food1:"biryani",
//         },
//         place:"vijayawada",
//     }

// for(let key in ob['likes'])
// {
//     console.log(key,ob['likes'][key]);
// }



// #22
// Functions

// function greet()
// {
//     console.log("hello world");
// }

// greet();                 // this is to call it


//  #23

// function greet(user)
// {
//     return `hello ${user}!`
// }
// let user="dhanya";
// let str=greet(user);
// console.log(str);            // if console statement is given in funtion the we can directly give greer(user);



// #24
// function is an object type.

// let add=function(num1,num2)
// {
//     return num1+num2
// }
// console.log(add(2,4))



// #25
// local and global variable-default value


// let user="dhanya";          // user is a global variable
// function greet(u)           // here u will be a local variable
// {
//     let num=5;              // this is a local variable
//     console.log(num);
//     console.log(user);
//     return `hello ${u}!!`
// }
// let str=greet(user);
// console.log(str);


// function add(num1=0,num2=0,num3=0)        // here if u dont pass the values for all the numbers it will give errors & to avoid that we can give default values like function add(num1=0,num2=0,num3=0)
// {

//     return num1+num2+num3;
// }

// console.log(add(2,3,4))                 // default value is only applicable when we are not passing any argument



// #26
// arrow function

// let add=(num1,num2) => num1+num2;       // this arrow symbol works as a function indication
// let result=add(2,3)
// console.log(result);

// // or

// let greet=(user) => {
//     console.log("hello "+user)
//     return 1;
// }
// console.log(greet("dhanya"))



// #27
// methods

// let laptop={
//     cpu:"i9",
//     ram:16,
//     brand:"HP",

//     greet: function(){                                 // this is a method
//         console.log("hello world");
//     },

//     add: function(a,b){
//         console.log(a+b);
//     }
// }
// laptop.add(45,54);
// laptop.greet();



// #28
// "this" keyword

// let laptop={
//     cpu:"i9",
//     ram:16,
//     brand:"hp",

//     getConfig:function(){
//         let storage=100
//         console.log(this.cpu);          // this will refer to the current object...that is laptop
//     }

// }

// let laptop1={
//     cpu:'i7',
//     brand:'dell',
//     ram:32,

//     getName:function(){
//         console.log(this.cpu);
//     }
// }

// laptop.getConfig();
// laptop1.getName();



// #29

// let laptop={
//     cpu:"i9",
//     ram:16,
//     brand:"hp",
//     compare:function(other){
//         if(this.cpu>other.cpu){
//             console.log(this);
//         }
//         else{
//             console.log(other)
//         }
//     },

//     getConfig:function(){
//         let storage=100
//         console.log(this.cpu);          // this will refer to the current object...that is laptop
//     }

// }

// let laptop1={
//     cpu:'i7',
//     brand:'dell',
//     ram:32,

//     getName:function(){
//         console.log(this.cpu);
//     }
// }


// laptop.compare(laptop1);



// #30
// constructor function in js
// a constructor will have it's first letter to be capital and a normal function will have small letter

// function Alien(name,tech){
//     this.name=name;
//     this.tech=tech;
//     this.work=function(){
//         console.log("solving bugs")
//     }
// }

// let alien1= new Alien('dhanya','python');        // it will create a new object everytime while u use 'new'
// let alien2=new Alien('dhanyasri','JS');

// alien2.tech="java"          // to change
// console.log(alien1);
// alien1.work()               // to use function in constructor



// #31
// creating array and fetching elements in JS


// let values=new Array();        // way of creating array


// let values=[5,6,7,8];   // another way
// values.push(9);         // to add value
// console.log(values[1]);         // to fetch a specific value and index numbers starts from 0 
// console.log(values);



// #32
// different types of data in array


// let values=['dhanya','anvitha','sri'];
// values[3]='reshma'          // to add data at specific position
// console.log(values);


// let data=['dhanya',19,{tech:'JS'},function(){console.log("hello world");}];
// console.log(data);
// data[3]();



// #33
// array methods in JS

// let data=[5,6,7,8];
// console.log(data.push(2));          //push will add at the end
// console.log(data.pop());            //pop will remove from the end
// console.log(data.shift());          //shift will remove from the starting
// console.log(data.unshift(4));       // unshift will add at the starting
// console.log(data.splice(2,1));      // splice will remove all the elemnts after the specified index number and if you mention 1 after index number then it will remove only one element
// console.log(data);



// #34
// for of loop with an array in js


// let nums=[];
// nums[0]=5;
// nums[99]=9;

// for(let n of nums){
//     console.log(n);
// }

// for(let key in nums){
//     console.log(nums[key]);
// }