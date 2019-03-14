import React, { Component } from 'react'
import './../Collections.css'

class DetailView extends Component {
  render () {
    const { showAllJewels, detailId, detailView } = this.props
    let cssStyling = ''
    let header = detailView

    if (showAllJewels === true) {
      cssStyling = 'Detailview-collection-wrapper'
    }
    if (showAllJewels === false) {
      cssStyling = 'Detailview-detailinfo-wrapper'
    }
    let theCollection = this.props.funcPosts(detailView)
    let details = this.props.funcDetail(detailView, detailId)

    return (
      <div className={cssStyling}>
        <h3>{header}</h3>
        { showAllJewels && // images of all city collections
          <div className='DetailView-btn-wrapper'>
            <button onClick={() => { this.props.funcHide('closeAllJewels') }}>X</button>
          </div>}
        { showAllJewels &&
        <div className='Detailview-collection' id='collection'>
          {theCollection}
        </div>}
        {!showAllJewels && // single jewellery info
        <div className='Detailview-detailinfo' id='detailview'>
          {details}
        </div>}
      </div>
    )
  }
}

export default DetailView
