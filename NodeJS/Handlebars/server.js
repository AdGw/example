let express = require('express');
let path = require('path');
let handlebars = require('express-handlebars');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

let people =[{
	firstname: 'John',
	lastname: 'Doe'
},{
	firstname: 'Tom',
	lastname: 'Jackson'
}];

app.get('/', function(req,res){
	res.render('home',{
		content: 'Lorem Ipsum',
		published: true,
		people: people
	});
});
app.listen(app.get('port'), function(){
	console.log("Server starten on: " + app.get('port'));
});