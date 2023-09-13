const fs = require('fs')
const path = require('path')

const rs = fs.createReadStream(path.join(__dirname,'files','bigfile.txt'))
const ws = fs.createWriteStream(path.join(__dirname,'files','new_bigfile.txt'))

rs.on ('data',(datachunk)=>{
    ws.write(datachunk)
})

rs.pipe(ws)