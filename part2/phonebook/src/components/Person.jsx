const Person = ({person, deleteEntry}) => {
    return (
      <span>{person.name} {person.number} 
      <button onClick={deleteEntry} id={person.id}>delete</button><br/></span>
    )
  }

export default Person