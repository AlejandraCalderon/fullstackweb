
const App = () => {

  const course = {
    name : 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const Content = (props) =>{
    return (
      <div>
        <h1>!Welcome to course, {props.name} ¡ </h1>
        <p>
          <ul>
          {props.parts.map((part) => (
          <><li>{part.name}</li><li>{part.exercises} </li></>
          ))}
          </ul>
        </p>
      </div>
    )
  }
  
  return(
    <div>
      <Content name={course.name} parts={course.parts} />
    </div>
  )
}

export default App
