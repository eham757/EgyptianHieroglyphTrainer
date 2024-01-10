import Quiz from "./components/Quiz";
import HieroglyphSetProvider from "./services/HieroglyphSetProvider"

function App() {

    const switchTheme = () => {
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    }

    const { sign, transliteration } = HieroglyphSetProvider.getRandomUniliteralPair();

    const answers: string[] = HieroglyphSetProvider.getFixedAmountOfRandomTransliterationsExcludingSpecifiedCharacters(3, [transliteration]);
    answers.push(transliteration);
    answers.sort(() => Math.random() - 0.5); // Shuffle the answers


    return (
        <>
            <button className="btn btn-primary" onClick={switchTheme}>Switch theme</button>
            <div className="container text-center">
                <Quiz question={sign} answers={answers} correctAnswer={transliteration}  />
            </div>
            
        </>
    )
}

export default App
