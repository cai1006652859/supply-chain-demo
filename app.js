// app.js
const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    //password: 's3cr3t'    
    if(req.params.password === 's3cr3t'){
        return res.send('Authorized')
    }
  res.send('pong')
})

app.listen(3000)
