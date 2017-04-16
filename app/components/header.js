import React from "react"
import MenuItem from "./menuItem"
import "../style/style.scss"

export default class Header extends React.Component{
    constructor(props) {
       super(props);
       this.handleToggleTheme=this.handleToggleTheme.bind(this)
       this.handleFirstTheme=this.handleFirstTheme.bind(this)
    }

    handleToggleTheme(id){
       if(id){
         this.props.action.get_theme(id)
       }
    }
    handleFirstTheme(){
       this.props.action.get_list_data()
    }
    render(){
      const themeList=this.props.themeLists.map(item => {
           return (
              <MenuItem key={item.id} onClick={this.handleToggleTheme.bind(null,item.id) }>{item.name}</MenuItem>
           )
       })
      return(
       <div className="header">
          知乎日报custome
          <span className="downArrow"></span>
          <ul>
              <MenuItem onClick={this.handleFirstTheme}>首页</MenuItem>
              {themeList}
          </ul>
       </div>
      );
   }
}
