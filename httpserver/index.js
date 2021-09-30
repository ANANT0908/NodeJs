const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`,"utf-8");
    const objData = JSON.parse(data);

    // console.log(req.url);
    if(req.url === "/"){
        res.end('Hello from the Home side');
    }
    else if(req.url === "/about"){
        res.end('Hello from the About side');
    }
    else if(req.url === "/userapi"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(objData[5].login);
    }
    else{
        res.writeHead(404 ,{"Content-types" : "text/html"});
        res.end("<h1>404 Error</h1>")
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listning to port 8000');
});