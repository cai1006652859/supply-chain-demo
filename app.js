// app.js
const express = require('express')
const app = express()
    const password= 's3cr3t'    
    const pi_key="1234-1234-1234-1234"
    const api_key="1234-1234-1234-1234"
    const token = "ghp_123456789012345678901234567890123456"
app.get('/ping', (req, res) => {
    password= 's3cr3t'    
    api_key="1234-1234-1234-1234"

    const token = "ghp_123456789012345678901234567890123456"
    


    if(req.params.password === 's3cr3t'){
        return res.send('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTYyMzkwMjJ9.Pd8aR5k7890sdfghjklPOIUYTREWQAZXCVBNMasdfghjklzxcvbnm1234567890qwertyuiop')
    }
    if(req.params.password === 'admin'){
        return res.send('sk_test_51H7890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890.eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTYyMzkwMjJ9.Pd8aR5k7890sdfghjklPOIUYTREWQAZXCVBNMasdfghjklzxcvbnm1234567890qwertyuiop')
    }
    if(req.params.password === '1qaz2wsxE'){
        return res.send(`-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDQENn2zQ8v8fX7890abcdefghijklmnopqrstuvwxyzABCDEFG
HIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHI
JKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJK
LQIDAQABAoGBAM+890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRST
UVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV
WXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW
FAgMBAAECgYEA9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONML
KJIHGFEDCBA1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ
RSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRS
TUVWECQQD1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRS
TUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTU
VWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW
EFAgRAoGAE7890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX
YZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123
AQAB
-----END RSA PRIVATE KEY-----`)
    }
  res.send('pong')
})

app.listen(3000)
