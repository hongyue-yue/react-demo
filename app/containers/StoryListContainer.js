import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as Action from "../redux/action"
import Main from "../components/main"

class StoryListContainer extends React.Component{
  constructor(props,context) {
		super(props,context)
	}
  componentWillMount(){
     this.props.action.get_list_data()
  }
  componentWillUpdate(nextProp,nextState){
		console.log(nextProp)
	}
  render(){
     const {mainList}=this.props
     return(
       <Main mainLists={mainList} />
     )
  }
}
 const mapStateToProps=(state)=>{
   return{
     mainList:state.mainList
   }
 }
 const mapDispatchTopProps=(dispatch)=>{
     return{
        action:bindActionCreators(Action,dispatch)
     }
 }
export default connect(mapStateToProps,mapDispatchTopProps)(StoryListContainer)
