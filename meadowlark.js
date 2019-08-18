'use strict'
var express = require('express'),
	app = express(),
	exphbs = require('express-handlebars')
		.create( {defaultLayout: 'main'});

var fortunes = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will hava a pleasant surprise.",
	"Whenever possible, keep it simple.",
];
		
app
	.engine('handlebars', exphbs.engine)

	.set('view engine', 'handlebars')

	.set('port', process.env.PORT || 3000)

	.use(express.static(`${__dirname}/public`))

	.get('/', (req,res) => {
		res.render('home');
	})
	.get('/about', (req, res) => {
		var randomFortune = fortunes[Math.floor(Math.random()* fortunes.length)];
		res.render('about', {fortune: randomFortune} );
	})

	// custom 404 page
	.use( (req, res)=>{//adds middleware
		res.status(404);
		res.render('404');
	})

	//custom 500 page
	.use( (err, req, res, next) => {
		console.log(err.stack);
		res.status(500);
		res.render('500');
	})
	.listen( app.get('port'), () => {
		console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-c to terminate`);
	});