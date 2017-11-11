var express = require('express')
var path = require('path')
var axios = require('axios')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*',
        //'Content-Type': 'application/json;charset=utf-8'
    })
    next()
})
var getListAPI=function(req,res){
  axios.get('http://news-at.zhihu.com/api/4/news/latest').then(function(data) {
   res.send(data)
 })
}
var getThemesListAPI=function(req,res){
  axios.get('http://news-at.zhihu.com/api/4/themes').then(function(data) {
    res.send(data)
 })
}
var getThemeAPI=function(req,res){
  axios.get('http://news-at.zhihu.com/api/4/theme/' + req.query.id).then(function(data) {
		res.send(data)
	})
}

app.get('/api/topStory', getListAPI)
app.get('/api/themesList', getThemesListAPI)
app.get('/api/theme/*', getThemeAPI)

//api end

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(4000, function() {
	console.log('App is running on port 4000.')
})
