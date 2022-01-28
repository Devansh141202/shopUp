const express = require('express');
const db = require('./models/db');
const dotEnv = require('dotenv').config();
const User = require('./models/user');
const userRouter = require('./routes/user');
const app = express();

app.use(express.json());

app.use(userRouter);

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>');
});

app.listen(3000, () => {
    console.log("port is listening");
});

//mongodb+srv://admin:<password>@cluster0.pneai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority