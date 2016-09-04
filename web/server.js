var express = require('express')
  , logger = require('morgan')
  , app = express()
  , bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({
  extended: true
}))

var routes = require('./routes')(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
