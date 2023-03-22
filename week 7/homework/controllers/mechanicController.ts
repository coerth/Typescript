import { Request, Response } from "express";
import Mechanic from "../models/mechanicModel";

export const getMechanics = async (req: Request, res: Response) => {

    let queryObj = req.query;
    console.log(queryObj)
    const data = await Mechanic.find(queryObj)
    res.status(200)
    .header({
        "Content-type": "application/json",
        "Content-length": data.length,
    })
    .json({
        status: "success",
        length: data.length,
        mechanics: data
    })
};

export const getMechanic = async (req: Request, res: Response) => {

    
    const data = await Mechanic.findById(req.params.id)
    try{
        res.status(200)
            .json({
                status: "success",
                mechanic: data
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

export const updateMechanic = async (req: Request, res: Response) => {

    
    try{
        const mechanic = Mechanic.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                mechanic: mechanic,
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

export const deleteMechanic = async (req: Request, res: Response) => {

    
    try{
        await Mechanic.findByIdAndDelete(req.params.id)


        res.status(204)
            .json({
                status: "success",
                message: "Mechanic Deleted"
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

export const createMechanic = async (req: Request, res: Response) => {
    try{

        const jsonData = req.body;
        
        const newMechanic = await Mechanic.create(jsonData)
    
        res.status(201)
            .json({
                status: "success",
                Mechanic: newMechanic
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