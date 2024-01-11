import { useState } from 'react'

/* const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
} */

const Statistics = (props) => {
  if (props.total === 0) {
    return (<p></p>)
  }
  return (<p> good: {props.good}<br/>
      neutral: {props.neutral}<br/>
      bad: {props.bad}<br/>
      all: {props.total}<br/>
      average: {props.average}<br/>
      positive: {props.posPercentage}
  </p>)
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
      <button onClick={handleGoodClick} text='good'>good</button>
      <button onClick={handleNeutralClick} text='neutral'>neutral</button>
      <button onClick={handleBadClick} text='bad'>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} posPercentage={posPercentage}/>
    </div>
  )
}

export default App