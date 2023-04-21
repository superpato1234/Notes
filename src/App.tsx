import { useState } from 'react'
import './App.css'
import Counter from './components/counter/counter'
import Notes from './components/notes/notes'

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-900 h-[100vh] w-[100vw]">
      <Counter />
      <Notes />
      
    </div>
  )
}

export default App
