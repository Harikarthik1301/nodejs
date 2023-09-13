console.log("hey there i am harikarthik this the node practice");
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

const fs = require('node:fs');
const path = require('path');

 
fs.readFile(path.join(__dirname,'files','start.txt'),'utf8',(err,data)=>{
    if (err) throw err
    console.log(data);
});

process.on('uncaughtException',err =>{
    console.error(`uncaught error :${err}`);
    process.exit(1);
})

fs.writeFile(path.join(__dirname,'files','vasa.txt'),'vasanth is the marvelous boy in the bca shift 2 of the srcas',(err,data)=>{
    if (err) throw err
    console.log("completed");
});