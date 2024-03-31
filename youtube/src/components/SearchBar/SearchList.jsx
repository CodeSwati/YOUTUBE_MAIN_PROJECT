import React from 'react'
import './SearchList.css'
import {FaSearch} from 'react-icons/fa'

function SearchList({titleArray,setSearchQuery}) {
  return (
    <div className="container_searchlist">
      {
        titleArray.map(m=>{
          return <p 
          key={m}
          onClick={e=>setSearchQuery(m)}
          className='title_item'>
          <FaSearch/>
           {m}
        </p>
        })
      }
      
    </div>
  )
}

export default SearchList