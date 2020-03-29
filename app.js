const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const expressValidator = require('express-validator')
dotenv.config()

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});


//bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');



//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);


const port = process.env.PORT ||  8080;
app.listen(port, () => {
  console.log(`A node JS API is listening on port ${port}`)
});
