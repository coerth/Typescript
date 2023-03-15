import { Request, Response } from "express";
import fs from "fs"
import Car from "../models/carModel";

interface Car {
    id:string;
    model: string;
    year: number;
    price: number;
    color: string;

    [key: string]: any;

}

const cars: Car[] = [
    {
      "id": "1",
      "model": "Audi",
      "year": 2010,
      "price": 10000,
      "color": "red"
    },
    {
      "id": "2",
      "model": "Volvo",
      "year": 2012,
      "price": 12000,
      "color": "blue"
    },
    {
      "id": "3",
      "model": "Saab",
      "year": 2001,
      "price": 5000,
      "color": "green"
    },
    {
      "id": "4",
      "model": "BMW",
      "year": 2015,
      "price": 15000,
      "color": "black"
    },
    {
      "id": "5",
      "model": "Mercedes",
      "year": 2017,
      "price": 20000,
      "color": "red"
    }
  ]


export const getAllCars = async (req: Request, res: Response) => {

    
    const data = await Car.find()

    res.status(200)
        .json({
            status: "success",
            cars: data
        })
};

export const getCar = async (req: Request, res: Response) => {

    
    const data = await Car.findById(req.params.id)
    try{
        res.status(200)
            .json({
                status: "success",
                cars: data
            })
    }
    catch(err)
    {
        res.status(400)
        .json({
            status: "failed",
            cars: err
        })
    }
};

export const updateCar = async (req: Request, res: Response) => {

    
    try{
        const car = Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })


        res.status(200)
            .json({
                status: "success",
                car: car
            })
    }
    catch(err)
    {
        res.status(400)
        .json({
            status: "failed",
            cars: err
        })
    }
}

export const deleteCar = async (req: Request, res: Response) => {

    
    try{
        await Car.findByIdAndDelete(req.params.id)


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
            cars: err
        })
    }
}

export const createACar = async (req: Request, res: Response) => {
    try{

        const jsonData = req.body;
        //cars.push(jsonData)
    
        const newCar = await Car.create(jsonData)
    
        console.log()
        res.status(201)
            .json({
                status: "success",
                car: newCar
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