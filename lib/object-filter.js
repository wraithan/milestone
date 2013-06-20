var through = require('through')

module.exports = function() {
  return through(function write(data) {
    if (data.type === 'object') {
      this.queue(data.value)
    }
  })
}