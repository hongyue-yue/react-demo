const themeList= (state=[],action) =>{
   switch(action.type){
     case 'LOAD_THEMES_LIST':
      return action.list
     default:
        return state
   }
}
const mainList=(state=[],action) =>{
  switch (action.type) {
    case 'GET_LATEST':
			return action.data.data.stories
    default:
      return state
  }
}
const ThemesContainer=(state=[],action) =>{
  switch (action.type) {
    case 'GET_THEME':
      return action.theme.data.data.stories
    default:
      return state
  }
}
/*const theme=(state={},action) =>{
   switch (action.type) {
     case 'GET_THEME':
        return Object.assign({}, action.theme)
     default:

   }
}*/
export {themeList,mainList,ThemesContainer}
