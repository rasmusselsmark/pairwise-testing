module.exports = function (app) {
  var pug = require('pug')
  
  app.get('/', function (req, res, next) {
    try {
      var template = pug.compileFile(__dirname + '/source/templates/homepage.pug')
      var html = template({ title: 'Home' })
      res.send(html)
    } catch (e) {
      next(e)
    }
  })

  app.get('/about', function (req, res, next) {
    try {
      var template = pug.compileFile(__dirname + '/source/templates/about.pug')
      var html = template({ title: 'About' })
      res.send(html)
    } catch (e) {
      next(e)
    }
  })

  app.post('/process', function (req, res, next) {
    try {
      var template = pug.compileFile(__dirname + '/source/templates/process.pug')
      var html = template({
        title: 'Process',
        result: req.body.pict
      })
      res.send(html)
    } catch (e) {
      next(e)
    }
  })
}
