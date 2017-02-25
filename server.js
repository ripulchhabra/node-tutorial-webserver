const express = require('express');
const hbs = require('hbs');

var app  = express();

hbs.registerPartials(__dirname + '/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
	res.render('maintain.hbs',{
		message : 'We will be back soon...',
		title : 'Site under maintainance'
	});
});

hbs.registerHelper('currentyear' , () => {
	return new Date().getFullYear();
});

hbs.registerHelper('toUpper' , (text) => {
	return text.toUpperCase();
});

app.get('/', (req,res) => {
	res.render('index.hbs',{
		message : 'Welcome to Express First page',
		title : 'Home Page'
	});
});


app.listen(3000,() => {
	console.log('server is running on 3000 port');
});