import React, { Component } from 'react'
import './../Collections.css'
import ring from './../CollectionImages/CarbonCityRing.png'
import tiara from './../CollectionImages/Tiara.png'
import { HashLink as Link } from 'react-router-hash-link'

class TheCity extends Component {

  /* getDetailInfo = (collection, key) => {
    console.log(collection)
    console.log(key) //finns
    const { allCityPosts, allDesertPosts } = this.props
    let coll = ''

    // show choosen jewellery info
    collection === 'city'?  coll = allCityPosts : coll = allDesertPosts
    let filterList = coll.map(post =>
     post.key === key ?
    <div className="Collections-bangle" key={post.key}>
      <img src={post.value.url}alt="a Piece of jewellery"/>
      <h3>{post.value.title}</h3>
      <p>{post.value.content}</p>
<button className='btn-1' onClick={()=>{this.show('collection')}}><span>View More</span></button>
    </div> : ''
  )
  return filterList

} */
  render () {
    const { showAllJewels, detailId, detailView, theCity, theDesert } = this.props
    let cssStyling = ''
    let header = ''

    if (theCity) {
      header = 'The city'
    }
    if (theDesert) {
      header = 'The Desert'
    }

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
            {theCity &&
            <div>
              {this.props.funcPosts('city')}
            </div>}
            {theDesert &&
            <div>
              {this.props.funcPosts('desert')}
            </div>}
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
