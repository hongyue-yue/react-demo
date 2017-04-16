import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from "./redux/store"
import MainContainer from "./containers/MainContainer"

ReactDOM.render(
   <Provider store={store}>
     <MainContainer/>
   </Provider>,
   document.getElementById("app")
)
