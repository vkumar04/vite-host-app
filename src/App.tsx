import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} alt="react logo" />
        <h1>React + TypeScript + Vite</h1>
        <Button name='Host Button' onClick={() => console.log('clicked')} />
        </div>
    </div>
  )
}

export default App
