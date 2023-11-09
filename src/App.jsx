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

  const setDelete = (id) => {
    console.log(id)
    setData(
      data => data.filter(x => x.id !== id)
    )
  }

  return (
    <main className="flex min-h-screen w-full md:flex-row flex-col">
      <SideBar addNote={setAddNote} />
      <MainContent data={data} onDelete={setDelete} />
    </main>
  )
}

export default App
