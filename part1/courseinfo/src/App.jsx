const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].part} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].part} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].part} exercises={props.course.parts[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  let total = 0
  props.course.parts.forEach( value => {
    total += value.exercises}
  )
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React', exercises: 10
    },
    {
      name: 'Using props to pass data', exercises: 7
    },
    {
      name: 'State of a component', exercises: 14
    },
  ]
}

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App