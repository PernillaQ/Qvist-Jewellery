import React, { Component } from 'react'
import './About.css'
import pernilla from './../App/pernilla.png'
import welding from './../App/svetsloppan.png'

class About extends Component {
  render () {
    return (
      <div className='About-wrapper'>
        <div className='About-h2-wrapper' id='about'>
          <h2>Story</h2>
        </div>
        <img src={pernilla} alt='A portrait of Pernilla Qvist founder of Qvist jewellery' />
        <img src={welding} alt= 'A welding residual' />
        <p> My name is Pernilla Qvist and I am a contemporary silversmith and jeweler.<br />
            I was born in 1983 in Luleå in the very northern parts of Sweden.
            Growing up under the cold winters majestic northern ligths and the
            bright midnight sun, creative striving grew.  <br />
            As a child I found something on a dusty workshop floor, that would be the beginning of a great love.
            I still remember how the smell of iron made me nauseous.
            It was a welding residual and it was the most beautiful thing I had ever seen.<br/>
            My jewellery comes from hidden desires, vivid dreams and distant
            memories. Often influenced by old craftsmanship traditions.
        </p>
      </div>
    )
  }
}

export default About
