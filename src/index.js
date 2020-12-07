import * as DomUtils from './utils/DomUtils.js'

const time = (new Date()).toLocaleString()
DomUtils.select('#content')[0].innerHTML = `The time now is ${time}`
