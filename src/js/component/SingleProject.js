import React from 'react'
import FloatingText from '../component/FloatingText.js'

export default class SingleProject extends React.Component {
  render () {
    var { type, gradientGrade } = this.props
    var rellaxDivStyle
    var itemColor
    var containerStyle
    if (window.matchMedia('(max-width: 767px)').matches) {
      type = 2
      gradientGrade = 6
    }
    switch (type) {
      case 0:
        rellaxDivStyle = {backgroundImage: 'linear-gradient(rgba(0,0,0,' + 0.1 * gradientGrade + '), rgba(0,0,0,' + 0.1 * gradientGrade + ')), url(' + this.props.imgAddr + ')', width: '80%', left: '10%', top: '50px'}
        containerStyle = {justifyContent: 'center'}
        itemColor = 'white'
        break
      case 1:
        rellaxDivStyle = {backgroundImage: 'linear-gradient(rgba(0,0,0,' + 0.1 * gradientGrade + '), rgba(0,0,0,' + 0.1 * gradientGrade + ')), url(' + this.props.imgAddr + ')', width: '40%', top: '0', left: '10%'}
        containerStyle = {justifyContent: 'flex-end', paddingRight: '5%'}
        itemColor = 'black'
        break
      case 2:
        rellaxDivStyle = {backgroundImage: 'linear-gradient(rgba(0,0,0,' + 0.1 * gradientGrade + '), rgba(0,0,0,' + 0.1 * gradientGrade + ')), url(' + this.props.imgAddr + ')', width: '100%', top: '0', left: '0'}
        containerStyle = {justifyContent: 'center'}
        itemColor = 'white'
        break
      case 3:
        rellaxDivStyle = {backgroundImage: 'linear-gradient(rgba(0,0,0,' + 0.1 * gradientGrade + '), rgba(0,0,0,' + 0.1 * gradientGrade + ')), url(' + this.props.imgAddr + ')', width: '40%', top: '0', left: '50%'}
        containerStyle = {justifyContent: 'flex-start', paddingLeft: '5%'}
        itemColor = 'black'
        break
    }
    return (
      <div className='singleProject'>
        <div className='blankSp' />
        <div className='rellaxContainer' style={containerStyle}>
          <div className='rellax rellaxDiv' style={rellaxDivStyle} data-rellax-percentage='0.5' data-rellax-speed='-2' / >
          <FloatingText textId={this.props.textId} color={itemColor} firLine={this.props.firLine} secLine={this.props.secLine} thiLine={this.props.thiLine} fouLine={this.props.fouLine} link={this.props.link} />
        </div>
      </div >
    )
  }
}
