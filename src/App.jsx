import { useState } from 'react'
import SideBar from './components/SideBar.jsx'
import MainContent from './components/MainContent.jsx'
import { getInitialData, showFormattedDate } from './utils/index.js'

function App() {
  const [data, setData] = useState(getInitialData)
  
  const setAddNote = ({title, body}) => {
    setData(
      [ ...data, 
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: showFormattedDate(new Date())
        }
      ]
    )
  }

  return (
    <main className="flex min-h-screen w-full md:flex-row flex-col">
      <SideBar addNote={setAddNote} />
      <MainContent data={data} />
    </main>
  )
}

export default App
