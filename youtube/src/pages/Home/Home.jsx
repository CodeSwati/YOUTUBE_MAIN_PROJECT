import React from 'react'
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

function Home() {
  return (
    <div className='container_pages_app'>
        <div className='container2_pages_app'> 
            <LeftSidebar/>
        </div>
    </div>
  )
}

export default Home