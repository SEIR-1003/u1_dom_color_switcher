var buttons = $('li')

function changeColor () {
  const color = $(this).attr('class')
  $('body').toggleClass(color)
}

buttons.on('click', changeColor)
