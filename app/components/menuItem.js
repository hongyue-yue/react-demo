import React from "react"
import "../style/style.scss"

export default class MenuItem extends React.Component{
    constructor(props) {
       super(props)
    }
    render(){
       return(
         <li  onClick={this.props.onClick}>{this.props.children}</li>
       )
    }

}
