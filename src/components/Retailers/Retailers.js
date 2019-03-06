import React, { Component } from 'react'
import './Retailers.css'
import firebase from './../../Utils/firebase.js'

class Retailers extends Component {
  
  componentWillMount(){
      firebase.database().ref(`retailers`).on('value', (snapshot) => {
      this.toRetailersArray(snapshot.val());
    })
  }

 toRetailersArray = (firebaseObject) => {
   const { setRetailers } = this.props
   let retail = []

   for(let item in firebaseObject){
      retail.push({key:item , value:firebaseObject[item]})
   }
   setRetailers(retail)
 }


 getRetailers = () => {
   const { retailers } = this.props;
   let res = retailers

   let retailersList = res.map(retail =>
   <div className="Retailers-info" key={retail.key}>
     <img src={retail.value.url}alt="Retailers logotype"/>
     <h4>{retail.value.title}</h4>
     <p>{retail.value.location}</p>
     <a rel="noopener noreferrer" href={retail.value.website} target="_blank">Visit website</a>
   </div>
 )
 return retailersList
}


  render () {
    let allRetailers = this.getRetailers()

    return (
      <div className='Retailers-wrapper'>
        <h2>Retailers</h2>
        <div className='Retailers' id='retailers'>
      {allRetailers}
        </div>
      </div>
    )
  }
}

export default Retailers
