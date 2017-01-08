pict = require('./pict');

module.exports = function (app) {
  var pug = require('pug')
  
  app.get('/', function (req, res, next) {
    try {
      var template = pug.compileFile(__dirname + '/source/templates/home.pug')
      var html = template()
      res.send(html)
    } catch (e) {
      next(e)
    }
  })

  app.post('/', function (req, res, next) {
    var model = req.body.pict;
    pict.execute(model, function (err, pictResult) {
      try {
        var template = pug.compileFile(__dirname + '/source/templates/home.pug')
        var html = template({
          input: model,
          result: pictResult
        })
        res.send(html)
      } catch (e) {
        next(e)
      }
    });
  });

  app.get('/about', function (req, res, next) {
    try {
      var template = pug.compileFile(__dirname + '/source/templates/about.pug')
      var html = template()
      res.send(html)
    } catch (e) {
      next(e)
    }
  })
}
