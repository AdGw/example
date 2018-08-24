let myName: string = "Adrian";
let myAge: number = 25;
let canVote: boolean = true;
let anything: any = "dog";

document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

document.write("My age is " + typeof (myAge) + "<br/>");
document.write("Can i vote? " + typeof (canVote) + "<br/>");

let strToNum: number = parseInt("5");
let numToStr: number = 5;
document.write("NumToString is a " + typeof(numToStr.toString()) + "<br/>")
