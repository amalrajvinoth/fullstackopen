import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Display = ({ text, counter }) => <div>{text} {counter}</div>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
      <div>
        <div> <h1>give feedback</h1> </div>
        <Button handleClick={increaseGood} text="good" />
        <Button handleClick={increaseNeutral} text="netural" />
        <Button handleClick={increaseBad} text="bad" />
        <div> <h1>statistics</h1> </div>
        <Display text="good" counter={good} />
        <Display text="neutral" counter={neutral} />
        <Display text="bad" counter={bad} />
      </div>
  )
}

export default App