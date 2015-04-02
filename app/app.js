/* Init */
var bodyParser		= require('body-parser'),
	dbname 			= 'angular_mongodb',
	ejs 			= require('ejs'),
	express 	 	= require('express'),
	mongoose		= require('mongoose'),
	routes 			= require('./routes');

/* Express setup */
var app 			= express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));



/* Setup view engine */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



/* Routes */
// Index page
app.get('/', routes.index);



/* Get all products */
app.get('/products', routes.productGetAll);



/* CRUD for a product*/
// Create a product
app.post('/product/:id', routes.productCreate);

// Get a product by id
app.get('/product/:id', routes.productRead);

// Update a product
app.put('/product/:id', routes.productUpdate);

// Delete a product
app.delete('/product/:id', routes.productDelete);



/* Mongoose */
// DB connection
mongoose.connect('mongodb://localhost/' + dbname);
var db = mongoose.connection;
// DB events
db.on('error', console.error);
db.once('open', startServer)

/* Nodeserver */
// Start server
function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Starting node server. Listening on port ' + port);
	})
}