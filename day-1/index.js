console.log("hello node js");

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("HELLO WORLD");
  })
  .listen(8080); //3000 -10000
console.log("App runnimg on port  8080");
// write a js funcction that uses os module to get your computer in gb

const os = require("os");
function memory(){


const totalMem=os.totalmem();
const gb=totalMem/(1024*1024*1024);

return gb;
}
const totalMemory= memory();
console.log("total memory in gb is "+totalMemory);
// wap that reads the content of the text file using fs
const fs=require("fs");


      const fileOpen=fs.readFileSync("./hello.txt",{ encoding: "utf-8" });
console.log(fileOpen);