exports.execute = function (model, cb) {
  var fs = require('fs');
  // write model to file
  fs.writeFile("/tmp/test", model, function(err) {
    if(err) {
      cb(err);
    }

    // execute pict
    var exec = require('child_process').exec;
    exec(__dirname + '/../pict/pict /tmp/test', function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
      cb(null, stdout);
    });
  });
}
