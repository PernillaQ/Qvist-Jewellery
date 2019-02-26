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
      cssStyling = 'Detailview-collection-wrapper' // Detailview-collection-wrapper och nedan collection
    }
    if (showAllJewels === false) {
      cssStyling = 'Detailview-detailinfo-wrapper' // jewelleryDetail?
    }

    return (
      <div className={cssStyling}>
        <h3>{header}</h3>
        { showAllJewels && // images of all city collections
          <div className='Detailview-collection' id='collection'>
            {this.props.funcPosts(detailView)}
          </div>}
        {!showAllJewels && // single jewellery info
        <div className='Detailview-detailinfo' id='detailview'>
          {this.props.funcDetail(detailView, detailId)}
        </div>}
        { showAllJewels &&
          <Link to='#introview'><button onClick={() => { this.props.funcHide('closeAllJewels') }}>X</button></Link>}
      </div>
    )
  }
}

export default TheCity
