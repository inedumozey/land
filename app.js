AOS.init({
  duration: 1000,
  easing: 'ease',
  offset: 200,
  // once: true,
  // mirror: false
})


// don't go up
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  var containerElement = document.querySelector('.wraper')
  var optionsElement = document.querySelector('.options')
  var option1Element = document.querySelector('.op-1')
  var option2Element = document.querySelector('.op-2')

  var links1Element = document.querySelector('.links-1')
  var links2Element = document.querySelector('.links-2')

  // Hover over container to show .options
  containerElement.addEventListener('mouseenter', function () {
    optionsElement.style.display = 'flex'
  })

  containerElement.addEventListener('mouseleave', function () {
    optionsElement.style.display = 'none'
    links1Element.style.display = 'none' // Hide .links-1 as well
  })

  // Hover over .op-1 to show .links-1
  option1Element.addEventListener('mouseenter', function () {
    links1Element.style.display = 'block'
  })

  option1Element.addEventListener('mouseleave', function () {
    links1Element.style.display = 'none'
  })
  // Hover over .op-2 to show .links-2
  option2Element.addEventListener('mouseenter', function () {
    links2Element.style.display = 'block'
  })

  option2Element.addEventListener('mouseleave', function () {
    links2Element.style.display = 'none'
  })
})

// document.addEventListener('DOMContentLoaded', function () {
//   const showMoreLink = document.querySelector('.show-more')
//   const optionsWrapper = document.querySelector('.options-wraper')
//   const options = document.querySelector('.options')

//   showMoreLink.addEventListener('mouseenter', function () {
//     options.style.display = 'flex'
//   })

//   optionsWrapper.addEventListener('mouseleave', function () {
//     options.style.display = 'none'
//   })

//   document.addEventListener('mouseleave', function (event) {
//     if (!showMoreLink.contains(event.relatedTarget)) {
//       options.style.display = 'none'
//     }
//   })
// })
