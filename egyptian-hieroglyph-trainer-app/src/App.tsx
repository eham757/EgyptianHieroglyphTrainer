import HieroglyphSetProvider from "./services/hieroglyphSetProvider"

function App() {

  const hieroglyph = HieroglyphSetProvider.getRandomUniliteralSign();

  return (
    <>
    <h1>{hieroglyph}</h1>
    </>
  )
}

export default App
