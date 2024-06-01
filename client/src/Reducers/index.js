import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import channelReducers from "./channel";
import videoReducer from "./Video";
import watchLaterReducer from "./watchLater";
import likedVideoReducer from "./likedVideo";
import HistoryReducer from "./History";


export default combineReducers({
    authReducer, 
    currentUserReducer,
    channelReducers,
    videoReducer,
    likedVideoReducer,
    watchLaterReducer,
    HistoryReducer,
});