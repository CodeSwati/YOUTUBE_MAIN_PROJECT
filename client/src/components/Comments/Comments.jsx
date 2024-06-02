import React, { useState } from 'react'
import './Comments.css'
import DisplayComment from './DisplayComment';
import { useDispatch, useSelector} from "react-redux"
import {postComment} from "../../actions/comments"
function Comments({videoId}) {

   const currentUser = useSelector(state => state?.currentUserReducer);
    const [commenttext, setCommenttext] = useState(" ");
    
    const commentsList =  useSelector(s=> s.commentReducer);

   //  const commentsList =[
   //  { 
   //      id: "1",
   //     commentbody : "hello",
   //      usercommentd: "abc"
   //   },
   //   {
   //      id: "2",
   //      commentbody : "hill",
   //      usercommentd: "pot"
   //   },
   //   {
   //      id: "3",
   //      commentbody : "hplo",
   //      usercommentd: "cpo"
   //   },
   //  ];


   const dispatch = useDispatch();
   
    const handleOnsubmit =(e)=>{
       
      if (currentUser) {
         e.preventDefault();
         if (!commenttext) {
          alert("plz type your comment!")
         }else {
            dispatch(postComment({
             videoId : videoId,
             userId : currentUser?.result._id,
             commentbody: commenttext,
             usercommentd: currentUser?.result.name,
            }));
 
            setCommenttext(" ");
         }
      }else{
         alert("plz login to post your comment!")
      }
       
    }
  return (
    <>
     <form className='comments_sub_form_comments' onSubmit={handleOnsubmit}>
         <input type='text ' placeholder='add comment....' className='comment_ibox'
         value={commenttext}
         onChange={e=> setCommenttext(e.target.value)} />
         <input type='submit' value='add' className='comments_add_btn_comments'/>
     </form>

     <div className="display_comment_container">
        {
            commentsList?.data?.filter(q=> videoId === q?.videoId).reverse()
            .map(m=>{
               return (
                <DisplayComment 
                cid={m._id}
                userId={m.userId}
                commentbody = {m.commentbody} 
                commentOn = {m.commentOn}
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