import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './../Collections.css'
import earcuffs from './../CollectionImages/desertNight.png'
import ring from './../CollectionImages/UrbanDesertRingSilver.png'

class TheDesert extends Component {
  render () {
    let cssStyling = ''
    const {  showAllJewels } = this.props
    if (  showAllJewels === true ){
        cssStyling = 'TheDesertJewellery-wrapper'
    }
    if (  showAllJewels === false ){
      cssStyling = 'jewelleryInfo-wrapper'
    }
    return (
      <div className={cssStyling}>
          <h3>The Desert</h3>
          { showAllJewels &&
            <div className='TheDesert-jewellery' id='theDesertJewellery' onClick={()=>{this.props.funcShow('desertDetail')}}>>
            <img src={earcuffs} className='Collections-bangle' alt='bangle' />
            <h4>Desert Nights earcuffs</h4>
            </div>}
          { showAllJewels &&
            <div className='TheDesert-jewellery' id='theDesertJewellery' onClick={()=>{this.props.funcShow('desertDetail')}}>
            <img src={ring} className='Collections-bangle' alt='bangle' />
            <h4>Urban desert ring silver</h4>
          </div>
        }
          {!showAllJewels &&
            <div className= 'jewelleryInfo'>
                <img src={earcuffs} className='Collections-bangle' alt='bangle' />
                <h4>Desert Nights earcuffs</h4>
                <p>bla bla bla info om smycket, massor till och med här ska det stå allt möjligt...jajajajjjjajaj.forsätt simma</p>
                <Link to="#theDesertJewellery"><button onClick={()=> {this.props.funcHide('closeDetailView')}}>X</button></Link>
            </div>
          }
          { showAllJewels &&
            <Link to="#theDesert"><button onClick={()=>{this.props.funcHide('closeAllDesertJewels')}}>X</button></Link>}
        </div>
    )
  }
}

export default TheDesert
