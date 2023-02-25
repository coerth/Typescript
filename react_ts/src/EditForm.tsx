import React, { useEffect } from 'react'
import { postApi, putApi } from './Api'
import { Person } from './Types'

type Props = {
    person: Person
    people: Person[]
    setEditPerson: React.Dispatch<React.SetStateAction<Person>>
    setPeople: React.Dispatch<React.SetStateAction<Person[]>>
}

const EditForm: React.FC<Props> = ({person, setEditPerson, people, setPeople} ): JSX.Element => {

    useEffect(() => {

    }, [person] )

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let value = e.target.value
        if(e.target.id == "age")
        {
          let intValue = parseInt(value)
          setEditPerson({...person, [e.target.id]: intValue})
        }
        else{
            setEditPerson({...person, [e.target.id]: e.target.value})
        }
      }

      const PostPerson = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
            putApi(person)
            let index = people.findIndex((e) => e.id == person.id)
            

      }


  return (
    <div>
    <div>EditForm</div>
    <div>
      <form onSubmit={PostPerson}>
        <input id='name' type="text" placeholder='name'  defaultValue={person.name}  onChange={HandleChange} />
        <input id='age' type="text" placeholder='age' defaultValue={person.age}  onChange={HandleChange} />
        <input id='city' type="text" placeholder='city' defaultValue={person.city}  onChange={HandleChange} />
        <button type='submit'>Submit</button>
      </form>
      </div>
      </div>
  )


  
}

export default EditForm