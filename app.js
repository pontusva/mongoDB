const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config();
const source = process.env.DB_CONNECTION;
// import routes
const postsRoute = require('./routes/posts');
const militaryRoute = require('./routes/military');
const authRoute = require('./routes/auth')

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use('/military', militaryRoute);
app.use('/posts', postsRoute);
app.use('/api/user', authRoute);


// Routes
app.get('/', (req, res) => {
    res.send('github.com/pontusva');    
});



// connect to DB använd source som forsta paramater när du e färdig
mongoose.connect(source, () => {
    console.log("connected do DB c:")
});


app.set("port", PORT);

// listening
app.listen(PORT,
    () => console.log("server is running..."));

