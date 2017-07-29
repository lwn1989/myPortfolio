import React from 'react'
import FloatingText from '../component/FloatingText.js'
import SingleProject from '../component/SingleProject.js'

export default class Portfolio extends React.Component {
  render () {
    return (
      <div id='portfolio' className='portfolio'>
        <div className='titleDiv'>
          <div className='titleBk rellax' data-rellax-percentage='0.5' data-rellax-speed='-2' / >
          <div className='title'>
            <FloatingText textId='titleText' color='white' firLine='Console Log' secLine='#Portfolio' thiLine='"Let the beauty of what you love and what to do."' />
          </div>
        </div>
        <div className='projects'>
          <SingleProject textId='pj1' gradientGrade={6} imgAddr={'img/MovieTrailerSite.png'} type={0} firLine='Web Pages' secLine='Movie Trailer Website' thiLine='This is a movie website which is also a single page app coded with ReactJs. It is responsive, easy to use. The data is obtained using the movie DB API and processed by Mobx, and can be updated each 5 minutes automatically. Users can get the information of latest movies and TV shows, save the movies and shows to the collection and search the content they want.' fouLine='View Project' link='http://ec2-52-58-218-132.eu-central-1.compute.amazonaws.com:9000/movieApp/' />
          <SingleProject textId='pj2' gradientGrade={3} imgAddr={'img/portSite.png'} type={1} firLine='Web Pages' secLine='My Portfolio Website' thiLine='This website is built from scratch with React Framework. Most effects are coded by myself, except the image parallax effect is realised by rellax.js, and smooth scrolling effect is made with scroll-into-view plugin. Inspired by other elegant websites, I tried the best to keep it clean, but it still needs to be imporved.' fouLine='View Project' link='#' />
          <SingleProject textId='pj3' gradientGrade={3} imgAddr={'img/TwitchStreamer.png'} type={2} firLine='Web Pages' secLine='Twitch Streamer Status Page' thiLine='This page shows the online status and the live title of your favorite channels. The channels are changeable. It is built with HTML CSS and Jquery and the data is obtained from Twitch API.' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/pPPxmN/xnkabdJndEPM' />
          <SingleProject textId='pj4' gradientGrade={3} imgAddr={'img/simonGame.png'} type={3} firLine='Web Game App' secLine='Simon Game' thiLine='Simon game creates a series of tones and lights and requires the user to repeat the series. The game interface is totally redesigned which is the main difference from the traditional game. The game is build with Html, css, and Jquery' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/JNBZyN/dGrXWXewNavM' />
          <SingleProject textId='pj5' gradientGrade={6} imgAddr={'img/Tic-Tac-Toe.png'} type={0} firLine='Web Game App' secLine='Tic Tac Toe' thiLine='Tic Tac Toe is free classic puzzle game also known as "noughts and crosses or sometimes X and O", the game is build with Jquery, html and css.' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/PmaZjQ/PNAvYLxwxdYr' />
          <SingleProject textId='pj6' gradientGrade={3} imgAddr={'img/PomodoroClock.png'} type={1} firLine='Web App' secLine='Pomodoro Clock' thiLine='Pomodoro clock is a time management tool that can help you increase your focus. Enjoy this lovely clock which is built by jquery html and css.' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/NjyLPJ/wQMPoZpvpgWk' />
          <SingleProject textId='pj7' gradientGrade={5} imgAddr={'img/simpleCalculator.png'} type={2} firLine='Web App' secLine='Simple Calculator' thiLine='This is a self designed calculator app. It is written by html, css and Jquery' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/bWrZWb/bYrdyGvEWaWA' />
          <SingleProject textId='pj8' gradientGrade={3} imgAddr={'img/wikiViewer.png'} type={3} firLine='Web App' secLine='Wikipedia Viewer' thiLine='This app can be used for searching content from wikipedia or reading random page. The app uses wiki official API. It is coded with html css and Jquery' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/Mmpred/DqADdEQXnDNA' />
          <SingleProject textId='pj9' gradientGrade={5} imgAddr={'img/weatherApp.png'} type={0} firLine='Web App' secLine='Weather App' thiLine='This is a html5 weather app, with animated weather icons. It shows date, temperature, location, wind speed and humidity. The temperature unit is clickable, it changes from celsius to fahrenheit. The api is from openweathermap.com' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/jmrXRw/bYAdyGvBvvQk' />
          <SingleProject textId='pj10' gradientGrade={2} imgAddr={'img/randomQuote.png'} type={1} firLine='Web App' secLine='Random Quote App' thiLine='This is a colorful random quote app, the font and background colors keep changing all the time. It is built with html css js and Api of quotesondesign.com.' fouLine='View Project' link='https://s.codepen.io/lwn1989/debug/zwqywa/mVMbGEqPWBnr' />
        </div>
      </div>
    )
  }
}
