const connection = require('./MongoDatabase/createdatabase');
const express = require('express');  
const app = express();  
app.get('/', function (req, res) {  
   res.send('Welcome to JavaTpoint');  
});  
const server = app.listen(8000, async () => {  
  const host = server.address().address;  
  const port = server.address().port;
  const resolved = await connection.mongoDbconnection();
  console.log(resolved)
  console.log("Example app listening at http://%s:%s", host, port);  
});