import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'
import Headers from './Headers'
import Row from './Row'

const columns = ["ID", "Name", "Age"]

const people = [
  {id:1, name: "Helle", age: 20 },
  {id:2, name: "Ib", age: 30 },
  {id:3, name: "Bodil", age: 40 },
  {id:4, name: "Yasmin", age: 32 },
];


function App() {
  

  return (
    <div className="App">
      <Table 
      headers= {<Headers columns={columns} />}
      rows= {
        people.map((person) => {
         return < Row row={[person.id.toString(), person.name, person.age.toString()]}/>
        } )
      }
      
      />
    </div>
  )
}

export default App
