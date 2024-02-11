import Person from "./Person"

const Persons = ({filtered, newFilter, persons}) => {
    if (!filtered) {
      return (
        persons.map(person => <Person key={person.id} person={person}/>)
      )
    }
    return (
      persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <Person key={person.id} person={person}/>)
    )
  }

export default Persons