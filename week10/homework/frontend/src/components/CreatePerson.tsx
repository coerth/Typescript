import React from 'react'
import {useState} from "react"
import { CREATE_PERSON} from "../../graphql/mutation"
import { gql, useMutation } from '@apollo/client';
import { GET_PEOPLE } from '../../graphql/query';



const CreatePerson = () => {
    const [person, setPerson] = useState({name: "", age: 0 });
    
    const [mutateFunction, { data, loading, error }] = useMutation(CREATE_PERSON,{
        refetchQueries: [GET_PEOPLE]
    }); //mutateFunction is the function to call for server update. refetchQueries is the list of queries to refetch after the mutation is done. And if they were used with useQuery, they will be updated with the new data.
    if (loading) return <>'Submitting...'</>;
    if (error) return <>`Submission error! ${error.message}`</>;

    const createNewPerson = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutateFunction({variables: { input: person }}); 
    }
  return (
    <div>
        <form onSubmit={createNewPerson}>
        <br/>
        <label>
        <input type="text" name="name" placeholder='name' value={person.name} onChange={(evt)=>{setPerson({...person, name:evt.target.value})}}/>
        </label>
        <br/>
        <label>
        <input type="number" name="age" placeholder='age' value={person.age} onChange={(evt)=>{setPerson({...person, age: parseInt(evt.target.value) })}}/>
        </label>
        <input type="submit" value="Add new Person" />
    </form>
    </div>
  )
}

export default CreatePerson