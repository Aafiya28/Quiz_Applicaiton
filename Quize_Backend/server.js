const express = require('express');
const app = express();// Creating a server
const quizze = require('./db/quizee.js');
const PORT = 3000;

app.set("view engine", 'ejs');

// app.use(express.static('./public'))


app.get( "/", (req, res) => {
    res.send("Hello Coder")
})

app.get("/quize",(req, res) => {
    res.render(quizze)
})

app.listen( PORT, () => {
    console.log('server started....')
})