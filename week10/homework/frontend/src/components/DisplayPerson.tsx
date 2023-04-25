import React from 'react'
import {Person} from "../types/types"



const DisplayPerson = ({person}: {person:Person}) => {
 
  return (
    <div className='person' key={person._id}>
    
    <h2>{person.name}</h2>
    <h3>{person.age}</h3>
    <h4>{person.address?.street}</h4>
    <br />
    
  </div>

  )
}

export default DisplayPerson