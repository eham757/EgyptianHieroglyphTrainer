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
    const [answered, setAnswered] = useState<boolean>(false);

    const onAnswerClick = (answer: string) => {
        setAnswered(true);
        if (answer === correctAnswer) {
            setAnswerValid(true);
        } else {
            setAnswerValid(false);
        }
    
    }

    const titleColor = () => {
        if (answerValid && answered) {
            return 'text-success';
        } else if (!answerValid && answered) {
            return 'text-danger';
        } else {
            return 'text-primary';
        }
    };

    return (
        <>
        <h1 className={titleColor()}>{question}</h1>
        <ListGroup items={answers} onItemClick={(item) => onAnswerClick(item)} />
        </>
    )
}

export default Quiz