import React from 'react'

export default class FloatingText extends React.Component {
  isScrolledIntoView (el) {
    var elemTop = el.getBoundingClientRect().top
    var elemBottom = el.getBoundingClientRect().bottom
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    return isVisible
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollEffect.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollEffect.bind(this))
  }
  scrollEffect () {
    var scrollRes = this.isScrolledIntoView(document.getElementById(this.props.textId))
    if (scrollRes) {
      document.getElementById(this.props.textId).style.opacity = '1'
      document.getElementById(this.props.textId).style.paddingTop = '0'
      document.getElementById(this.props.textId).style.color = this.props.color
      document.querySelector('#' + this.props.textId + ' .underLine').style.backgroundColor = this.props.color
    } else {
      document.getElementById(this.props.textId).style.opacity = '0'
      document.getElementById(this.props.textId).style.paddingTop = '60px'
    }
  }
  render () {
    return (
      <div className='flText' id={this.props.textId}>
        <p className='firLine'> {this.props.hasOwnProperty('firLine') ? this.props.firLine : null}</p>
        <p className='secLine'> {this.props.hasOwnProperty('secLine') ? this.props.secLine : null}</p>
        <p className='thiLine'> {this.props.hasOwnProperty('thiLine') ? this.props.thiLine : null}</p>
        <div className='fouLine'><a target='_blank' href={this.props.hasOwnProperty('link') ? this.props.link : '#'}><div>{this.props.hasOwnProperty('fouLine') ? this.props.fouLine : null}<p className='underLine' /></div></a></div>
      </div>

    )
  }
}
