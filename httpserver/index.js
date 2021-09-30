const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/"){
        res.end('Hello from the Home side');
    }
    else if(req.url === "/about"){
        res.end('Hello from the About side');
    }
    else if(req.url === "/contact"){
        res.end('Hello from the Contact us side');
    }
    else{
        res.writeHead(404 ,{"Content-types" : "text/html"});
        res.end("<h1>404 Error</h1>")
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listning to port 8000');
});