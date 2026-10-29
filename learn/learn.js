const http=require("http")

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("content-Type","text/plain");
    res.end("welcome to the node.js");
});

server.listen(3000, () =>{
    console.log(
        "server is runing on http://localhost:3000");
});

