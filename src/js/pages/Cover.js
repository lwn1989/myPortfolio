import React from 'react'

export default class Cover extends React.Component {
  componentWillUnmount () {
    window.removeEventListener('scroll', this.changeOpa.bind(this))
  }
  changeOpa () {
    document.getElementById('arrowDown').style.opacity = '1'
  }
  consoleText (words, id, colors) {
    if (colors === undefined) colors = ['#fff']
    var visible = true
    var con = document.getElementById('console')
    var letterCount = 1
    var x = 1
    var waiting = false
    var target = document.getElementById(id)
    var previousWords = ''
    var wordCount = 0
    var letterCountSp = 0
    var replace = 'WALL.E..'
    var replaced = false
    target.setAttribute('style', 'color:' + colors[0])
    var showCase = window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true
        window.setTimeout(function () {
          var usedColor = colors.shift()
          colors.push(usedColor)
          var usedWord = words.shift()
          words.push(usedWord)
          x = 1
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x
          waiting = false
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true
        wordCount++
        if (wordCount === words.length) {
          clearInterval(showCase)
        } else {
          previousWords = previousWords + words[0] + '<br />'
          window.setTimeout(function () {
            letterCount = 0
            waiting = false
          }, 600)
        }
      } else if (waiting === false) {
        if (wordCount === 1 && !replaced) {
          letterCountSp++
          if (letterCountSp >= 11 && letterCountSp < 24) {
            target.innerHTML = previousWords + 'My Name is ' + replace.substring(0, (letterCountSp - 11))
          } else if (letterCountSp >= 24 && letterCountSp < 28) {
            target.innerHTML = previousWords + 'My Name is ' + replace.substring(0, (28 - letterCountSp))
          } else if (letterCountSp === 28) {
            replaced = true
          } else {
            letterCount += x
            target.innerHTML = previousWords + words[0].substring(0, letterCountSp)
          }
        } else {
          target.innerHTML = previousWords + words[0].substring(0, letterCount)
          letterCount += x
        }
      }
    }, 120)
    window.setInterval(function () {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false
      } else {
        con.className = 'console-underscore'
        visible = true
      }
    }, 400)
  }

  componentDidMount () {
    this.consoleText(['Hello World My Friiiiiend!', 'My Name is Weinan', "I'm a Front End Developer", "Na~ just kidding, I'm a Robot:)"], 'text', ['#d9d9d9'])
    setTimeout(() => {
      document.getElementById('arrowDown').style.opacity = '1'
    }, 21000)
    window.addEventListener('scroll', this.changeOpa.bind(this))
  }

  render () {
    return (
      <div className='cover'>
        <div className='parallax rellax' data-rellax-speed='-4' />
        <div className='console-container'>
          <span id='text' />
          <div className='console-underscore' id='console'>
          &#95;
             </div>
        </div>
        <div id='arrowDown'>
          <a>
            <i className='fa  fa-angle-down fa-3x' />
          </a>
        </div>
      </div>
    )
  }
}
