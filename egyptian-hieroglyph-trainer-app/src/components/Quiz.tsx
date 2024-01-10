import ListGroup from "./ListGroup"

interface QuizProps {
    question: string
    answers: string[]
    correctAnswer: string
}



const Quiz = ({question, answers, correctAnswer,}: QuizProps) => {

    const onAnswerClick = (answer: string) => {
        if (answer === correctAnswer) {
            alert('Correct!')
        } else {
            alert('Wrong!')
        }
    
    }

    return (
        <>
        <h1>{question}</h1>
        <ListGroup items={answers} onItemClick={(item) => onAnswerClick(item)} />
        </>
    )
}

export default Quiz