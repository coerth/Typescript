import { useQuery} from '@apollo/client';
import {Address, Person} from "../types/types"
import {GET_ADDRESSES} from "../../graphql/query"
import DisplayAddress from './DisplayAddress';


const DisplayAddresses = () => {
   
    
    const { loading, error, data } = useQuery(GET_ADDRESSES);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;        
  
   return data.addresses.map((address: Address) => (
  
      <DisplayAddress address={address}/>
  
    ));
        }

export default DisplayAddresses