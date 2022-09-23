import { Suspense } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// @ts-ignore
import { Button } from 'remoteApp/Button'

function App() {
  return (
    <div className="App">
      <div>
        <img src={reactLogo} alt="react logo" />
        <h1>Vite Federated Host</h1>
        <Suspense fallback="Loading Page">
          <Button name="Button from Remote" />
        </Suspense>
        </div>
    </div>
  )
}

export default App
