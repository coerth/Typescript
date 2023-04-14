import { Address, Args } from "../../types/types";
import AddressModel from "../../models/addressModel";

export default {
    createAddress: async (_parent:never, { input }:Args) => {
      if('street' in input){ // input is a Address
        let newAddress: Address = {
          street: input.street
        };
        let createdAddress = await AddressModel.create(newAddress)
        return createdAddress;
      } else {
        return null;
      }
    },
    deleteAddress: async (_parent:never, { id }:Args) => {
        let deletedAddress = await AddressModel.findByIdAndDelete(id)
        if (deletedAddress === null) {
          return false; // address not found
        }
        return true; // deletion successful
    },
    updateAddress: async (_parent: never, { id, input }:Args) => {
        if('street' in input){ // input is a Address
        let address = await AddressModel.findByIdAndUpdate(id, input, {
            new:true,
            runValidators: true
        })
        
          return address; // person not found
        }
    }
            
}