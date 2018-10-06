const $ = require('jquery')

$('#year').text(new Date().getFullYear())

$('.carousel').carousel({
  interval: 500,
  keyboard: true,
  pause: 'hover',
  wrap: true
})

