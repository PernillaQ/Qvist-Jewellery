import React, { Component } from 'react'
import './Collections.css'
import firebase from './../../Utils/firebase.js'
import DetailView from './Detailview/Detailview.js'
import { HashLink as Link } from 'react-router-hash-link'

class Collections extends Component {

  componentWillMount(){
      firebase.database().ref(`collections`).on('value', (snapshot) => {
      this.toArray(snapshot.val());
    })
  }

 toArray = (firebaseObject) => {
   const {setAllCityPosts, setAllDesertPosts} = this.props

   let city = []
   let desert = []

   for(let item in firebaseObject){
     if (item === 'thecity'){

        let theCityValue = firebaseObject[item]

        for(let x in theCityValue){

        city.push({ key: x, value: theCityValue[x]})
        }
     }
     else if (item === 'thedesert'){

       let theDesertValue = firebaseObject[item]

       for(let x in theDesertValue){
       desert.push({ key: x, value: theDesertValue[x]})
       }
     }
   }
   setAllCityPosts(city)
   setAllDesertPosts(desert)
 }

  show = (collection, id) => {
    const { toggleTheCity, toggleTheDesert, toggleShowAllJewels, toggleCollectionIntroView, setDetailId, setDetailView} = this.props
// whole collection
    if(collection === 'desert') {
      toggleTheCity(false)
      toggleTheDesert(true)
      toggleShowAllJewels(true)
      toggleCollectionIntroView(false)
      setDetailView(collection)
      this.getContent(collection)
    }
    if(collection === 'city') {
       toggleTheCity(true)
       toggleTheDesert(false)
       toggleShowAllJewels(true)
       toggleCollectionIntroView(false)
       setDetailView(collection)
       this.getContent(collection)
    }
  // single jewellery
    if(collection === 'cityDetail'||collection === 'desertDetail'){
      toggleShowAllJewels(false)
      toggleCollectionIntroView(false)
      setDetailId(id)
      setDetailView(collection)
  }

  }

  hideTheJewels = (collection) => {
    const { toggleTheCity, toggleTheDesert, toggleShowAllJewels, toggleCollectionIntroView } = this.props
  if (collection === 'closeAllJewels'){
    toggleTheCity(false)
    toggleTheDesert(false)
    toggleCollectionIntroView(true)
  }
  if (collection === 'closeDetailView'){
    toggleShowAllJewels(true)
  }
}

  getDetailInfo = (collection, id) => {
  const { allCityPosts, allDesertPosts } = this.props
  let coll = ''
  // show choosen jewellery info
  collection === 'cityDetail'?  coll = allCityPosts : coll = allDesertPosts

  let filterList = coll.filter(post1 => post1.key === id)
  console.log(filterList)

  let detailList = filterList.map(post =>
  <div className="Collections-detailview" key={post.key}>
    <img src={post.value.url}alt="a Piece of jewellery"/>
    <h4>{post.value.title}</h4>
    <p>{post.value.content}</p>
    <Link to='#theCityJewellery'><button onClick={() => { this.hideTheJewels('closeDetailView') }}>X</button></Link>
  </div>
)

return detailList

}

  getContent = (collection) => {
    const { allCityPosts, allDesertPosts, collectionIntroView } = this.props //showAllJewels, showIntroJewels

    let list = ''
    let collectionsList = ''
    let coll = ''

    collection === 'city'?  coll = allCityPosts : coll = allDesertPosts

    // show all city or deserstjewels
    if (collectionIntroView === false)
    {
      collectionsList = coll.map(post =>
    <div className='TheCity-jewellery' id='theCityJewellery' key={post.key}>
      <img src={post.value.url}alt="a Piece of jewellery" onClick={()=>{this.show(collection + 'Detail', post.key)}}/>
    </div>)
    return collectionsList

} else {
      list = coll.map(post =>
      post.value.introimage ?
      <div className="Collections-theCity-wrapper" key={post.key}>
        <img src={post.value.url}alt="a Piece of jewellery"/>
        <h3>{post.value.title}</h3>
        <p>{post.value.content}</p>
        <button className='btn-1' onClick={()=>{this.show(collection)}}><span>View More</span></button>
      </div>:'')
    return list
  }
}

  render () {

  const { collectionIntroView } = this.props
    return (
      <div className='Collections-wrapper' id='collections'>
      {collectionIntroView &&
        <div className='Collections-hexagon'>
          {this.getContent('city')}
          <svg id='2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 70'>
            <line className='App-collectionsLine' x1='0.5' x2='0.5' y2='300' fill='none' stroke='#464646' strokeMiterlimit='10' strokeWidth='0.2' />
          </svg>
          <h2>Collections</h2>
          {this.getContent('desert')}
        </div>}
        {!collectionIntroView &&
        <div className='theCity'>
          <DetailView {...this.props} funcHide={this.hideTheJewels} funcShow={this.show} funcPosts={this.getContent} funcDetail={this.getDetailInfo}/>
        </div>}
      </div>
    )
  }
}

export default Collections
