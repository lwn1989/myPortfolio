import React from 'react'

export default class About extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.skillBar.bind(this))
  }
  componentWillUnmount () {
    window.removeEventListener('scroll', this.skillBar.bind(this))
  }

  skillBar () {
    var currentPosition = window.scrollY
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (currentPosition > 800) {
        document.getElementById('html').style.width = '90%'
        document.getElementById('css').style.width = '80%'
        document.getElementById('js').style.width = '70%'
        document.getElementById('react').style.width = '75%'
        document.getElementById('jquery').style.width = '70%'
        document.getElementById('ps').style.width = '40%'
      } else if (currentPosition > 430) {
        document.getElementById('myPhoto').style.opacity = '1'
      } else {
        document.getElementById('html').style.width = '0'
        document.getElementById('css').style.width = '0'
        document.getElementById('js').style.width = '0'
        document.getElementById('react').style.width = '0'
        document.getElementById('jquery').style.width = '0'
        document.getElementById('ps').style.width = '0'
        document.getElementById('myPhoto').style.opacity = '0'
      }
    } else {
      if (currentPosition > 430) {
        document.getElementById('html').style.width = '90%'
        document.getElementById('css').style.width = '80%'
        document.getElementById('js').style.width = '70%'
        document.getElementById('react').style.width = '75%'
        document.getElementById('jquery').style.width = '70%'
        document.getElementById('ps').style.width = '40%'
        document.getElementById('myPhoto').style.opacity = '1'
      } else {
        document.getElementById('html').style.width = '0'
        document.getElementById('css').style.width = '0'
        document.getElementById('js').style.width = '0'
        document.getElementById('react').style.width = '0'
        document.getElementById('jquery').style.width = '0'
        document.getElementById('ps').style.width = '0'
        document.getElementById('myPhoto').style.opacity = '0'
      }
    }
  }
  render () {
    return (
      <div className='about' id='about' >
        <div id='myPhoto' className='photo'>
          <img src='img/myphoto1.jpg' />
        </div>
        <div className='discription'>
          <p className='title'>
            <i className='fa fa-address-card-o' aria-hidden='true' />
            About me
          </p>
          <p>
            My name is Weinan Li, I'm a passionate junior front end developer and have more than 2 years programming experience using Matlab and Python. I am eager to learn new technologies and improve my skills.
          </p>
          <p> I love all beautiful things, and also love to build clean, elegant web pages and apps.
          </p>
          <p> While coding, Google is always my best friend.</p>
          <p> I've just graduated from university with master degree of electrical engineering and looking for the first job. If you are interested, please call me or write me Email.</p>
        </div>
        <div className='skills' >
          <p className='title'>
            <i className='fa fa-desktop' aria-hidden='true' />
            Skills
          </p>
          <ul className='skillList'>
            <li><span>HTML5</span><div id='html' className='underline html' /></li>
            <li><span>CSS3</span><div id='css' className='underline css' /></li>
            <li><span>Javascript</span><div id='js' className='underline js' /></li>
            <li><span>ReactJS</span><div id='react' className='underline react' /></li>
            <li><span>JQuery</span><div id='jquery' className='underline jquery' /></li>
            <li><span>Photoshop</span><div id='ps' className='underline ps' /></li>
          </ul>
        </div>
      </div>
    )
  }
}
