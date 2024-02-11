import Person from "./Person"

const Persons = ({/*filtered,*/ newFilter, persons}) => {
    return (
      persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <Person key={person.id} person={person}/>)
    )
  }

export default Persons