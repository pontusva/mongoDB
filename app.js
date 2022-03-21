const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.DB_CONNECTION || 8080;
require('dotenv').config();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
    res.send('We Are On Home');
});



// connect to DB
mongoose.connect('mongodb+srv://admin123:hejsan34q@cluster0.2m9az.mongodb.net/myDataBase?retryWrites=true&w=majority', () => {
    console.log("connected do DB c:")
});


app.set("port", PORT);

// listening
app.listen(PORT,
    () => console.log("server is running..."));

