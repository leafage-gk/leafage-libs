const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

const scroll = (to) => {
  const duration = 1000
  const start = window.pageYOffset
  const change = to - start
  const increment = 10

  let currentTime = 0
  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    window.scrollTo(0, val)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    } else {
      window.scrollTo(0, to)
    }
  }
  animateScroll()
}

export default scroll
