import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import {applyMiddleware, compose} from 'redux'
import {createStore} from 'redux'
import {thunk} from 'redux-thunk'
import Reducers from "./Reducers/index.js";
import { GoogleOAuthProvider } from '@react-oauth/google';


const store = createStore(Reducers, compose(applyMiddleware(thunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <GoogleOAuthProvider clientId = "48369460539-r8qlj8hkps6v9ms81tj1tho33b5e7uun.apps.googleusercontent.com">
        <React.StrictMode>
        <App />
        </React.StrictMode>
     </GoogleOAuthProvider>
    
  </Provider>
)
