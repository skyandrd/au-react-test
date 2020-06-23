import React from 'react'
import { startMirage } from './server-mock'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}

function App() {
  return <div className="App" />
}

export default App
