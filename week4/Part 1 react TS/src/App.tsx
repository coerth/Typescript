import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import EditForm from './EditForm'
import { Person } from './Types'
import { postApi } from './Api'

function App() {
  

  useEffect( () => {
  },[])

  return (
    <div className="App">
     
      <PeopleViewer/>
      

      
    </div>
  )
}

export default App



const PeopleViewer = (): JSX.Element => {


const [people, setPeople] = useState<Person[]>([])
const [newPerson, setNewPerson] = useState<Person>({id: 0, name: "", age: 0, city: ""})
const [showEdit, setShowEdit] = useState<boolean>(false)
const [editPerson, setEditPerson] = useState<Person>({id: 0, name: "", age: 0, city: ""})

const AddPerson = () => {

  let person: Person = {
    id:8000,
    name: "Morten",
    age: 10000,
    city: "Bagsværd"
  }

  setPeople([...people, person])
}

const RemoveLastPerson = () => {

  people?.pop()
  setPeople(people)
}

const NewPerson = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  postApi(newPerson)
  setPeople([...people, newPerson])
}

const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()
  let value = e.target.value
  if(e.target.id == "id" || e.target.id == "age")
  {
    let intValue = parseInt(value)
    setNewPerson({...newPerson, [e.target.id]: intValue})
  }
  else{
    setNewPerson({...newPerson, [e.target.id]: e.target.value})
  }
}

const SortByAge = () => {
  let sortedArray =  people?.sort((a, b) => (a.age > b.age) ? 1 : -1)
  console.log(sortedArray)
  setPeople(sortedArray)
}

const EditPerson = (e: React.MouseEvent<HTMLButtonElement>) => {
 let name: string = e.currentTarget.value
 console.log(name)
 let person = people.find( (e) => e.name == name )
 if(person != undefined)
 {
   setEditPerson(person)
   setShowEdit(true)
 }
}


useEffect(() => {
  if(people.length == 0)
  {
    fetch("http://localhost:3008/person")
    .then((res) => res.json())
    .then((data) => setPeople(data))
  }
  
}, [people, showEdit])

  return(

    <div>
    {showEdit && <EditForm person={editPerson} setEditPerson={setEditPerson} people={people} setPeople={setPeople}/>}

    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      {people?.map( (person) => {
        return(  
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.city}</td>
              <button onClick={EditPerson} value={person.name}>Edit</button>
            </tr>    
        )
      } )}
      </table>
      <button type='button' onClick={AddPerson} >Ny Person</button>
      <button type='button' onClick={RemoveLastPerson} >Fjern Sidste Person</button>
      <button type='button' onClick={SortByAge}>Sorter efter alder </button>
      <div>
      <form onSubmit={NewPerson}>
        <input id='id' type="text" placeholder='id' onChange={HandleChange} />
        <input id='name' type="text" placeholder='name'  onChange={HandleChange} />
        <input id='age' type="text" placeholder='age'  onChange={HandleChange} />
        <input id='city' type="text" placeholder='city'  onChange={HandleChange} />
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </div>
  )


  

}