import { Request, Response } from "express";
import MechanicModel from "../models/mechanicModel";
import catchAsync from "../utility/CatchAsync"

export const getMechanics = catchAsync( async (req: Request, res: Response) => {

    let queryObj = req.query;
    const data = await MechanicModel.find(queryObj)
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
});

export const getMechanic = catchAsync( async (req: Request, res: Response) => {

    
    const data = await MechanicModel.findById(req.params.id)

    res.status(200)
            .json({
                status: "success",
                mechanic: data
            })
});

export const updateMechanic = catchAsync( async (req: Request, res: Response) => {


        const mechanic = MechanicModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                mechanic: mechanic,
            })
    
})

export const deleteMechanic = catchAsync( async (req: Request, res: Response) => {

    

        await MechanicModel.findByIdAndDelete(req.params.id)


        res.status(204)
            .json({
                status: "success",
                message: "Mechanic Deleted"
            })
    
})

export const createMechanic = catchAsync( async (req: Request, res: Response) => {

        const jsonData = req.body;
        
        const newMechanic = await MechanicModel.create(jsonData)
    
        res.status(201)
            .json({
                status: "success",
                Mechanic: newMechanic
            })    
})