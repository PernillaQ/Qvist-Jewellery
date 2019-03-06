import React, { Component } from 'react'
import './../Admin.css'
import firebase from './../../../Utils/firebase.js'

class PreviewList extends Component {

removeRetailer = (key, filename) => {
    firebase.database().ref(`retailers/${key}`).remove()
      .then(() => { console.log('Post Removed!') })
      .catch(error => { console.log('You messed up', error) })

    let storage = firebase.storage()
    let imgRef = storage.ref(`images/${filename}`)
    imgRef.delete()
      .then(() => { console.log(filename + 'was deleted') })
      .catch(error => { console.log(error) })
  }

  getRetailersList = () => {
      const { retailers } = this.props
      let theRetailers = retailers

      let retailersList = theRetailers.map(r=>
      <div className="Retailers-post" key={r.key}>
        <img src={r.value.url}alt="Retailers logotype"/>
        <div className="Admin-retailerstext">
          <h3>{r.value.title}</h3>
          <button onClick={()=>{this.removeRetailer(r.key, r.value.collection, r.value.filename)}}>x</button>
        </div>
      </div>
    )
    return retailersList
   }

  render () {
    let retailersList = this.getRetailersList()

    return (
        <div className ='Admin-previewRetailers'>
        <h3>Remove a Retailer</h3>
        <h4>Dangerzone</h4>
        { retailersList }
      </div>
    )
  }
}

export default PreviewList
