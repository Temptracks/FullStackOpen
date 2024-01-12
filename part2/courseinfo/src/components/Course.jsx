const CourseHeader = ({name}) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const CoursePart = ({part}) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
  }
  
  const CourseTotal = ({course}) => {
    const total = course.parts.reduce((acc,cur)=>acc+cur.exercises,0)
    return (
      <p>total of {total} exercises</p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <CourseHeader name={course.name} />
        {course.parts.map(part => <CoursePart key={part.id} part={part}/>)}
        <CourseTotal course={course}/>
      </div>
    )
  }
  
  export default Course