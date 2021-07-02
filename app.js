// const connection = require('./MongoDatabase/createdatabase');
const express = require('express');  
const app = express();  
const path = require('path');
const bodyParser = require('body-parser');
const route = require('./routes/routes');

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', route);

app.get('/', function (req, res) {  
  res.render('index');
});  

const server = app.listen(8000, async () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
  // const resolved = await connection.mongoDbconnection();
  // console.log(resolved)
});