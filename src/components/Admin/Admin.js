import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './Addpost/Addpost.js'
import { HashLink as Link } from 'react-router-hash-link';
//import { removePost } from './Addpost/Removepost.js'
import firebase from './../../Utils/firebase.js'

class Admin extends Component {

  home = () => {
    const {toggleAdmin} = this.props
    toggleAdmin(false)
  }

removePost = (key, collection, filename) => {
    firebase.database().ref(`collections/${collection}/${key}`).remove()
      .then(() => { console.log('Post Removed!') })
      .catch(error => { console.log('You messed up', error) })

    let storage = firebase.storage()
    let imgRef = storage.ref(`images/${filename}`)
    imgRef.delete()
      .then(() => { console.log(filename + 'was deleted') })
      .catch(error => { console.log(error) })
  }

  getPreviewList = (collection) => {
    const { allCityPosts, allDesertPosts } = this.props
    let previewList = ''
    let collect = ''
    collection === 'city' ?  collect = allCityPosts : collect = allDesertPosts

      previewList = collect.map(post =>
        <div className="post" key={post.key}>
          <img src={post.value.url}alt="a Piece of jewellery"/>
          <div className="admin-posttext">
          <h3>{post.value.title}</h3>
          <button onClick={()=>{this.removePost(post.key, post.value.collection, post.value.filename)}}>x</button>
          </div>
        </div>)

    return previewList
  }

  render () {
    const { user } = this.props
    return (
      <div className='admin'>
      <div className ='admin-preview'>
      {this.getPreviewList('city')}
      {this.getPreviewList('desert')}
      </div>
        <div className='admin-content'>
        <h2>Administration</h2>
          {!user &&
            <Login {...this.props} />}
          {user &&
          <div className='admin-addpost'>
            <AddPost {...this.props} />
          </div>}
        </div>
         <Link to='#home'><button className='admin-homebtn' onClick={this.home}>Home</button></Link>
      </div>
    )
  }
}

export default Admin
