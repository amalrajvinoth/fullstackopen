import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]


    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0,0,0,0,0,0,0,0,0,0,0])
    const [vote, setVote] = useState(0)
    const [mostVotedCount, setMostVotedCount] = useState(0)
    const [mostVoted, setMostVoted] = useState("")

    const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const nextAnecdote = () => {
        const random = randomValue(0, anecdotes.length)
        setSelected(random)
        setVote(votes[random])

        const idx = mostVotedAnecdote()
        setMostVoted(anecdotes[idx])
        setMostVotedCount(votes[idx])
    }

    const handleVote = () => {
        votes[selected] += 1
        setVote(votes[selected])
        setVotes(votes)
    }

    const mostVotedAnecdote = () => {
        return votes.indexOf(Math.max(...votes))
    }

    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <h3>{anecdotes[selected]}</h3>
            <h4>has {vote} votes </h4>
            <Button text="Vote" handleClick={handleVote}/>
            <Button text="Next anecdote" handleClick={nextAnecdote}/>
            <h1>Anecdote with most votes</h1>
            <h3>{mostVoted}</h3>
            <h4>has {mostVotedCount} votes </h4>
        </div>

    )
}

export default App