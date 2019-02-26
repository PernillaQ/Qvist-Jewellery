import React, { Component } from 'react'
import './Retailers.css'
import nordic from './RetailersImages/Nordiska.png'
import gothenburg from './RetailersImages/Gothenburg.png'
import alice from './RetailersImages/AliceF.png'
import wild from './RetailersImages/WildNArrow.png'

class Retailers extends Component {
  render () {
    return (
      <div className='Retailers'>
        <h2>Retailers</h2>
        <div className='Retailers-wrapper' id='retailers'>
          <div className='Retailers1'>
            <div className='NordicMuseum'>
              <img src={nordic} alt='The nordic museum´s logotype' />
              <h3>The Nordic Museum</h3>
              <p>Stockholm - Sweden</p>
            </div>
            <div className='GothenburgMuseum'>
              <img src={gothenburg} alt='The townmuseum of Gothenburgs logotype' />
              <h3>The Gothenburg Townmuseum</h3>
              <p>Gothenburg - Sweden</p>
            </div>
          </div>
          <div className='Retailers2'>
            <div className='GaleriaAlice'>
              <img src={alice} alt='Logotype of galeria Alice Floriano' />
              <h3>Galeria Alice Floriano</h3>
              <p>Porto Alegre - Brazil</p>
            </div>
            <div className='WildNArrow'>
              <img src={wild} alt='Logotype of wild and arrow' />
              <h3>Wild & Arrow</h3>
              <p>Stockholm - Sweden</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Retailers
