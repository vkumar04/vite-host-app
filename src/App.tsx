import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} alt="react logo" />
        <h1>Vite Federated Host</h1>
        <Button name="Hello World" />
        </div>
    </div>
  )
}

export default App
