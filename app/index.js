import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from "./redux/store"

import './style/style.scss'
const MainContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/MainContainer').default);
  }, 'MainContainer');
};
const StoryListContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/StoryListContainer').default);
  }, 'StoryListContainer');
};
const ThemesContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/ThemesContainer').default);
  }, 'ThemesContainer');
};
ReactDOM.render(
   <Provider store={store}>
     <Router history={browserHistory}>
        <Route path="/" getComponent={MainContainer}>
           <IndexRoute getComponent={StoryListContainer}/>
           <Route path="theme/:themeId" getComponent={ThemesContainer}/>
        </Route>
     </Router>
   </Provider>,
   document.getElementById("app")
)
