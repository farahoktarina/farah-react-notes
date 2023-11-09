import { useState } from "react";

function MainContent({data, onDelete}) {

  return (
    <div className="md:pl-[25rem] w-full p-5 bg-slate-900">
      <div className="md:flex flex-col md:justify-end justify-center pl-5">
        {/* header */}
        <div className="flex md:justify-end py-4">
          <input type="text" 
            placeholder="Search Note..."
            className="w-[18rem] text-sm text-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 px-3 hover:ring-sky-500 bg-slate-800 highlight-white/5 hover:bg-slate-700 focus:outline-none" />
        </div>

        {/* active notes */}
        <div className="w-full py-3">
          <h1 className="text-sky-500 text-xl mb-4">Active Notes</h1>
          <div className="grid grid-cols-3 gap-4">
            {
              data.map((item,i) => {
                return (
                  <div key={i} className="flex flex-col justify-between bg-slate-800 rounded-md shadow-sm border border-slate-800 hover:border-sky-500 highlight-white/5 hover:bg-slate-700 p-4">
                    <div className="cursor-pointer">
                      <h2 className="text-lg text-white py-2">{item.title}</h2>
                      <p className="text-sm text-slate-300">
                        {item.body}
                      </p>
                    </div>
                    <div className="flex justify-between border-2 border-sky-800 border-x-0 border-b-0 mt-6 pt-2">
                      <div className="cursor-pointer text-sm text-yellow-700 hover:text-yellow-400 px-2">
                        Archieve
                      </div>
                      <div onClick={() => onDelete(item.id)} className="cursor-pointer text-sm text-red-700 hover:text-red-400 px-2">
                        Delete
                      </div>
                    </div>
                  </div>

                )
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;