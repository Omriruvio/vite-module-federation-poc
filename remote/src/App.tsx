import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <h1>Remote app</h1>
      <Button onClick={() => console.log('clicked on remote')}/>
    </>
  )
}

export default App
