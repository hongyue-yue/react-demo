import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/header'
import Main from "../components/main"

import {bindActionCreators} from "redux"
import * as Action from "../redux/action"

import '../style/style.scss'

class MainContainer extends React.Component{
  constructor(props) {
		super(props)
	}
  componentWillMount(){
     this.props.action.load_themes_list_data()
     this.props.action.get_list_data()
  }
  componentWillUpdate(nextProp,nextState){
		console.log(nextProp)
	}
  render(){
     const {action,themeList,mainList}=this.props
     return(
       <div className="main">
       <Header themeLists={themeList}  action={action} />
       <Main mainLists={mainList} />
       </div>
     )
  }
}
 const mapStateToProps=(state)=>{
   return{
     themeList:state.themeList,
     mainList:state.mainList
   }
 }
const mapDispatchTopProps=(dispatch)=>{
    return{
       action:bindActionCreators(Action,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchTopProps)(MainContainer)
