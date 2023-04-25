import React from 'react'
import {Address} from "../types/types"



const DisplayAddress = ({address}: {address:Address}) => {
 
  return (
    <div className='address' key={address._id}>
    <h4>{address?.street}</h4>
    <br />
    
  </div>

  )
}

export default DisplayAddress