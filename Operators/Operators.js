'use strict';

//assignemnt 1
/*
let numOfDaysUntilWeekend = 2;
numOfDaysUntilWeekend -= 1;



1. Use console.log() to log the value just after the variable has been declared
2.  Use console.log() to log the value right after the value of the variable has been changed. 
3. Tell what it does 
*/


                let numOfDaysUntilWeekend = 2;
                console.log(numOfDaysUntilWeekend);
                numOfDaysUntilWeekend -= 1;
                console.log(numOfDaysUntilWeekend);



//assignemnt 2
//Addition to numbers

                let numOfDaysUntilWeekend = 2;
                console.log(numOfDaysUntilWeekend);
                numOfDaysUntilWeekend += 1;
                console.log(numOfDaysUntilWeekend);

//assignemnt 3
//Subtraction to numbers

                let numOfDaysUntilWeekend = 2;
                console.log(numOfDaysUntilWeekend);
                numOfDaysUntilWeekend -= 1;
                console.log(numOfDaysUntilWeekend);


//assignemnt 4
//write two sentences in two variables and connect them together

                var mystring = 'rupinder'; 
                mystring += 'singh';


//assignemnt 5
//write two variables, one number and one string. add them together

                var mystring = 'iba-';
                mystring += "kolding - ";
                let b = 6000;
                console.log("address = " + (mystring += "kolding - " + b));

//assignemnt 6
//write the answears in the in a comment
let r = 15;
let s = 5;
let t = r + s;      //console.log(t); 20
let u = r - s;      //console.log(u); 10
let v = t / u;      //console.log(v); 2
let x = r * v;      //console.log(x); 30
let y = s % v;      //console.log(y); 1

//assignemnt 7
//Why does it not write out?

let r = 34;         //r = 61
let c = 1;
let x = r - 32 + c;
let y = r++ * 4; 
if(x == 30 || y == 2 ){
 console.log("yeah you got it");
}

//change a number in a variable, so it print out the text


//assignemnt 8
//make two vaiables. One variable must contain a number and the other one must contain a prompt, 
//where the user can enter a number. Match the two number and print out the answear
//TIP: search prompt

                    let a = 500;
                    let yournum = prompt("Input your number to know the sum");
                    console.log("The sum of numbers is = " +(a + yournum));

            //comparison
                    let a = 500;
                    let yournum = prompt("Input your number to know the sum");
                    if (a > yournum)
                        {console.log("Your number is smaller than my number");}
                    else console.log("Your number is greater than my number");


//assignment 9
//write these numbers in the console and write the output. Explain you thing this happens
    0.1 + 0.2;              //output 0.30000000000000004
    0.1 + 0.2 === 0.3;      //output false beacause '===' means should be exactly same
    3  - 1                  //output 2 as it is simple subtraction
    3  + 1                  //output 4 as it is simple addition
    '3' - 1                 //output 2 subtraction
    '3' + 1                 //output '31' as '3' is a string and '1' is a number
    '222' - -'111'          //output 333 as '-' '-' becomes + and then adding two strings




//assignemnt 9
//Write a JavaScript program to determine whether a given year is a leap year 

                        let year = prompt("Input year");
                        year = year % 4;
                        if (year !== 0)
                            {console.log("It is not a leap year !");}
                        else console.log("Yeah! It is a leap year !");
