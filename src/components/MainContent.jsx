import { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import Actives from './Actives.jsx';
import Archives from './Archives.jsx';

function MainContent({data, onSearch, onDelete, onArchive}) {

  return (
    <div className="md:pl-[25rem] w-full p-5 bg-slate-900">
      <div className="md:flex flex-col md:justify-end justify-center pl-5">

        <SearchBar search={onSearch} />

        {/* active notes */}
        <Actives data={data} onDelete={onDelete} onArchive={onArchive} />

        <hr className="border-4 border-sky-800 border-x-0 border-b-0 my-6" />

        {/* Archieve notes */}
        <Archives data={data} onDelete={onDelete} />
       
      </div>
    </div>
  );
}

export default MainContent;