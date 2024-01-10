import { useState } from "react";
import ListGroup from "./ListGroup";
import './Quiz.css';

interface QuizProps {
    question: string;
    answers: string[];
    correctAnswer: string;
}



const Quiz = ({question, answers, correctAnswer}: QuizProps) => {

    const [answerValid, setAnswerValid] = useState<boolean>(false);

    const onAnswerClick = (answer: string) => {
        if (answer === correctAnswer) {
            setAnswerValid(true);
        } else {
            setAnswerValid(false);
        }
    
    }

    return (
        <>
        <h1 className={answerValid ? 'correct': 'false'}>{question} {answerValid ? 'correct' : 'incorrect'}</h1>
        <ListGroup items={answers} onItemClick={(item) => onAnswerClick(item)} />
        </>
    )
}

export default Quiz