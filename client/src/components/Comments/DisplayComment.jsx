import React, { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
function DisplayComment({cid,commentbody,userId,commentOn, usercommentd}) {

  const currentUser = useSelector(state => state?.currentUserReducer);

    const [cmtbody, setCmtbody] = useState("");
    const [edit, setEdit] = useState(false);
    const [cmtId, setcmtId] = useState("");

    const handleedit=(ctid,ctbdy)=>{
        setEdit(true);
        setcmtId(ctid);
        setCmtbody(ctbdy);
    }

    const dispatch = useDispatch();
    const handleonsubmit=(e)=>{
        e.preventDefault();
        if (!cmtbody) {
          alert("type your comments")
        }else{
          dispatch(editComment({
            id : cmtId,
            commentbody : cmtbody
          }));
          setCmtbody(" ");
        }
        setEdit(false);
    };

    const handleDel =(id) =>{
      dispatch(deleteComment(id))
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


            <p className="usercommented"> - {usercommentd} commented 
            {moment(commentOn).fromNow()} </p>
            {
              currentUser?.result._id === userId && (
                <p className="editdel_displaycomment">
              <i onClick={()=> handleedit(cid,commentbody)}>Edit</i>
              <i onClick={()=> handleDel(cid)}>Delete</i>
               </p>
              )
            }
            
    </>
  )
}

export default DisplayComment