import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as Action from "../redux/action"
import Header from '../components/header'
import '../style/style.scss'

class MainContainer extends React.Component{
  constructor(props,context) {
		super(props,context)
	}
  componentWillMount(){
     this.props.action.load_themes_list_data();
  }
  componentWillUpdate(nextProp,nextState){
		console.log(nextProp)
	}
  render(){
     const {action,themeList}=this.props
     return(
       <div className="main">
          <Header themeLists={themeList}  action={action} />
          {this.props.children}
       </div>
     )
  }
}
 const mapStateToProps=(state)=>{
   return{
     themeList:state.themeList
   }
 }
const mapDispatchTopProps=(dispatch)=>{
    return{
       action:bindActionCreators(Action,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchTopProps)(MainContainer)
