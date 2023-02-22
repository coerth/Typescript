import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'






function App() {

  return (
    <div className="App">
     
      <PeopleViewer/>
      
    </div>
  )
}

export default App

const PeopleViewer = (): JSX.Element => {
  type Person = {
    id: number,
    name: string,
    age: number,
    city: string
  }
const [people, setPeople] = useState<Person[]>()

useEffect(() => {
fetch("http://localhost:3008/person")
.then((res) => res.json())
.then((data) => setPeople(data))
}, [])


  return(
    <div>
      <table>
        <tr></tr>
      {people?.map( (person) => {
        return(
          <div className={person.name}>
            <p>{person.name}</p>

          </div>
        )
      } )}
      </table>
    </div>
  )


}