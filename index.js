const express = require('express');

const master = express()

master.use(express.json())

const PORT = process.env.PORT || 3001

master.get('/', function (req, res) {
    res.send("<h2>welcome to REST API<h2>").end()
})

master.get('/home', function (req, res) {
    res.send("<h2>Welcome To home Page<h2>").end()
})

master.listen(PORT,()=>console.log("server running..."))