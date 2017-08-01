import React from "react"
import MainList from './mainList'


export default class Main extends React.Component{
      constructor(props,context) {
          super(props,context)
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
