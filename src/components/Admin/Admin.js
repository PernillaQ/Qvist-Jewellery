import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './Addpost/Addpost.js'
import AddStory from './AddAbout/Addabout.js'
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
        <div className="Admin-post" key={post.key}>
          <img src={post.value.url}alt="a Piece of jewellery"/>
          <div className="Admin-posttext">
          <h3>{post.value.title}</h3>
        {/*  <p>{post.value.collection}</p> */}
          <button onClick={()=>{this.removePost(post.key, post.value.collection, post.value.filename)}}>x</button>
          </div>
        </div>
        )
    return previewList
  }

  onLogout = () => {
    const { setMessage } = this.props
   firebase.auth()
   .signOut()
   .then(setMessage("signed out"))
  }

  handleChange= (e)=> {
    const { toggleRemovePost, toggleAddPost, toggleEditStory } = this.props
    if (e.target.checked === true) {
      if (e.target.name === 'removePost'){
        toggleRemovePost(true)
      }
      if(e.target.name === 'addPost'){
        toggleAddPost(true)
      }
      if(e.target.name === 'editStory'){
      toggleEditStory(true)
      }
    }
  else{
      toggleRemovePost(false)
      toggleAddPost(false)
      toggleEditStory(false)
    }
  }

  render () {
    const { user, removePost, addPost, editStory } = this.props
    return (
      <div className='Admin-wrapper' id='admin'>
      {user &&
        <button className='signoutBtn' onClick={this.onLogout}><span>Logout</span></button>
      }
        <h2>Administration</h2>
        {user &&
        <div className='Admin-selectToDo'>
        <h3>What do you want to change?</h3>
        <label className='container'>
          <input name="removePost" type="checkbox" checked={removePost} onChange={this.handleChange} />
           <span className="checkbox1"></span>
          Remove a post?
        </label>
        <label className='container'>
          <input name="addPost" type="checkbox" checked={addPost} onChange={this.handleChange} />
           <span className="checkbox2"></span>
          Add a post?
        </label>
        <label className='container'>
          <input name="editStory" type="checkbox" checked={editStory} onChange={this.handleChange} />
           <span className="checkbox3"></span>
          Edit story?
        </label>
        </div>}
    {removePost &&
        <div className ='Admin-preview'>
        <h3>Remove a post</h3>
        <h4>Dangerzone</h4>
      {this.getPreviewList()}
      </div>}
        <div className='Admin-content'>
        {!user &&
            <Login {...this.props} />}
       {addPost &&
          <div className='Admin-addpost'>
            <AddPost {...this.props} />
          </div>}
        {editStory &&
          <div className='Admin-editStory'>
            <AddStory {...this.props} />
          </div>}
        }
        </div>}
         <Link to='#home'><button className='homeBtn' onClick={this.home}>Home</button></Link>
      </div>
    )
  }
}

export default Admin
