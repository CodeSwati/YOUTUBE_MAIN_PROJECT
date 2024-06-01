import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './WHL.css'
import WHLVideolist from './WHLVideolist'
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';

function WHL({page, VideoList}) {

  const currentUser = useSelector(state => state?.currentUserReducer);
  const dispatch = useDispatch();

  const handleClearHistory = ()=>{
    if (currentUser) {
      dispatch(clearHistory({
        userId: currentUser?.result._id
      }));
    }
  }

  return (


    
    <div className='container_pages_app'>
        <LeftSidebar/>
        <div className='container2_pages_app'>
            <p className='container_whl'>
               <div className="box_whl leftside_whl">
                    <b>Your {page} shown here </b>
                    {
                      page==="History" &&
                      <div className="clear_history_btn" onClick={()=> handleClearHistory()}>
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