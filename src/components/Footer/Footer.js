import React, { Component } from 'react'
//import { HashLink as Link } from 'react-router-hash-link';
import './Footer.css'


class Footer extends Component {
  toAdmin = () => {
    const { toggleAdmin } = this.props
    toggleAdmin(true)
  }

  render () {
    return (
      <div className='footer-wrapper'>
      <button onClick={this.toAdmin}>Admin</button>
     </div>

    )
  }
}

export default Footer
