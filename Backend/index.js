const express = require('express');
const bodyParser = require('body-parser');
const db = require('./Config/db.config')
// create express app
const app = express();
//cors
const cors = require("cors");
// db
db();
//session
const session = require('express-session');
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// Require employee routes
const Routes = require('./Routes/Routes');
// using as middleware
app.use('/api/v1/', Routes)
//explore cors
app.use(cors());
// Set up Express session
// app.use(session({
//   secret: 'your-session-secret',
//   resave: false,
//   saveUninitialized: false
// }));
// listen for requests
app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port,(err)=>{
  if(!err){
    console.log("app running on port",port)
  } else {
    console.log(err);
  }
})
