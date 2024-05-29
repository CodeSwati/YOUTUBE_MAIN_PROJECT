import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import channelReducers from "./channel";
import videoReducer from "./Video";

export default combineReducers({
    authReducer, 
    currentUserReducer,
    channelReducers,
    videoReducer
});