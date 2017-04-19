import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from "./redux/store"
import MainContainer from "./containers/MainContainer"
import StoryListContainer from "./containers/StoryListContainer"
import ThemesContainer from "./containers/ThemesContainer"

ReactDOM.render(
   <Provider store={store}>
     <Router history={browserHistory}>
        <Route path="/" component={MainContainer}>
           <IndexRoute component={StoryListContainer}/>
           <Route path="theme/:themeId" component={ThemesContainer}/>
        </Route>
     </Router>
   </Provider>,
   document.getElementById("app")
)
