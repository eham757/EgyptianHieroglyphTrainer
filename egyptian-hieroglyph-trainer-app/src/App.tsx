import Quiz from "./components/Quiz";
import HieroglyphSetProvider from "./services/HieroglyphSetProvider"

function App() {

    const { sign, transliteration } = HieroglyphSetProvider.getRandomUniliteralPair();

    const answers: string[] = HieroglyphSetProvider.getFixedAmountOfRandomTransliterationsExcludingSpecifiedCharacters(3, [transliteration]);
    answers.push(transliteration);
    answers.sort(() => Math.random() - 0.5); // Shuffle the answers


    return (
        <>
            <div className="container text-center">
                <Quiz question={sign} answers={answers} correctAnswer={transliteration}  />
            </div>
            
        </>
    )
}

export default App
