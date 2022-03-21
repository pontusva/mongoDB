const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || '8080';
require('dotenv/config');

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
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected do DB c:")
});

app.set("port", PORT);

// listening
app.listen(process.env.PORT || '8080',
    () => console.log("server is running..."));