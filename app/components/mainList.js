import React from "react"
import "../style/style.scss"

export default class MainList extends React.Component{
       constructor(props) {
           super(props)
       }
       render(){
         const imgUrl=this.props.detail.images?this.props.detail.images[0]:"http://www.cfanz.cn/uploads/icon/300/jpg/2012/11/01/23/A104Y69833.jpg"
         return(
            <div>
              <img  src={imgUrl} />
              <div>{this.props.detail.title}</div>
              <hr/>
            </div>
         )
       }
}
