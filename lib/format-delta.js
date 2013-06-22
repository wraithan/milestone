var second = 1000
  , minute = second*60
  , hour = minute*60
  , day = hour*24
  , month = day*30
  , year = day*365.24
  , places = 2

module.exports = function(delta) {
  if (delta < second) {
    return delta + ' miliseconds'
  } else if (delta < minute) {
    return (delta/second).toFixed(places) + ' seconds'
  } else if (delta < hour) {
    return (delta/minute).toFixed(places) + ' minutes'
  } else if (delta < day) {
    return (delta/hour).toFixed(places) + ' hours'
  } else if (delta < month) {
    return (delta/day).toFixed(places) + ' days'
  } else if (delta < year) {
    return (delta/month).toFixed(places) + ' months'
  } else {
    return (delta/year).toFixed(places) + ' years'
  }
}