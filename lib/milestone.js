var fs = require('fs')
  , hyperspace = require('hyperspace')
  , strftime = require('strftime')
  , formatDelta = require('./format-delta')
  , msHtml = fs.readFileSync(__dirname + '/../milestone.html')

function format(date) {
  return strftime('%B %d, %Y, %I:%M%P', date)
}

module.exports = function() {
  return hyperspace(msHtml, function(milestone) {
    var start = new Date(milestone.start)
    var mapping = {
      '.name': milestone.name
    , '.start': format(start)
    }
    if (milestone.end) {
      var end = new Date(milestone.end)
      mapping['.end'] = format(end)
      mapping['.delta'] = formatDelta(end - start)
    } else {
      mapping['.end'] = 'Ongoing'
      mapping['.delta'] = formatDelta(Date.now() - start)
    }
    return mapping
  })
}