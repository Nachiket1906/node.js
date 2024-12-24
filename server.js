var http = require('http')  // http is core module

http.createServer((req,res)=>{
    res.end("<h1> hello peoples </h1>")
}).listen(4001)
console.log("Server is started on https://127.0.0.1:4001")

