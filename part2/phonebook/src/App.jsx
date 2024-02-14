import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/person'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setError] = useState(false)

  useEffect(() => {
    personService.getAll()
  .then(actualPersons => {
    setPersons(actualPersons)
  })
}, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filter = event.target.value
    setNewFilter(filter)
  }
  
  const handleClick = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to the phonebook\n Do you want to change the old number with a new one?`)){
        const person = persons.find(p => p.name === newName)
        const changedPerson = {...person, number: newNumber}
        personService.update(changedPerson.id, changedPerson).then((returnedPerson) => {
          setPersons(persons.map(p => (p.id !== changedPerson.id ? p : returnedPerson)))
          setNewName('')
          setNewNumber('')
          setError(false)
          setMessage(
            `Successfully changed ${changedPerson.name}'s number.`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          })
          .catch(error => {
            setError(true)
            setMessage(
              `Information of ${changedPerson.name} has already been removed from the server.`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {      
      const newPersonObject = {name: newName, number: newNumber, id:(persons.length + 1).toString()}

      personService.create(newPersonObject).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setError(false)
        setMessage(
          `Successfully added ${newPersonObject.name}.`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        })
    }
  }

  const deleteEntry = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    
    if (window.confirm(`Do you want to delete '${personToDelete.name}'`)) {
      personService.deleteEntry(personToDelete.id).then((response) => {
        setPersons(persons.filter(person => person.id != personToDelete.id))
        setNewName('')
        setNewNumber('')
        setError(false)
        setMessage(
          `Successfully deleted ${personToDelete.name}.`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  return (
    <div>
      <Notification message={message} style={isError} />
      <h2>Phonebook</h2>
        <Filter newFilter = {newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new number</h2>
        <PersonForm handleClick = {handleClick} newName = {newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      
        <Persons newFilter={newFilter} persons={persons} deleteEntry={() => deleteEntry(event.target.id)}/>
    </div>
  )
}

export default App