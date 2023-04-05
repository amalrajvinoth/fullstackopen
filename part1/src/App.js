import {useState} from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({text, value}) => <div>{text} {value}</div>
const Statistics = ({good, bad, neutral}) => {
    return(
        <div>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="all" value ={good + neutral + bad} />
            <StatisticLine text="average" value ={(good + neutral + bad) / 3} />
            <StatisticLine text="positive" value ={(100 * good) / (good + neutral + bad) + "%"} />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    return (
        <div>
            <div><h1>give feedback</h1></div>
            <Button handleClick={increaseGood} text="good"/>
            <Button handleClick={increaseNeutral} text="netural"/>
            <Button handleClick={increaseBad} text="bad"/>
            <div><h1>statistics</h1></div>
            <Statistics text={"good"} good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App