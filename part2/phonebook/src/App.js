import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567',
      id: 1
    }
  ]) 

  const [newEntry, setNewEntry] = useState({name: '', number: ''})
  const [newFilter, setNewFilter] = useState('')

  const nameDouble = persons.map(person => person.name).includes(newEntry.name) 
  const personsToShow = persons.filter(person => person.name.includes(newFilter))

  const addEntry = (event) => {
    event.preventDefault()
    if (nameDouble) {
      alert(`${newEntry.name} is already listed in Phonebook.`)
      setNewEntry({name: '', number: ''})
      return false
    }
    const personObject = {
      name: newEntry.name,
      number: newEntry.number,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewEntry({name: '', number: ''})
  }

  /*const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewEntry({name: event.target.value})
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewEntry({number: event.target.value})
  }*/

  const handleEntryChange = (event) => {
    setNewEntry(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        addEntry={addEntry} newEntry={newEntry} handleEntryChange={handleEntryChange} />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App