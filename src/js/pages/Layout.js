import React from 'react'
import Rellax from '../rellax.js'

import Nav from '../component/Nav.js'
import Cover from '../pages/Cover.js'
import About from '../pages/About.js'
import Portfolio from '../pages/Portfolio.js'
import Footer from '../component/Footer.js'

class Layout extends React.Component {
  constructor () {
    super()
    this.state = {width: 0, height: 0}
    this.rellax = null
  }
  componentDidMount =() => {
    this.rellax = new Rellax('.rellax', {center: true})
    window.addEventListener('resize', this.updateDimensions)
    if (window.innerWidth < 768) {
      this.rellax.destroy()
    }
  }
  componentWillUnmount= () => {
    window.removeEventListener('resize', this.updateDimensions)
  }
  updateDimensions= () => {
    if (window.innerWidth >= 768) {
      this.rellax.destroy()
    }
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  componentDidUpdate (_, prevState) {
    if (window.innerWidth >= 768) {
      this.rellax = new Rellax('.rellax', {center: true})
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <Cover key={this.state.width + 100} />
        <About />
        <Portfolio key={this.state.width} />
        <Footer />
      </div>
    )
  }
}

export default Layout
