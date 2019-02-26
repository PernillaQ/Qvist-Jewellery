import React, { Component } from 'react'
import './Footer.css'
import { HashLink as Link } from 'react-router-hash-link'


class Footer extends Component {
  toAdmin = () => {
    const { toggleAdmin } = this.props
    toggleAdmin(true)
  }

  render () {
    return (
      <div className='Footer-wrapper'>
      <a href="http://instagram.com/qvistjewellery?ref=badge" className="fa fa-instagram" >
      </a>
      <a href="http://facebook.com/qvistjewellery?ref=badge" className="fa fa-facebook" >
      </a>
      <Link to='#admin'><button onClick={this.toAdmin}>Admin</button></Link>
     </div>

    )
  }
}

export default Footer
