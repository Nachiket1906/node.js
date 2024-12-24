var http = require('http')  // http is core module

var a = 10
var b = 20
var c = a + b
var msg
if(c==30){
    msg = "sum is 30"
}
else{
    msg="sum is not 30";
}





http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":'text/html'})
    res.write("A value is"+ a);
    res.write("<br> b value is<br/>" +b );
    res.write('<b>sum is ${a+b} </b>');
    res.end ("<br/>"+msg+"done");
}).listen(4000);
console.log("server is started http://127.0.0.1:4000");

    
   