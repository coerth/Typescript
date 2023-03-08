import * as dotenv from "dotenv";
import * as http from "http";
import url from "url"
import logger from "./utility/logger"
import fs from "fs"

const data = fs.readFileSync(`${__dirname}/../data.json`, 'utf-8');




dotenv.config({path: '../config.env'})

console.log(process.env.PORT)
console.log(process.env.HOSTNAME)

const server = http.createServer((req, res) => {
    
    const {query, pathname, path, href, search} = url.parse(req.url!, true)
    
    //set response header
   
    console.log(pathname)
    
    if(pathname === "/")
    {
        
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("Hello World");
    }
    else if (pathname === "/about")
    {
        res.writeHead(200, {"Content-Type": "text/html"}); 
        res.end("<h1>About</h1>");
    }
    else if (pathname === "/name")
    {
        console.log(search)
        console.log(query)

    }

    else if (pathname === "/data")
    {
        res.writeHead(200, {"Content-Type": "application/json"}); 
        res.end(data);

    }

    else if (pathname === "/date")
    {
        res.writeHead(400, {"Content-Type": "text/html"}); 
        console.log(search)
        console.log(query)
        res.end(`${query.year},${query.month}, ${query.day}`);


    }
    else{
        res.writeHead(400, {"Content-Type": "text/html"}); 
        logger.warn("No path found")
        res.end(`${path} could not be found stupid`);


    }
})

server.listen({
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    exclusive: true,
}, () => {
    console.log(`Server is listening to http://localhost:${process.env.PORT}`)
    logger.info("Ost")
})