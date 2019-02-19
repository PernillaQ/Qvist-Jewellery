import React, { Component } from 'react'
import './Footer.css'


class Footer extends Component {
  toAdmin = () => {
    const { toggleAdmin } = this.props
    toggleAdmin(true)
  }

  render () {
    return (
      <div className='footer-wrapper'>
      <a href="http://instagram.com/qvistjewellery?ref=badge" className="fa fa-instagram" ></a>
      <a href="http://facebook.com/qvistjewellery?ref=badge" className="fa fa-facebook" ></a>
      <button onClick={this.toAdmin}>Admin</button>
     </div>

    )
  }
}

export default Footer
