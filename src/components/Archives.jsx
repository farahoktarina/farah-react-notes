import { useState } from 'react'

function Archives ({data, onDelete}) {
  let dataActive = useState([]) 
  dataActive = data.filter(x => x.archived === true)

  return (
    <div className="w-full">
      <h1 className="text-sky-500 text-xl mb-4">Archives Notes</h1>
      {
        dataActive.length < 1 ?
        <div className="w-full text-slate-300 text-center text-sm">Archives Notes is Empty</div>
        :
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
          dataActive.map((item,i) => {
            return (
              <div key={i} className="flex flex-col justify-between bg-slate-800 rounded-md shadow-sm border border-slate-800 hover:border-sky-500 highlight-white/5 hover:bg-slate-700 p-4">
                <div className="cursor-pointer">
                  <h2 className="text-lg text-white py-2">{item.title}</h2>
                  <p className="text-sm text-slate-300">
                    {item.body}
                  </p>
                </div>
                <div className="flex justify-end border-2 border-sky-800 border-x-0 border-b-0 mt-6 pt-2">
                  <div onClick={() => onDelete(item.id)} className="cursor-pointer text-sm text-red-700 hover:text-red-400 px-2">
                    Delete
                  </div>
                </div>
              </div>

            )
          })
        }
        </div>
      }
    </div>
  )
}

export default Archives;