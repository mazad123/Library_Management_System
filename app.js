<<<<<<< HEAD
const connection = require('./MongoDatabase/createdatabase');
=======
// const connection = require('./MongoDatabase/createdatabase');
>>>>>>> 50304ffc1e0a4ef2f7990ee0c8cae5db4d886fb4
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
<<<<<<< HEAD
   res.send('Welcome to JavaTpoint');  
=======
  res.render('index');
>>>>>>> 50304ffc1e0a4ef2f7990ee0c8cae5db4d886fb4
});  

const server = app.listen(8000, async () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
<<<<<<< HEAD
  const resolved = await connection.mongoDbconnection();
  console.log(resolved)
=======
  // const resolved = await connection.mongoDbconnection();
  // console.log(resolved)
>>>>>>> 50304ffc1e0a4ef2f7990ee0c8cae5db4d886fb4
});