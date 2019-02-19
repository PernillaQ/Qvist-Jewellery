import React, { Component } from 'react'
import './Collections.css'
import bangle from './CollectionImages/bangleWeb.png'
import earcuffs from './CollectionImages/desertNight.png'
import TheCity from './TheCity/TheCity.js'
import TheDesert from './TheDesert/theDesert.js'

class Collections extends Component {

  show = (collection, index) => {
    const { toggleTheCity, toggleTheDesert, toggleShowAllJewels } = this.props

    if(collection === 'desert') {
      toggleTheCity(false)
      toggleTheDesert(true)
      toggleShowAllJewels(true)
    }
    if(collection === 'city') {
       toggleTheCity(true)
       toggleTheDesert(false)
       toggleShowAllJewels(true)
    }
    if(collection === 'cityDetail'||collection === 'desertDetail'){
      toggleShowAllJewels(false)
    }
  }

  hideTheJewels = (collection) => {
    const { toggleTheCity, toggleTheDesert, toggleShowAllJewels } = this.props
  if (collection === 'closeAllCityJewels'||collection === 'closeAllDesertJewels' ){
    toggleTheCity(false)
    toggleTheDesert(false)
  }
  if (collection === 'closeDetailView'){
    toggleShowAllJewels(true)
  }

}
  render () {
    const { theCity, theDesert } = this.props
    console.log(theCity, theDesert)
    return (
      <div className='Collections-wrapper' id='collections'>
        <div className='Collections-hexagon'>
          <div className='Collections-theCity-wrapper'>
            <img src={bangle} className='Collections-bangle' alt='bangle' />
            <h3 id='theCity'>The city</h3>
            <p>Birch bark Crafts has been found in Swedn since Thousands of years thanks to the
              vast birch forests of the north. Out of This ancient handicraft a new breed of jewels grew. </p>
            <button className='btn-1' onClick={()=>{this.show('city')}}><span>View More</span></button>
          </div>
          <svg id='2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 70'>
            <line className='App-collectionsLine' x1='0.5' x2='0.5' y2='300' fill='none' stroke='#464646' strokeMiterlimit='10' strokeWidth='0.2' />
          </svg>
          <h2>Collections</h2>
          <div className='Collections-theDesert-wrapper'>
            <img src={earcuffs} className='App-earcuff' alt='earcuffs' />
            <h3 id='theDesert'>The desert</h3>
            <p>The Desert collections grew out of the very depth of desires, a yearning to
              wander into the silent emptiness of the desert night. Ode to the nomads since ages of time. </p>
            <button className='btn-1' onClick={()=>{this.show('desert')}}><span>View More</span></button>
          </div>
        </div>
        {theCity &&
        <div className='theCity'>
        <TheCity {...this.props} funcHide={this.hideTheJewels} funcShow={this.show}/>
        </div>}
        {theDesert &&
        <div className='theDesert'>
      <TheDesert {...this.props} funcHide={this.hideTheJewels} funcShow={this.show}/>
    </div>}
      </div>

    )
  }
}

export default Collections
