import express from "express";
import {getAddresses, getAddress, updateAddress ,deleteAddress, createAddress} from "../controllers/addressController"

const addressRouter = express.Router()

addressRouter.route("/").get(getAddresses).post(createAddress)
addressRouter.route("/:id").get(getAddress).patch(updateAddress).delete(deleteAddress)

export default addressRouter
