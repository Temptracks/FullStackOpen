import React from "react";

const PersonForm = (props) => {
    return (
      <form onSubmit={props.addEntry}>
        <div>
          name: <input name='name' value={props.newEntry.name} onChange={props.handleEntryChange}/>
        </div>
        <div>
          number: <input name='number' value={props.newEntry.number} onChange={props.handleEntryChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
  }

export default PersonForm