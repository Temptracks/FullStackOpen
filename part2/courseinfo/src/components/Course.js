import React from 'react'

const Total = ({ parts }) => {
    const total = parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
    return (
      <p>total of {total} exercises</p>
    )
  }

const Course = ({ course }) => {
    return (
      <div>
        <h1>
          {course.name}
        </h1>
        <div>
          {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course