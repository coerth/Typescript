import { useQuery} from '@apollo/client';
import {Person} from "../types/types"
import {GET_PEOPLE} from "../../graphql/query"
import DisplayPerson from './DisplayPerson';


const DisplayPeople = () => {
   
    
    const { loading, error, data } = useQuery(GET_PEOPLE);
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>;        
  
   return data.people.map((person: Person) => (
  
      <DisplayPerson person={person}/>
  
    ));
        }

export default DisplayPeople