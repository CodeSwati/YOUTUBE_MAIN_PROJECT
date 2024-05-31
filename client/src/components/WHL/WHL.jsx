import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './WHL.css'
import WHLVideolist from './WHLVideolist'
import { useSelector } from 'react-redux';

function WHL({page, VideoList}) {

  const currentUser = useSelector(state => state?.currentUserReducer);
  return (


    
    <div className='container_pages_app'>
        <LeftSidebar/>
        <div className='container2_pages_app'>
            <p className='container_whl'>
               <div className="box_whl leftside_whl">
                    <b>Your {page} shown here </b>
                    {
                      page==="History" &&
                      <div className="clear_history_btn">
                      Clear History
                      </div>
                    } 
               </div>
               <div className="rightside_whl">
                  <h1>{page}</h1>
                  <div className="whl_list">
                      <WHLVideolist
                      currentUser ={currentUser?.result._id}
                      page={page}
                      VideoList ={VideoList}
                      />
                  </div>
               </div>
            </p>
       </div>
    </div>
    
    
  )
}

export default WHL