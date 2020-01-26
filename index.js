const http = require("http"); //common js model,es6 supported by v13
const url=require("url");

const getQueryString=urlString=>{
    try{
        return url.parse(urlString,true).query;

    }catch(e){
        console.error(e);
        return {};
    }
};

//process has methods(of that module) ,properties,functions

http.
createServer((request,response)=>{
    //res.writeHead(200,{"Content-Type":"text/html"});
    response.writeHead(200,{"Content-Type":"application/json"});
    const queryObject=getQueryString(request.url);
    response.write(JSON.stringify(queryObject));
    response.end();
    //res.write("hello..");
    
})
.listen(8000);
//server will listen to request port

//wikipedia.com/books/?isbn=20034324