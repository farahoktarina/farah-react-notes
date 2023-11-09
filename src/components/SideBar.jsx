import { useState } from "react";

function SideBar() {
  const [title, setTitle] = useState('')
  const [titleLength, setTitleLength] = useState(50)
  const [description, setDescription] = useState('')

  const changeTitle = (ev) => {
    setTitle(ev.target.value) 

    const l = ev.target.value.length
    if (l >= 50) {
      return setTitleLength(0)
    } 
    setTitleLength(50 - l)
  }

  return (
    <div className="md:w-[25rem] w-full md:h-screen h-[10rem] fixed p-5 bg-slate-900 border-2 border-l-0 border-t-0 border-b-0 border-slate-800"> 
      <div className="flex flex-col">
        <h1 className="text-sky-500 text-xl mb-4">Create New Note</h1>
        <div className="flex flex-col mb-2">
          <label htmlFor={title} className="text-slate-300 pb-1">Title</label>
          <div className="relative flex flex-col">
            <input 
              className="text-sm text-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-2 px-3 hover:ring-sky-500 bg-slate-800 highlight-white/5 hover:bg-slate-700 focus:outline-none"
              value={title} onChange={changeTitle} maxLength={50} />
            <div className="text-sky-500 text-right pt-1 text-xs">{titleLength}</div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor={description} className="text-slate-300 pb-1">Description</label>
          <div className="flex flex-col">
            <textarea 
              className=" text-sm text-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 px-3 hover:ring-sky-500 bg-slate-800 highlight-white/5 hover:bg-slate-700 focus:outline-none"
              cols={6} rows={6}
              value={description} onChange={ev => setDescription(ev.target.value)}  />
          </div>
        </div>
        <div className="w-full my-5">
          <button className="w-full text-sm font-bold bg-sky-500 border border-sky-500 hover:bg-sky-400 text-slate-300 rounded py-2 px-3">Create</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;