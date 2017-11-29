// example of JQuery usage, this function will get
// value written by user and set it to input tag or
// contenteditable element in paragraph tag

$(function(){
	$(".text").on("keyup", function(){
		let input = ($(this).val());
		$(".newtext").text(input);
	});
	$(".paragraph").on("keyup", function(){
		let copy = ($(this).text());
		$(".copyof").text(copy);
	});
});

// this function use keyup event