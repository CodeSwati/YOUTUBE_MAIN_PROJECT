import axios from 'axios'

const API = axios.create({baseURL : "http://localhost:5500/"})
API.interceptors.request.use(req => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`

    }
    return req;
})

export const login = (authData)=> API.post('/user/login', authData);
export const updateChannelData =(id, updateData)=> API.patch(`/user/update/${id}`, updateData);
export const fetchAllChannel = ()=> API.get('/user/getAllChannels');

export const uploadvideo =(filedata, fileoptions)=>
     API.post('/video/uploadvideo', filedata, fileoptions);
export const getVideos=()=> API.get('/video/getvideos');
export const likeVideo =(id, Like)=> API.patch(`/video/like/${id}`,{ Like});
export const viewsVideo =(id)=> API.patch(`/video/view/${id}`);

export const addToLikedVideo = (likedVideoData) => API.post('/video/likeVideo', likedVideoData);
export const getAllLikedVideo=()=> API.get('/video/getAllLikeVideo');
export const deletelikedVideo = (videoId, Viewer) => 
    API.delete(`/video/deleteLikedVideo/${videoId}/${Viewer}`)

export const addTowatchLater = (watchLaterData) => API.post('/video/watchLater', watchLaterData);
export const getAllwatchLater=()=> API.get('/video/getAllwatchLater');
export const deleteWatchLater = (videoId, Viewer) => 
    API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`);

export const addToHistory = (HistoryData) => API.post('/video/History', HistoryData);
export const getAllHistory=()=> API.get('/video/getAllHistory');
export const deleteHistory = (userId) => 
    API.delete(`/video/deleteHistory/${userId}`);

