import axios from 'axios'

export const load_themes_list_data= () => {
	return (dispatch, getState) => {
		if(getState().themeList.length > 0) {
			return;
		}
		 axios.get('/api/themesList').then(function(data){
       dispatch(LOAD_THEMES_LIST(data.data.data.others))
		 })

	}
}
export const get_list_data=()=>{
   return(dispatch,getState)=>{
      axios.get('/api/topStory').then(function(data){
         dispatch(GET_LATEST(data.data))
			})
   }
}
export const get_theme=(id)=>{
  return (dispatch)=>{
     axios.get('/api/theme/',{params:{id}}).then(function(data){
         dispatch(GET_THEME(data))
		 })

  }
}
export const LOAD_THEMES_LIST =(list)=>{
   return {
		   type: 'LOAD_THEMES_LIST',
		   list
	}
}
export const GET_LATEST = (data) => {
	return {
		type: 'GET_LATEST',
		data
	}
}
export const GET_THEME = (theme) => {
	return {
		type: 'GET_THEME',
		theme
	}
}
