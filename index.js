const http = require("http");
const fs=require("fs");

const myServer = http.createServer((req,res)=>{
    //console.log(req.headers);
    //console.log("New Request Recieved");
    const log =`${Date.now()}:${req.url}}: New Request Recieved \n`;
    //non-blocking
    fs.appendFile('log.txt',log,(err,data)=>{
        //res.end("Hello from Server Again");
        switch(req.url)
        {
            case '/': res.end("Home Page");
            break;
            case '/about' : res.end('I am Shakuntala');
            break;
            default:
            case '' : res.end("404 Not found!!!!");
        }
    })
    
   
});

myServer.listen(8000,() =>console.log("Server started!!!"));