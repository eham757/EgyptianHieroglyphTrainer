import ListGroup from "./components/ListGroup";
import HieroglyphSetProvider from "./services/HieroglyphSetProvider"

function App() {

  const { sign, transliteration } = HieroglyphSetProvider.getRandomUniliteralPair();

  return (
    <>
    <h1>{sign}</h1>
    <h1>{transliteration}</h1>
    <ListGroup items={['hello', 'Are you still there?', 'Activated']} onItemClick={(item) => console.log(item)} />
    </>
  )
}

export default App
