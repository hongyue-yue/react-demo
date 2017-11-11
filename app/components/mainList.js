import React from "react"


export default class MainList extends React.Component{
       constructor(props) {
           super(props)
       }
       render(){
         const imgUrl=this.props.detail.images?this.props.detail.images[0]:"http://www.cfanz.cn/uploads/icon/300/jpg/2012/11/01/23/A104Y69833.jpg"
         return(
             <tr>
               <td><img className="mainImg" src={imgUrl} / ></td>
               <td>{this.props.detail.title}</td>
             </tr>
         )
       }
}
