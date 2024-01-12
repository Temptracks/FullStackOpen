import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const Statistics = (props) => {
  if (props.total === 0) {
    return (<p>No feedback given</p>)
  }
  
  return (
      <table>
        <tbody>
          <StatisticLine text='good: ' value={props.good}/>
          <StatisticLine text='neutral: ' value={props.neutral}/>
          <StatisticLine text='bad: ' value={props.bad}/>
          <StatisticLine text='all: ' value={props.total}/>
          <StatisticLine text='average: ' value={props.average}/>
          <StatisticLine text='positive: ' value={props.posPercentage}/>
        </tbody>
      </table>
      )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [posPercentage, setPosPercentage] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    const newTotal = total + 1
    setTotal(newTotal)
    setAverage((newGood - bad)/newTotal)
    setPosPercentage(newGood/newTotal)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    const newTotal = total + 1
    setTotal(newTotal)
    setAverage((good - bad)/newTotal)
    setPosPercentage(good/newTotal)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newTotal = total + 1
    setTotal(newTotal + 1)
    setAverage((good - newBad)/newTotal)
    setPosPercentage(good/newTotal)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good'>good</Button>
      <Button onClick={handleNeutralClick} text='neutral'>neutral</Button>
      <Button onClick={handleBadClick} text='bad'>bad</Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} posPercentage={posPercentage}/>
    </div>
  )
}

export default App