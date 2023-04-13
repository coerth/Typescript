// import { books, categories } from '../data';
import { Person, Args, Address } from "../types/types";
import PersonModel from '../models/personModel';
import AddressModel from '../models/addressModel';
export default {
    // books: (parent, args, context) => books,
    people: async (_parent:never, _args:Args) => PersonModel.find(),
    addresses: async (_parent:never, _args:Args) => AddressModel.find(),
    person: async  (_parent:never, { id }:Args) => PersonModel.findById(id),
    address: (_parent:never, { id }:Args) => AddressModel.findById(id),
}