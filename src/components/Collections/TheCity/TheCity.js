import React, { Component } from 'react'
import './../Collections.css'
import bangle from './../CollectionImages/bangleWeb.png'
import ring from './../CollectionImages/CarbonCityRing.png'
import tiara from './../CollectionImages/Tiara.png'
import { HashLink as Link } from 'react-router-hash-link'

class TheCity extends Component {

  render () {
    let cssStyling = ''
    const { showAllJewels } = this.props
    if (showAllJewels === true) {
      cssStyling = 'TheCityJewellery-wrapper'
    }
    if (showAllJewels === false) {
      cssStyling = 'jewelleryInfo-wrapper'
    }

    return (
    /*
        <div className= 'jewelleryInfo-wrapper'>
          <div className= 'jewellerInfo'>
              <h3>The city</h3>
              <img src={bangle} className='Collections-bangle' alt='bangle' />
              <p>Birch bark Crafts has been found in Sweden since Thousands of years
                thanks to the vast birch forests of the north. Out of This ancient handicraft a new breed
                of jewels grew.</p>
              <h4>SULPHER CITY BANGLE.</h4>
              <p>All handmade Brass Bangle.
                • About 5 cm wide
                Sizes: Small 20 cm, Medium 22cm and Large 23.5cm.
            </div>
        </div>
      */
      <div className={cssStyling}>
        <h3>The city</h3>
        { showAllJewels &&
          <div className='allCityJewels-wrapper'>
            <div className='TheCity-jewellery' id='theCityJewellery' onClick={() => { this.props.funcShow('cityDetail', '1') }}>
              <img src={bangle} className='Collections-bangle' alt='bangle' />
            </div>
            <div className='TheCity-jewellery' id='theCityJewellery' onClick={() => { this.props.funcShow('cityDetail', '2') }}>
              <img src={tiara} className='Collections-ring' alt='ring' />
            </div>
            <div className='TheCity-jewellery' id='theCityJewellery' onClick={() => { this.props.funcShow('cityDetail', '3') }}>
              <img src={ring} className='Collections-ring' alt='ring' />
            </div>
          </div>}
        {!showAllJewels &&
        <div className='jewelleryInfo'>
          <img src={bangle} className='Collections-bangle' alt='bangle' />
          <h4>Sulpher city bangle</h4>
          <p>Birch bark Crafts has been found in Sweden since Thousands of years
                  thanks to the vast birch forests of the north. Out of This ancient handicraft a
                  new breed of jewels grew. All handmade Brass Bangle.
                  • About 5 cm wide
                  Sizes: Small 20 cm, Medium 22cm and Large 23.5cm.
                </p>
          <Link to='#theCityJewellery'><button onClick={() => { this.props.funcHide('closeDetailView') }}>X</button></Link>
        </div>}
        { showAllJewels &&
          <Link to='#theCity'><button onClick={() => { this.props.funcHide('closeAllCityJewels') }}>X</button></Link>}
      </div>
    )
  }
}

export default TheCity
