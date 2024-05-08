const http = require('http');
const fs = require('fs'); 

const hostname = "127.0.0.1";
const port = 3000;


//crreate new file
fs.writeFile('tiago.txt','code test', function(err){
    if(err) throw err;
console.log("the file was created!!")
})

//create new file or insert a new one after the existing one
fs.appendFile('tiago.txt',"\nthis is a new file",(err)=>{
    if (err) throw err;
    console.log('add a new file')
})

const server = http.createServer((req,res) =>{
    if(req.url == '/tiago'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
        }else {
            //return res.end();
        }
    })

    server.listen(port.hostname,()=>{
        console.log("🚀🚀 Server is working! 🚀🚀")
    })