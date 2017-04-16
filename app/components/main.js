import React from "react"
import MainList from './mainList'
import "../style/style.scss"

export default class Main extends React.Component{
      constructor(props) {
          super(props)
      }
      render(){
        const mainLists=this.props.mainLists.map((mainList,id) =>{
           return(
            <MainList  key={id}  detail={mainList}/>
          )
        })
        return(
           <div className="mainPage">
             <table cellPadding="0" cellSpacing="0">
               <tbody>{mainLists}</tbody>
             </table>
           </div>
        )
      }
}
