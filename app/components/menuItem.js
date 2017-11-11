import React from "react"


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
