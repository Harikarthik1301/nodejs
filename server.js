console.log("hey there, i am harikarthik, this the node practice");
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

const fspromises = require('fs').promises;
const path = require('path');

 const filesystem = async () =>{
   try{
    const data =  await fspromises.readFile(path.join(__dirname,'files','start.txt'),'utf8')
        console.log(data)
    await fspromises.writeFile(path.join(__dirname,'files','vasa.txt'),'vasanth is the marvelous boy in the bca shift 2 of the srcas',
        console.log("write1 completed")
    )
    await fspromises.writeFile(path.join(__dirname,'files','lufffy.txt'),'Monkey D Luffy is the pirate known as King Of Pirates in the anime called one peice.',
        console.log("write2 completed")
    )
    await fspromises.appendFile(path.join(__dirname,'files','lufffy.txt'),'\nMonkey D Luffy has two friends us his subordinates called zoro and sanji.',
        console.log("apppend completed")
    )
   await fspromises.rename(path.join(__dirname,'files','lufffy.txt'),(path.join(__dirname,'files','Onepeice1.txt')),
       console.log("Rename completed")
    )
    await fspromises.unlink(path.join(__dirname,'files','Onepeice1.txt'),
       console.log("Delete completed")
    )
   } catch(err){
    console.error(err);
   }
 }
//function call
filesystem();

process.on('uncaughtException',err =>{
    console.error(`uncaught error :${err}`);
    process.exit(1);
})
