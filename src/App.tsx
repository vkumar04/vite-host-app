import { MantineProvider } from '@mantine/core';
import Navigation from './components/Navigation'

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <div className="App">
      <Navigation />
    </div>
    </MantineProvider>
  )
}

export default App
