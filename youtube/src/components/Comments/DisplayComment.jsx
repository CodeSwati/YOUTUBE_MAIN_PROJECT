import React, { useState } from 'react'
import './Comments.css'
function DisplayComment({cid,commentsbody, usercommentd}) {
    const [commentbody, setCommentbody] = useState("");
    const [edit, setEdit] = useState(false);

    const handleedit=(ctid,ctbdy)=>{
        setEdit(true);
        setCommentbody(ctbdy);
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
            value={commentbody} 
            className='comment_ibox'
            onChange={(e)=> setCommentbody(e.target.value)} 
            />
            <input type='submit' value='change' className='comments_add_btn_comments'/>
       </form>

         </>
         ) : (
            <p className='comment_body'> {commentsbody} </p>  
         )}


            <p className="usercommented"> - {usercommentd} commented</p>
            <p className="editdel_displaycomment">
              <i onClick={()=> handleedit(cid,commentsbody)}>Edit</i>
              <i>Delete</i>
       </p>
    </>
  )
}

export default DisplayComment