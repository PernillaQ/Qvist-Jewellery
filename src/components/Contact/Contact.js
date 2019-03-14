import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='Contact-wrapper' id='contact'>
        <h2>Contact</h2>
        <p>Retailers, press and regular people feel welcome to say hello.</p>
        <div className='Contact-mail'>
          <a href='mailto:pernilla@qvistjewellery.com' className='fa fa-envelope-o'> Hello</a>
        </div>
      </div>
    )
  }
}

export default Contact
