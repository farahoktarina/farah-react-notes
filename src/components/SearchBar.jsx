import { useState } from 'react';

function SearchBar({search}) {
  const [searchData, setSearchData] = useState('');

  const onSearch = (ev) => {
    setSearchData(ev.target.value)
    search(ev.target.value)
  }

   return (
    <div className="flex md:justify-end py-4">
      <input type="text"
        value={searchData} 
        onChange={onSearch}
        placeholder="Search Note..."
        className="w-[18rem] text-sm text-white rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 px-3 hover:ring-sky-500 bg-slate-800 highlight-white/5 hover:bg-slate-700 focus:outline-none" />
    </div>
   )
}

export default SearchBar;