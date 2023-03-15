import express = require("express");
import { getAllCars, createACar, getCar, deleteCar, updateCar } from "../controllers/carController";

const carRouter = express.Router()

carRouter.route("/").get(getAllCars).post(createACar)
carRouter.route("/:id").get(getCar).patch(updateCar).delete(deleteCar)

export default carRouter
