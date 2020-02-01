const http = require("http"); //common js model,es6 supported by v13
const getQueryString=require("./getQueryString");

//process has methods(of that module) ,properties,functions
console.log("hi");


http.
createServer((request,response)=>{
    //res.writeHead(200,{"Content-Type":"text/html"});
    response.writeHead(200,{"Content-Type":"application/json"});//MIME TYPE
    const queryObject=getQueryString(request.url);
    response.write(JSON.stringify(queryObject));
    response.end();
    //res.write("hello..");
    
})
//console.log("wait");
.listen(8080);
//server will listen to request port

//wikipedia.com/books/?isbn=20034324