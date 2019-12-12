
var express = require('express')

const { Professor } = require('./sequelize');

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'grandeporte'
});

connection.connect();

connection.query('SELECT * from professor', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows);
});

connection.end();

app.get('/', function(request, response ){
    response.send('Hello!');
});

app.get('/home', (request, response ) => {
    response.send('Home');
});

app.get('/usuario/:id', (request, response ) => {
    console.log(request.params);
    response.send('Usuário');
});

app.get('/professores', (request, response ) => {
    Professor.findAll().then( p => {
        console.log(p);
        response.send(p);
    }
    )
});

app.post('/professores', function(request, response){
    console.log(request.body);
    Professor.create(request.body);
    response.send(true);
});

app.listen(3000);

