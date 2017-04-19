import React from "react"
import MenuItem from "./menuItem"
import "../style/style.scss"

export default class Header extends React.Component{
    constructor(props,context) {
       super(props,context);
       this.state={animate:false,aniCon:false}
       this.handleToggleTheme=this.handleToggleTheme.bind(this)
       this.handleFirstTheme=this.handleFirstTheme.bind(this)
       this.animateIn=this.animateIn.bind(this)
       this.animeteOutUl=this.animeteOutUl.bind(this)
       this.animateCon=this.animateCon.bind(this)
    }
    handleToggleTheme(id){
      
      this.context.router.push(`/theme/${id}`)
       /*if(id){
         this.props.action.get_theme(id)
       }*/
       this.animeteOutUl()
    }
    handleFirstTheme(){
       this.context.router.push(`/`)
       this.animeteOutUl()
    }
    animateIn(){
      this.setState({aniCon:true,animate:true});
    }
    animeteOutUl(){
      this.setState({animate:false});
      setTimeout(()=>this.animateCon(),1000)
    }
    animateCon(){
      this.setState({aniCon:false});
    }
    render(){
      const themeList=this.props.themeLists.map(item => {
           return (
              <MenuItem key={item.id} onClick={this.handleToggleTheme.bind(null,item.id) }>{item.name}</MenuItem>
           )
       })
      return(
       <div className="header">
          <div className="headerTitle">知乎日报custome</div>
          <span className="downArrow" onClick={this.animateIn}></span>
          <div className={this.state.aniCon ? 'headerCover open' : 'headerCover close'} onClick={this.animeteOutUl}>
            <ul className={this.state.animate?'slideInLeft ':'slideOutLeft'}>
              <MenuItem onClick={this.handleFirstTheme}>首页</MenuItem>
              {themeList}
            </ul>
          </div>
       </div>
      );
   }
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}
