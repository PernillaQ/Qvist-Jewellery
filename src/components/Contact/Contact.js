import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='Contact-wrapper' id='contact'>
        <h2>Contact</h2>
        <div className='Contact-mail'>
          <a href='mailto:pernilla@qvistjewellery.com'>Say hello</a>
          <a href='mailto:pernilla@qvistjewellery.com' className='fa fa-envelope-o' />
        </div>
      </div>
    )
  }
}

export default Contact
