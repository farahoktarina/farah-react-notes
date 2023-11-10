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

  const searchNote = (val) => {
    if (val === '') setData(getInitialData)
    else {
      const filtered = data.filter(x => x.title.toLowerCase().includes(val.toLowerCase()))
      setData(filtered)
    }
  }

  const deleteNote = (id) => {
    setData(
      data => data.filter(x => x.id !== id)
    )
  }
    
  const archieveNote = (id) => {
    const filtered = data.map(x => {
        if (x.id === id) {
          x.archived = true
          return x;
        } else return x
      })
    setData(filtered)
  }

  return (
    <main className="flex min-h-screen w-full md:flex-row flex-col">
      <SideBar addNote={setAddNote} />
      <MainContent data={data} onSearch={searchNote} onDelete={deleteNote} onArchive={archieveNote} />
    </main>
  )
}

export default App
