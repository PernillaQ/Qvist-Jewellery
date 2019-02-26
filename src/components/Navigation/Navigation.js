import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navigation.css'

class Navbar extends Component {
  render () {
    return (
      <div className='Navigation'>
        <nav>
          <ul>
            <li><Link to='#collections'>Collections</Link></li>
            <li><Link to='#about'>About</Link></li>
            <li><Link to='#retailers'>Retailers</Link></li>
            <li><Link to='#contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>

    )
  }
}

export default Navbar
