import express = require("express")
import morgan = require("morgan");
import fs from "fs"
import {Person} from "../Types"

const app = express()

if(process.env.NODE === "development")
{
    app.use(morgan("dev"))
    console.log("Development Mode")
}

app.use(express.json()); //Body parser for JSON data


app.get("/", (req, res) => {
    res.status(200)
    .json({
        status: "success",
        message: "Hello World"
    })
})

app.get("/people", (req, res) => {

    const data = fs.readFileSync("./people.json", 'utf-8');

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

app.get(("/people/:id"), (req, res) => {
    const id = +req.params.id
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)
    const person = info.person.find((person: {id: Number;}) => person.id === id )
    res.send(person)
})

app.post("/people", (req, res) => {

    const jsonData = req.body
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)

    info.person.push(jsonData)
    
    fs.writeFile("./people.json", JSON.stringify(info, null, 1), err => {
        if (err) throw err;
        res.status(201).send("New Person Added")
    })

})

app.put(("/people/:id"), (req, res) => {
    const id = +req.params.id
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)
    const index = info.person.findIndex((person: {id: Number;}) => person.id === id )
    let newPerson = req.body
    info.person[index] = newPerson

    if(info.person[index] == newPerson)
    {
        fs.writeFile("./people.json", JSON.stringify(info, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person Modified")
        })
    }
})

app.patch(("/people/:id"), (req, res) => {
    const id = +req.params.id
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)
    const index = info.person.findIndex((person: {id: Number;}) => person.id === id )
    let newPerson = req.body

    if(newPerson.name != undefined)
    {
        info.person[index].name = newPerson.name
    }

    if(newPerson.age != undefined)
    {
        info.person[index].age = newPerson.age
    }

    if(newPerson.city != undefined)
    {
        info.person[index].city = newPerson.city
    }
    
        fs.writeFile("./people.json", JSON.stringify(info, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person Modified")
        })
    
})

app.delete(("/people/:id"), (req, res) => {
    const id = +req.params.id
    const data = fs.readFileSync("./people.json", 'utf-8');
    const info = JSON.parse(data)
    const index = info.person.findIndex((person: {id: Number;}) => person.id === id )

    let deleted = info.person.splice(index, 1)
    console.log(deleted)

    fs.writeFile("./people.json", JSON.stringify(info, null, 1), err => {
            if (err) throw err;
            res.status(201).send("Person Deleted")
        })

})

app.listen(3000, () => {
    console.log(`Server is listening to http://localhost:3000`)
})