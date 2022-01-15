import React, {useState } from 'react'

const Button = ({handleClick, text}) => {
  
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({header}) => {
  return (
    <h1>{header}</h1>
  )
}

const StatisticLine = ({text, rating, sum}) => {
  if (text === 'Positive') {
    return (
      <tr>
      <td>{text}</td>
      <td>{rating}%</td>
    </tr>
    )
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{rating}</td>
    </tr>
  )
}

const Statistic = ({good, neutral, bad, sum}) => {
  if (sum === 0) {
    return <p>No feedback given.</p>
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' rating={good} sum={sum} />
          <StatisticLine text='Neutral' rating={neutral} sum={sum} />
          <StatisticLine text='Bad' rating={bad} sum={sum} />
          <StatisticLine text='All' rating={sum} sum={sum} />
          <StatisticLine text='Average' rating={(good - bad) / sum} sum={sum} />
          <StatisticLine text='Positive' rating={good*100/sum} sum={sum} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let sum=good + neutral + bad

 /* const setToValue = (newValue) => {
    setValue()(newValue)
  }*/
  
  return (
    <div>
      <Header header = 'give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header header='statistics' />
      <Statistic good={good} neutral={neutral} bad={bad} sum={sum} />
    </div>
  )
}

export default App;
