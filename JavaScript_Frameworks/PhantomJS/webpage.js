//need to install phantomJS and set environment variables
//then launch by cmd >phantomjs webpage.js

var page = require('webpage').create();

page.viewportSize = {
  width: 1920,
  height: 1200
};

function getItemsFromList(){
	console.log(" - Get Items From List");
	setTimeout(function(){
		var item = page.evaluate(function(){
			var el = document.getElementsByTagName('article')[0].innerText;
			return el;
		});
		console.log("x");
		console.log(item);
		page.render("1.4.AfterAll.png");
	},2500);
}

function confirmItem(){
	console.log(" - Confirm Items");
	page.evaluate(function(){
		var element = document.querySelector(".sprite.search-btn");
		element.click();
		if(!element){
			console.log("Confirm element doesn't exist");
			phantom.exit();
		}
	});
	setTimeout(function(){
		page.render("1.3.AfterConfirm.png");
		getItemsFromList();
	},2500);
}

function findItems(){
	console.log(" - Find Items");
	page.evaluate(function(){
		var element = document.querySelector("#main-search-text").value = "rower";
		if(!element){
			console.log("Input element doesn't exist");
			phantom.exit();
		}
	});
	setTimeout(function(){
		page.render("1.2.FillItems.png");
		confirmItem();
	},2500);
}

page.open('http://allegro.pl', function(status) {
	console.log("Status: " + status);
	if(status !== "success") {
	   	phantom.exit();
	}
	   page.render('1.1.Webpage.png');
	   findItems();
});
