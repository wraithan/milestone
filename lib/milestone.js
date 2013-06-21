var fs = require('fs')
  , hyperspace = require('hyperspace')
  , formatDelta = require('./format-delta')
  , msHtml = fs.readFileSync(__dirname + '/../milestone.html')

module.exports = function() {
  return hyperspace(msHtml, function(milestone) {
    var start = new Date(milestone.start)
    var mapping = {
      '.name': milestone.name
    , '.start': start.toString()
    }
    if (milestone.end) {
      var end = new Date(milestone.end)
      mapping['.end'] = end.toString()
      mapping['.delta'] = formatDelta(end - start)
    } else {
      mapping['.end'] = '-'
      mapping['.delta'] = formatDelta(Date.now() - start)
    }
    return mapping
  })
}