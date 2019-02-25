import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './Addpost/Addpost.js'
import { HashLink as Link } from 'react-router-hash-link';
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
    const { allPosts } = this.props
    let previewList = ''
    let collect = allPosts

      previewList = collect.map(post =>
        <div className="post" key={post.key}>
          <img src={post.value.url}alt="a Piece of jewellery"/>
          <div className="admin-posttext">
          <h3>{post.value.title}</h3>
          <p>{post.value.collection}</p>
          <button onClick={()=>{this.removePost(post.key, post.value.collection, post.value.filename)}}>x</button>
          </div>
        </div>)

    return previewList
  }

  onLogout = () => {
    const { setMessage } = this.props
   firebase.auth()
   .signOut()
   .then(setMessage("signed out"))
  }

  render () {
    const { user } = this.props
    return (
      <div className='admin'>
      {user &&
        <button className='signoutBtn' onClick={this.logout}><span>Logout</span></button>
      }
      <div className ='admin-preview'>
      {this.getPreviewList()}
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
