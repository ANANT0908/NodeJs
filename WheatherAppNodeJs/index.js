const http = require("http");
const fs  = require("fs");
var requests = require("requests");


const homeFile = fs.readFileSync("home.html" , "utf-8");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        requests("api.openweathermap.org/data/2.5/weather?q=Pune&appid=5986421679d9ca12f0d931d2bc11d500")
        .on("data", (chunks)=>{
            console.log(chunks);
        })
        .on("end" , (err)=>{
            if(err) return console.log("Connection Error");

            console.log("end");
        })
    }
});

server.listen(8000 , "127.0.0.1")