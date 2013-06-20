var http = require('http')
  , fs = require('fs')
  , hyperstream = require('hyperstream')
  , parse = require('json-parse-stream')
  , objectFilter = require('./lib/object-filter')
  , stringify = require('./lib/stringify')
  , milestone = require('./lib/milestone')


var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    var ms = milestone()
    fs.createReadStream(__dirname + '/index.html')
      .pipe(
        hyperstream({
          '.data': ms
        }))
      .pipe(res)
    fs.createReadStream(__dirname + '/milestones.json')
      .pipe(parse())
      .pipe(objectFilter())
      .pipe(stringify())
      .pipe(ms)
  }
})

var port = 3456
server.listen(port, function() {
  console.log('listening on: http://localhost:' + port)
})