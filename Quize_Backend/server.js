const express = require('express');

const app = express();// Creating a server

const PORT = 3000;
/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

app.get( "/", (req, res) => {
    res.send("Hello Coder")
})

app.listen( PORT, () => {
    console.log('server started....')
})