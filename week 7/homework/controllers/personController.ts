import { Request, Response } from "express";
import Person from "../models/personModel";

export const getPeople = async (req: Request, res: Response) => {

    const data = await Person.find()

    res.status(200)
    .header({
        "Content-type": "application/json",
        "Content-length": data.length,
    })
    .json({
        status: "success",
        length: data.length,
        people: data
    })
};

export const getPerson = async (req: Request, res: Response) => {

    
    const data = await Person.findById(req.params.id)
    try{
        res.status(200)
            .json({
                status: "success",
                person: data
            })
    }
    catch(err)
    {
        res.status(400)
        .json({
            status: "failed",
            error: err
        })
    }
};

export const updatePerson = async (req: Request, res: Response) => {

    
    try{
        const person = Person.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                person: person
            })
    }
    catch(err)
    {
        res.status(400)
        .json({
            status: "failed",
            error: err
        })
    }
}

export const deletePerson = async (req: Request, res: Response) => {

    
    try{
        await Person.findByIdAndDelete(req.params.id)


        res.status(204)
            .json({
                status: "success",
                message: "Car deleted"
            })
    }
    catch(err)
    {
        res.status(400)
        .json({
            status: "failed",
            error: err
        })
    }
}

export const createPerson = async (req: Request, res: Response) => {
    try{

        const jsonData = req.body;
        
    
        const newPerson = await Person.create(jsonData)
    
        console.log()
        res.status(201)
            .json({
                status: "success",
                Person: newPerson
            })
    }
    catch(err)
    {
        res.status(400)
            .json({
                status: "failed",
                error: err
            })
    }
}