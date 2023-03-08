import express = require("express")
import morgan = require("morgan");
import fs from "fs"
import { nextTick } from "process";

const app = express()

if(process.env.NODE === "development")
{
    app.use(morgan("dev"))
    console.log("Development Mode")
}

app.use(express.json()); //Body parser for JSON data
app.use(express.static("../express-server/public")) //statiske html filer. kan findes ligesom http://localhost:3000/homepage.html


// Middleware
 app.use((req, res, next) => {
    console.log("Hello from the middleware")
    next()
}) 

app.use((req, res, next) => {
    //@ts-ignore
    req["requestTime"] = new Date().toISOString()
    next()
})


//Part 1 Hello World
app.get("/", (req, res) => {
    //@ts-ignore
    const date: any = req.requestTime;
    res.status(200)
    .json({
        status: "success",
        message: date
    })
});

//Part 2 Hello World with param
app.get("/hello/:name", (req, res) => {
    res.status(200)
    .json({
        status: "success",
        message: `Hello ${req.params.name}`
    })
});

//Part 3 Hello World with query
app.get("/hello", (req, res) => {
    res.status(200)
    .json({
        status: "success",
        message: `Hello ${req.query.name || "World"}`

    })
});

//Part 4 error
app.get("/error", (req, res) => {
    try{
        throw new Error("AAAAAARGH")
        res.status(200)
        .json({
            status: "success",
            message: "Hello World from express"
        })
    }
    catch (e: any)
    {
        res.status(400)
        .json({
            status: "fail",
            message: e.message
        })
    }
});

//Part 5 Json Data
app.get("/data", (req, res) => {

    const data = fs.readFileSync("../express-server/data.json", 'utf-8');

    res.status(200)
    .header({
        "Content-type": "application/json",
        "Content-length": data.length,
    })
    .json({
        status: "success",
        message: JSON.parse(data)
    })
});

//Part 6 Json Data
app.post("/", (req, res) => {

    const jsonData = req.body

    res.status(201)
    .json( {
        status: "success",
        data: jsonData
    })
})



app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000")
})