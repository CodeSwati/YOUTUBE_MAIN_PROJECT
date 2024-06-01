import * as api from '../api'

export const uploadvideo=(videodata) =>async(dispatch)=>{
    try {
        const {filedata, fileoptions} = videodata;
        const {data} = await api.uploadvideo(filedata, fileoptions);
        dispatch({type: 'POST_VIDEO', data})
        dispatch(getAllVideo());
    } 
    catch(error){
        alert(error.response.data.message)
    }
}

export const getAllVideo =()=>async(dispatch)=>{
    try {
        const {data} = await api.getVideos();
        dispatch({type : 'FETCH_ALL_VIDEOS' , payload : data})
       } catch (error) {
        console.log(error);
    }
}

export const likeVideo =(LikeDate)=> async (dispatch)=>{
     try {
        const{id, Like} =  LikeDate;
        const {data} = await api.likeVideo(id, Like);
        dispatch({type : "POST_LIKE" , payload : data});
         dispatch(getAllVideo());
     } catch (error) {
      console.log(error);  
     }
}

export const viewVideo=(ViewDate)=> async (dispatch)=>{
   try {
    const {id} = ViewDate;
    const {data} = await api.viewsVideo(id);
        dispatch({type: 'POST_VIEWS', data})
        dispatch(getAllVideo());
   } catch (error) {
    console.log(error);
   }
}

