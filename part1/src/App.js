import {useState} from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Feedback = ({title, buttons, handlers}) => {
    return (
        <div>
            <div><h1>{title}</h1></div>
            {buttons.map((item, index) => {
                return <Button handleClick={handlers[index]} text={item}/>
            })}
        </div>
    )
}
const StatisticLine = ({text, value}) => <div>{text} {value}</div>
const Statistics = ({title, good, bad, neutral}) => {
    if (good + bad + neutral === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    } else {
        return (
            <div>
                <div><h1>{title}</h1></div>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={good + neutral + bad}/>
                <StatisticLine text="average" value={(good + neutral + bad) / 3}/>
                <StatisticLine text="positive" value={(100 * good) / (good + neutral + bad) + "%"}/>
            </div>
        )
    }
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
            <Feedback title="give feedback" buttons={["good", "neutral", "bad"]}
                      handlers={[increaseGood, increaseNeutral, increaseBad]}/>
            <Statistics title="statistics" good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App