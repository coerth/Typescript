import { Address, Args } from "../../types/types";
import AddressModel from "../../models/addressModel";

export default {
    createAddress: async (_parent:never, { input }:Args) => {
      if('street' in input){ // input is a Book
        let newAddress: Address = {
          street: input.street
        };
        let createdAddress = await AddressModel.create(newAddress)
        return createdAddress;
      } else {
        return null;
      }
    }
}