let getSum = function(num1: number, num2: number): number{
	return num1 + num2;
}

let theSum1: number = getSum(5,6);
document.write("5+6 = " + theSum1 + "</br>")

let getDiff = function(num1: number, num2 = 2, num3? :number):number{
	if(typeof num3 !== 'undefined'){
		return num1 - num2 - num3;
	}
	return num1 - num2;
}

document.write("5-2 = " + getDiff(5) + "</br>")
document.write("5-2-3 = " + getDiff(5,2,3) + "</br>")

let sumAll = function(...nums: number[]):void{
	let sum = nums.reduce((a,b)=>a+b,0);
	document.write("Sum: " + sum + "</br>");
}
sumAll(1,2,3,4,5);

let addOne = x => x+1;
document.write("1+1= " + addOne(1) +"</br>")