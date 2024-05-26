import React, { useState } from 'react'
import './Comments.css'
function DisplayComment({cid,commentbody, usercommentd}) {
    const [cmtbody, setCmtbody] = useState("");
    const [edit, setEdit] = useState(false);

    const handleedit=(ctid,ctbdy)=>{
        setEdit(true);
        setCmtbody(ctbdy);
    }

    const handleonsubmit=(e)=>{
        e.preventDefault();
        setEdit(false);
    }

  return (
    <>
    {
        edit ? (<>
        <form className='comments_sub_form_comments' onSubmit = {handleonsubmit} >
            <input type='text ' placeholder='edit comment....' 
            value={cmtbody} 
            className='comment_ibox'
            onChange={(e)=> setCmtbody(e.target.value)} 
            />
            <input type='submit' value='change' className='comments_add_btn_comments'/>
       </form>

         </>
         ) : (
            <p className='comment_body'> {commentbody} </p>  
         )}


            <p className="usercommented"> - {usercommentd} commented</p>
            <p className="editdel_displaycomment">
              <i onClick={()=> handleedit(cid,commentbody)}>Edit</i>
              <i>Delete</i>
       </p>
    </>
  )
}

export default DisplayComment