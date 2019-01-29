const progressDonut = (function($) {
  //background colour of inner circle
  const backgroundColor = '#fff'

  //font color of progress text
  const fontColor = '#000'

  //font size of progress text
  const fontSize = 40

  //radius of circle
  const donutRadius = 130

  //progress bar width
  const donutWidth = 96

  //background colour of circular progress Bar
  const donutBackground = 'transparent'

  //colour of circular progress bar
  const donutForeground = '#0073e6'

  /**
   * generate a progress donut
   * @param {string} target - The element
   * @param {string} progress - percentage out of 100, start with 0
   */
  var generate = function(target, progress) {
    $(target).circularloader({
      backgroundColor: backgroundColor,
      fontColor: fontColor,
      fontSize: fontSize,
      radius: donutRadius,
      progressBarBackground: donutBackground,
      progressBarColor: donutForeground,
      progressBarWidth: donutWidth,
      progressPercent: progress,
    })
    $(target)
      .next()
      .html('Progresso ' + progress + '%')
  }

  /**
   * update progress donut percentage
   * @param {string} target - The element
   * @param {string} progress - percentage out of 100, start with 0
   */
  var update = function(target, progress) {
    $(target).circularloader({
      progressPercent: progress,
    })
  }

  return {
    generate: generate,
    update: update,
  }
})($)
