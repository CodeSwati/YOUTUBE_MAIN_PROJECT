import React, { useState } from 'react'
import './Comments.css'
import DisplayComment from './DisplayComment';
function Comments() {
    const [commenttext, setCommenttext] = useState(" ");
    const commentsList =[
    { 
        id: "1",
       commentsbody : "hello",
        usercommentd: "abc"
     },
     {
        id: "2",
        commentsbody : "hill",
        usercommentd: "pot"
     },
     {
        id: "3",
        commentsbody : "hplo",
        usercommentd: "cpo"
     },
    ]
    const handleOnsubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <>
     <form className='comments_sub_form_comments' onSubmit={handleOnsubmit}>
         <input type='text ' placeholder='add comment....' className='comment_ibox'
         onChange={e=> setCommenttext(e.target.value)} />
         <input type='submit' value='add' className='comments_add_btn_comments'/>
     </form>

     <div className="display_comment_container">
        {
            commentsList.map(m=>{
               return (
                <DisplayComment 
                cid={m.id}
                commentsbody = {m.commentsbody} 
                usercommentd = {m.usercommentd}
                />
               )
            })
        }
       
     </div>
    </>
  )
}

export default Comments