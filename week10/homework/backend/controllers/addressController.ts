import { Request, Response } from "express";
import Address from "../models/addressModel";
import catchAsync from "../utility/CatchAsync"


export const getAddresses = catchAsync( async (req: Request, res: Response) => {

    let queryObj = req.query;
    const data = await Address.find(queryObj)
    res.status(200)
    .header({
        "Content-type": "application/json",
        "Content-length": data.length,
    })
    .json({
        status: "success",
        length: data.length,
        addresses: data
    })
});

export const getAddress = catchAsync( async (req: Request, res: Response) => {

    
    const data = await Address.findById(req.params.id)
    
        res.status(200)
            .json({
                status: "success",
                address: data
            })
    
    
});

export const updateAddress = catchAsync( async (req: Request, res: Response) => {

        const address = Address.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                Address: address
            })
    
})

export const deleteAddress = catchAsync( async (req: Request, res: Response) => {

        await Address.findByIdAndDelete(req.params.id)


        res.status(204)
            .json({
                status: "success",
                message: "Address Deleted"
            })
    
})

export const createAddress = catchAsync( async (req: Request, res: Response) => {

        const jsonData = req.body;
        
        const newAddress = await Address.create(jsonData)
    
        res.status(201)
            .json({
                status: "success",
                Address: newAddress
            })
})