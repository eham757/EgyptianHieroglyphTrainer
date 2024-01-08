import ListGroup from "./ListGroup"

interface QuizQuestionProps {
    question: string
    answers: string[]
    correctAnswer: string
}



const QuizQuestion = ({question, answers, correctAnswer,}: QuizQuestionProps) => {

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

export default QuizQuestion