import { useState } from 'react'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'

function App() {
  
  return (
    <main className="flex min-h-screen relative w-full md:flex-row flex-col">
      <SideBar />
      <MainContent />
    </main>
  )
}

export default App
