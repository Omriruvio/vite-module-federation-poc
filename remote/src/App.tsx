import './App.css'
import Button from './components/Button'
import UserList from './components/UserList/UserList'

function App() {
  return (
    <>
      <h1>Remote app</h1>
      <Button onClick={() => console.log('clicked on remote')} />
      <UserList />
    </>
  )
}

export default App
