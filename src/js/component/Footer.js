import React from 'react'

export default class Footer extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.checkInView.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.checkInView.bind(this))
  }

  checkInView () {
    if (this.isScrolledIntoView(document.querySelector('.footer'))) {
      document.querySelector('.git').style.opacity = '1'
      setTimeout(() => {
        document.querySelector('.codepen').style.opacity = '1'
      }, 200)
      setTimeout(() => {
        document.querySelector('.google').style.opacity = '1'
      }, 400)
      setTimeout(() => {
        document.querySelector('.twitter').style.opacity = '1'
      }, 600)
    } else {
      document.querySelector('.git').style.opacity = '0'
      document.querySelector('.codepen').style.opacity = '0'
      document.querySelector('.google').style.opacity = '0'
      document.querySelector('.twitter').style.opacity = '0'
    }
  }

  isScrolledIntoView =(el) => {
    var elemTop = el.getBoundingClientRect().top
    var elemBottom = el.getBoundingClientRect().bottom
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight + 100)
    return isVisible
  }

  render () {
    return (
      <div className='footer' id='contact'>
        <p className='tit'>Contact Me</p>
        <p>weinanxli@gmail.com</p>
        <p>+49 17657650712</p>
        <ul className='links'>
          <li className='git'><a target='_blank' href='https://github.com/lwn1989'><i className='fa fa-github fa-lg fa-fw' /></a></li>
          <li className='codepen'><a target='_blank' href='https://codepen.io/lwn1989/pens/public/'><i className='fa fa-codepen fa-lg fa-fw' /></a></li>
          <li className='google'><a target='_blank' href='https://plus.google.com/u/0/116895179367981351690'><i className='fa fa-google-plus fa-lg fa-fw' /></a></li>
          <li className='twitter'><a target='_blank' href='https://twitter.com/Erniiiiiiie'><i className='fa fa-twitter fa-lg fa-fw' /></a></li>
        </ul>
        <div className='copyright'>
          <p>©2017 Weinan Li. All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}
