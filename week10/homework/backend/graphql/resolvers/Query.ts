// import { books, categories } from '../data';
import { Person, Args, Address } from "../../types/types";
import PersonModel from '../../models/personModel';
import AddressModel from '../../models/addressModel';
import MechanicModel from '../../models/mechanicModel';



export default {
    people: async (_parent:never, _args:Args) => PersonModel.find(),
    addresses: async (_parent:never, _args:Args) => AddressModel.find(),
    mechanics: async (_parent:never, _args:Args) => MechanicModel.find(),
    person: async  (_parent:never, { id }:Args) => PersonModel.findById(id),
    address: async (_parent:never, { id }:Args) => AddressModel.findById(id),
    mechanic: async (_parent:never, { id }:Args) => MechanicModel.findById(id)
}