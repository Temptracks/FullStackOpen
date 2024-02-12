import Person from "./Person"

const Persons = ({newFilter, persons, deleteEntry}) => {
    return (
      persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase())).map(person => <Person key={person.id} person={person} deleteEntry={deleteEntry}/>)
    )
  }

export default Persons