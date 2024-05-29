import * as api from '../api'

export const uploadvideo=(videodata) =>async(dispatch)=>{
    try {
        const {filedata, fileoptions} = videodata;
        const {data} = await api.uploadvideo(filedata, fileoptions);
        dispatch({type: 'POST_VIDEO', data})
    } 
    catch(error){
        alert(error.response.data.message)
    }
}