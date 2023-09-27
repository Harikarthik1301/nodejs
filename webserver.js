const { log, error } = require('console');
const http = require('http')
const PORT = 7777
const fs = require('fs')

const webserver = http.createServer((req,res)=>{
 res.writeHead(200,{'Content-Type':'text/html'})
 fs.readFile('index.html',(error,data)=>{
 if (error){
    res.writeHead(404)
    res.write('Page Not Found')
 }
 else{
   res.write(data)
 }
 res.end()
 })
})

webserver.listen(PORT,(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('server running on port : '+ PORT);
    }
})