$('#year').text(new Date().getFullYear())

$('.carousel').carousel({
  interval: 4000,
  keyboard: true,
  pause: 'hover',
  wrap: true
})