import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as Action from "../redux/action"
import '../style/style.scss'
import Main from "../components/main"

class ThemesContainer extends React.Component{
  constructor(props,context) {
		super(props,context)
	}
  componentWillMount(){
     this.props.action.get_theme(this.props.params.themeId)
  }
  componentWillUpdate(nextProp,nextState){
		console.log(nextProp)
	}
  render(){
     const {ThemesContainer}=this.props
     return(
       <Main mainLists={ThemesContainer} />
     )
  }
}
 const mapStateToProps=(state)=>{
   return{
     ThemesContainer:state.ThemesContainer
   }
 }
 const mapDispatchTopProps=(dispatch)=>{
     return{
        action:bindActionCreators(Action,dispatch)
     }
 }
export default connect(mapStateToProps,mapDispatchTopProps)(ThemesContainer)
