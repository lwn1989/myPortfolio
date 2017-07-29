import React from 'react'
import scrollIntoView from 'scroll-into-view'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.state = ({collapsed: true, width: 0, height: 0})
  }

  componentDidMount =() => {
    window.addEventListener('resize', this.updateDimensions)
    window.addEventListener('scroll', this.changeColor)
    this.changeColor()
  }
  componentWillUnmount= () => {
    window.removeEventListener('resize', this.updateDimensions)
    window.removeEventListener('scroll', this.changeColor)
  }
  updateDimensions= () => {
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  toggleClass () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }

  changeColor = () => {
    var currentPosition = window.scrollY
    if (this.state.collapsed) {
      if (currentPosition <= 255) {
        var colorProp = 'rgb(' + (255 - currentPosition).toString() + ',' + (255 - currentPosition).toString() + ',' + (255 - currentPosition).toString() + ')'
        document.getElementById('firstNav').style.color = colorProp
        var elemSet = document.getElementsByClassName('sp')
        Array.from(elemSet).forEach((item) => { item.style.background = colorProp })
        var elemSet2 = document.getElementsByClassName('icon')
        Array.from(elemSet2).forEach((item) => { item.style.color = colorProp })
        document.getElementById('firstNav').style.background = 'rgba(255,255,255,' + (currentPosition / 255 * 0.95).toString() + ')'
      } else {
        document.getElementById('firstNav').style.color = 'black'
        var elemSet5 = document.getElementsByClassName('sp')
        Array.from(elemSet5).forEach((item) => { item.style.background = 'black' })
        var elemSet4 = document.getElementsByClassName('icon')
        Array.from(elemSet4).forEach((item) => { item.style.color = 'black' })
        document.getElementById('firstNav').style.background = 'rgba(255,255,255, 0.95)'
      }
    } else {
      document.getElementById('firstNav').style.color = 'black'
      var elemSet3 = document.getElementsByClassName('icon')
      Array.from(elemSet3).forEach((item) => { item.style.color = 'black' })
      document.getElementById('firstNav').style.background = 'rgba(255,255,255,0.95)'
    }
  }
  componentDidUpdate (_, prevState) {
    this.changeColor()
  }

  scrollToAnchor (el) {
    scrollIntoView(document.querySelector(el), {align: {topOffset: 70}})
  }

  render () {
    var toggleIcon = this.state.collapsed ? 'icon fa fa-bars' : 'icon fa fa-times'
    var mainNavClass = this.state.collapsed ? 'mainNav' : 'mainNav mainNavCollapse'
    if (!this.state.collapsed) {
      if (window.matchMedia('(min-width:768px)').matches) {
        setTimeout(this.toggleClass.bind(this), 100)
      }
    }

    return (
      <div className='navbar'>
        <div id='firstNav'>
          <a className='toggle-icon' onClick={this.toggleClass.bind(this)}>
            <i className={toggleIcon} />
          </a>
          <ul className={mainNavClass}>
            <li><a className='spcSele' onClick={this.scrollToAnchor.bind(this, '#about')}>About Me</a><div className='sp' /></li>
            <li><a className='spcSele' onClick={this.scrollToAnchor.bind(this, '#portfolio')}>Portfolio</a><div className='sp' /></li>
            <li><a className='spcSele' onClick={this.scrollToAnchor.bind(this, '#contact')}>Contact</a><div className='sp' /></li>
          </ul>
          <span className='name'>WEINAN LI</span>
        </div>
        <div className='secNav' style={{transform: this.state.collapsed ? 'translate3d(0,-150%,0)' : 'translate3d(0,0%,0)', opacity: this.state.collapsed ? '0' : '0.95'}}>
          <div className='content'>
            <span className='listTitle'>Menu</span>
            <hr className='divider' />
            <ul>
              <li><a onClick={() => { this.scrollToAnchor('#about'); this.toggleClass() }}>About Me</a></li>
              <li><a onClick={() => { this.scrollToAnchor('#portfolio'); this.toggleClass() }}>Portfolio</a></li>
              <li><a onClick={() => { this.scrollToAnchor('#contact'); this.toggleClass() }}>Contact</a></li>
            </ul>
            <br />
            <p><span style={{fontWeight: 'bold'}}>Hire Me</span></p>
            <p>weinanxli@gmail.com</p>
            <p>+49 17657650712</p>
          </div>
        </div>
      </div>
    )
  }
}
