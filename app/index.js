import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { Router, Route, IndexRoute,IndexRedirect, browserHistory } from 'react-router'
import store from "./redux/store"

import './style/style.scss'
/*import MainContainer from './containers/MainContainer.js'
import StoryListContainer from './containers/StoryListContainer.js'
import ThemesContainer from './containers/ThemesContainer.js'*/
const MainContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/MainContainer.js').default);
  }, 'MainContainer');
};
const StoryListContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/StoryListContainer.js').default);
  }, 'StoryListContainer');
};
const ThemesContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./containers/ThemesContainer.js').default);
  }, 'ThemesContainer');
};

ReactDOM.render(
   <Provider store={store}>
     <Router history={browserHistory}>
        <Route path="/" getComponent={MainContainer} >
           <IndexRoute  getComponent={StoryListContainer}/>
           <Route path="theme/:themeId" getComponent={ThemesContainer}/>
        </Route>
     </Router>
   </Provider>,
   document.getElementById("app")
)
