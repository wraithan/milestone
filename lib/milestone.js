var fs = require('fs')
  , hyperspace = require('hyperspace')
  , msHtml = fs.readFileSync(__dirname + '/../milestone.html')

module.exports = function() {
  return hyperspace(msHtml, function(milestone) {
    var date = new Date(milestone.start)
    return {
      '.name': milestone.name,
      '.time': date.toString()
    }
  })
}