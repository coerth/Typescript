import { Request, Response } from "express";
import PersonModel from "../models/personModel";
import catchAsync from "../utility/CatchAsync"


export const getPeople = catchAsync( async (req: Request, res: Response) => {

    let queryObj = req.query;
    const data = await PersonModel.find(queryObj)
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
});

export const getPerson = catchAsync( async (req: Request, res: Response) => {

    
    const data = await PersonModel.findById(req.params.id)
    
        res.status(200)
            .json({
                status: "success",
                person: data
            })
    
    
});

export const updatePerson = catchAsync( async (req: Request, res: Response) => {

        const person = PersonModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                person: person
            })
    
})

export const deletePerson = catchAsync( async (req: Request, res: Response) => {

        await PersonModel.findByIdAndDelete(req.params.id)


        res.status(204)
            .json({
                status: "success",
                message: "Person Deleted"
            })
    
})

export const createPerson = catchAsync( async (req: Request, res: Response) => {

        const jsonData = req.body;
        
        const newPerson = await PersonModel.create(jsonData)
    
        res.status(201)
            .json({
                status: "success",
                Person: newPerson
            })
})