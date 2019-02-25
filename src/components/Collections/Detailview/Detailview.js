import React, { Component } from 'react'
import './../Collections.css'
import { HashLink as Link } from 'react-router-hash-link'

class TheCity extends Component {

  render () {
    const { showAllJewels, detailId, detailView } = this.props
    console.log(detailView)
    let cssStyling = ''
    let header = detailView

    if (showAllJewels === true) {
      cssStyling = 'TheCityJewellery-wrapper'
    }
    if (showAllJewels === false) {
      cssStyling = 'jewelleryInfo-wrapper'
    }

    return (
      <div className={cssStyling}>
        <h3>{header}</h3>
        { showAllJewels && // images of all city collections
          <div className='allCityJewels-wrapper'>
            {this.props.funcPosts(detailView)}
          </div>}
        {!showAllJewels && // single jewellery info
        <div className='jewelleryInfo'>
          {this.props.funcDetail(detailView, detailId)}
        </div>}
        { showAllJewels &&
          <Link to='#theCity'><button onClick={() => { this.props.funcHide('closeAllJewels') }}>X</button></Link>}
      </div>
    )
  }
}

export default TheCity
