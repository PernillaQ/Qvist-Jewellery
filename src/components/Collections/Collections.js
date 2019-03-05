import React, { Component } from 'react'
import './Collections.css'
import firebase from './../../Utils/firebase.js'
import DetailView from './Detailview/Detailview.js'

class Collections extends Component {

  componentWillMount(){
      firebase.database().ref(`collections`).on('value', (snapshot) => {
      this.toArray(snapshot.val());
    })
  }

 toArray = (firebaseObject) => {
   const { setCollectionOptions, setAllPosts} = this.props

   let allCollections = []
   let all = []

   for(let item in firebaseObject){
      allCollections.push(item)
      let val = firebaseObject[item]

      for (let y in val){
        all.push({key:y , value:val[y]})
      }
   }
   setAllPosts(all)
   setCollectionOptions(allCollections)
 }

  show = (collection, id) => {
    const { toggleShowAllJewels, toggleCollectionIntroView, setDetailId, setDetailView} = this.props
    let currentColl = collection
    let subString = 'Detail'
    let including = currentColl.includes(subString)
    // single jewellery
    console.log(including)
    if(including === true){
      toggleShowAllJewels(false)
      toggleCollectionIntroView(false)
      setDetailId(id)
    }
    //whole collection
    else{
      toggleCollectionIntroView(false)
      setDetailView(collection)
      this.getContent(collection)
    }
}

  hideTheJewels = (collection) => {
    const { toggleShowAllJewels, toggleCollectionIntroView } = this.props
    if (collection === 'closeAllJewels'){
      toggleCollectionIntroView(true)
    }
    if (collection === 'closeDetailView'){
      toggleShowAllJewels(true)
    }
}

  getDetailInfo = (collection, id) => {
    const { allPosts } = this.props
    let coll = allPosts
    let filterList = coll.filter(post1 => post1.key === id)

    let detailList = filterList.map(post =>
    <div className="Collections-detailview" key={post.key}>
      <img src={post.value.url}alt="a Piece of jewellery"/>
      <h4>{post.value.title}</h4>
      <p>{post.value.content}</p>
      <button onClick={() => { this.hideTheJewels('closeDetailView') }}>X</button>
    </div>
  )
  return detailList
}

  getContent = (collection) => {
    const { collectionIntroView, allPosts, setDetailView} = this.props
    let list = ''
    let collectionsList = ''
    let coll = allPosts
    let currentCollection = ''
    let stringCheck = 'Detail'
    let check = currentCollection.includes(stringCheck)

    if (check === true){
      currentCollection = collection - 'Detail'
      setDetailView(currentCollection)
    }
    else{
      currentCollection = collection
    }

    if (collectionIntroView === false)
    {
      collectionsList = coll.map(post =>
      post.value.collection === currentCollection ?
      <div className='Collections-collection' key={post.key}>
      <img src={post.value.url}alt="a Piece of jewellery" onClick={()=>{this.show(post.value.collection + 'Detail', post.key)}}/>
      </div>:'')
    return collectionsList
    }
    else {
      list = coll.map(post =>
      post.value.introimage ?
      <div className="Collections-intro-wrapper" key={post.key}>
        <img src={post.value.url}alt="a Piece of jewellery"/>
        <h3>{post.value.title}</h3>
        <p>{post.value.content}</p>
        <button className='btn-1' onClick={()=>{this.show(post.value.collection)}}><span>View More</span></button>
      </div>:'')
    return list
  }
}

  render () {
  const { collectionIntroView } = this.props
  console.log(collectionIntroView)
    return (
      <div className='Collections-wrapper' id='collections'>
      {collectionIntroView &&
        <div className='Collections-hexagon' id='introview'>
          {this.getContent()}
        {/*  <svg id='2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 70'>
            <line className='App-collectionsLine' x1='0.5' x2='0.5' y2='300' fill='none' stroke='#464646' strokeMiterlimit='10' strokeWidth='0.2' />
          </svg>*/}
          <h2>Collections</h2>
        </div>}
        {!collectionIntroView &&
        <div className='Collection-theCollections'>
          <DetailView {...this.props} funcHide={this.hideTheJewels} funcShow={this.show} funcPosts={this.getContent} funcDetail={this.getDetailInfo}/>
        </div>}
      </div>
    )
  }
}

export default Collections
