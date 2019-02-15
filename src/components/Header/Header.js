import React, { Component } from 'react'
import './Header.css'
import logo from './graylogo.png'
import Canvas from './../Canvas/Canvas.js'

class Header extends Component {
  render () {
    return (
      <div className='App-header-wrapper'>
        <header className='App-header' id='home'>
          <Canvas />
          <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1294 690.5'>
            <polyline className='App-headerLine' points='14.5 34 1278.5 34 1278.5 625 876.5 625' fill='none' stroke='#464646' strokeMiterlimit='10' strokeWidth='1' />
          </svg>
          <img src={logo} className='logo' alt='logotype' />
          <div className='App-h1-wrapper'>
            <div className='vividDream'>
              <h1> Vivid </h1>
              <h1> dreams </h1>
            </div>
            <div className='hiddenDesires'>
              <h1> Hidden </h1>
              <h1> desires </h1>
            </div>
            <div className='and'>
              <h1> & </h1>
            </div>
            <div className='distantMemories'>
              <h1> Distant </h1>
              <h1> Memories </h1>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
