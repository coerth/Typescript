import './App.css'
import CreateAddress from './components/CreateAddress'
import CreatePerson from './components/CreatePerson'
import DisplayAddresses from './components/DisplayAddresses'
import DisplayPeople from './components/DisplayPeople'




function App() {
  return (
    <>
     <div>
     <h2>My first Apollo app 🚀</h2>
     <CreatePerson/>
     <DisplayPeople/>
      </div>
      
    </>
  )
}

export default App
