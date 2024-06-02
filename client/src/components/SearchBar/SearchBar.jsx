import React from 'react'
import './SearchBar.css'
import { BsMicFill } from "react-icons/bs";
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';
import SearchList from './SearchList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function SearchBar() {

  const [searchQuery,setSearchQuery] = useState("");
  const[SearchListA, setSearchList]=useState(false);
 
  const titleArray = useSelector(s=> s.videoReducer)?.data?.filter(q=>
    q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=> m?.videoTitle)

  // const titleArray=["video1","Video2","Animation video","movies"]
  // .filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
    <div className='searchBar_container'>
        <div className="searchbar_container2">
            <div className='search_div'>
                 <input type="text" className='ibox_searchbar' placeholder='Search...' 
                 onChange={e=> setSearchQuery(e.target.value)}
                 value={searchQuery} 
                 onClick={e=>setSearchList(true)} />

                 <Link to={`/search/${searchQuery}` }>
                      <FaSearch className='search_icon'
                        onClick={e=>setSearchList(false)}/>

                  </Link>
                 <BsMicFill className='mic' />
                 {searchQuery && SearchListA &&
                     <SearchList setSearchQuery={setSearchQuery} titleArray={titleArray}/>
                 }
            </div>
        </div>
    </div>
  )
}

export default SearchBar