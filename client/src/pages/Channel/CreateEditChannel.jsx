import React, {useState} from 'react'
import './CreateEditChannel.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChannelData } from '../../actions/channelUser';

function CreateEditChannel({setEditcreateChannelbtn}) {

    // const currentUser={
    //     result:{
    //       email:"xyz@mail.com",
    //       joinedOn:"2222-07-15T09:57:23.432"
    //     },
    //   };
     const currentUser = useSelector(state => state.currentUserReducer) ;

    const [name, setName] = useState(currentUser?.result.name);
    const [desc, setDesc] = useState(currentUser?.result.desc);
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
    if (!name) {
        alert("plz enter name !");
    }else if(!desc){
      alert("please enter discription !");
    } else{
      dispatch(updateChannelData(currentUser?.result._id,{
        name:name,
        desc:desc,
      }));
      setEditcreateChannelbtn(false);
      setTimeout(() => {
        dispatch(login({email: currentUser?.result.email}));
      }, 5000);
    }
   } 

  return (
    <div className='container_createEditChannel'>
        <input type='submit' onClick={()=>setEditcreateChannelbtn(false)}
        name='text'
        value={"X"} className='ibtn_x' 
        />
           <div className='container2_createEditChannel'>
               <h1>
                {
                    currentUser?.result.name? 
                    <>  Edit </> : 
                    <> Create  </>
                    
                }
                Your Channel
                </h1>

                <input type='text' 
                name='text' 
                placeholder='enter your channel name' 
                className='ibox' 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />
                <textarea type="text" rows={15} placeholder={'enter channel description'} 
                className={'ibox'}
                value={desc}
                onChange={(e)=> setDesc(e.target.value)}
                />
                <input type="submit" 
                value={"submit"} 
                onClick={handleSubmit}
                className='ibtn' />
          </div>
    </div>
  )
}

export default CreateEditChannel