const fs = require('fs');
fs.copyFile('./img/pic1.jpg','./img/picture2.jpg', (err) => {
    if(err) throw (err);
    console.log("COPY HAS BEEN CREATED");
});
//****** FIRST// 
const request = require('request');
const Obj = require('./main.json');
array = [];

const push = array.push(Obj);
console.log(array);

const read = fs.createReadStream('./main.json');
  read.on("error", function(err) {
    done(err);
  });
const write = fs.createWriteStream('./main2.json');
write.on("error", function(err) {
  done(err);
}); 
read.pipe(write);
//*** SECOND//
const http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('Hello World!');
//   response.end();
// }).listen(8080);
// console.log('To start server, you have to tape localhost:8080');
//****THIRD //
http.createServer(function (request, response)  {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>16.01</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    response.write("<body><img src=\"img/picture1.jpg\"></body>");
    response.write("</html>");
    response.end();
  }).listen(8080);
//****THIRD AND HALF/