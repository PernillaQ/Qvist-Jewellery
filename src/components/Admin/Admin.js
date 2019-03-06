import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './AdminPost/Addpost.js'
import PreviewList from './AdminPost/Removepost.js'
import RetailersList from './AdminRetailers/Removeretailer.js'
import AddStory from './AdminStory/Addstory.js'
import Addretailers from './AdminRetailers/Addretailer.js'
import { HashLink as Link } from 'react-router-hash-link';
import firebase from './../../Utils/firebase.js'

class Admin extends Component {

  home = () => {
    const {toggleAdmin} = this.props
    toggleAdmin(false)
  }

  onLogout = () => {
    const { setMessage } = this.props
   firebase.auth()
   .signOut()
   .then(setMessage("signed out"))
  }

  handleChange = (e) => {
    console.log(e.target.name)
    const { toggleRemovePost, toggleAddPost, toggleEditStory, toggleEditRetailers} = this.props
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
      if(e.target.name === 'editRetailers'){
      toggleEditRetailers(true)
      }
    }
  else{
      toggleRemovePost(false)
      toggleAddPost(false)
      toggleEditStory(false)
      toggleEditRetailers(false)
    }
  }

  render () {
    const { user, removePost, addPost, editStory, editRetailers } = this.props
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
        <label className='container'>
          <input name="editRetailers" type="checkbox" checked={editRetailers} onChange={this.handleChange} />
           <span className="checkbox4"></span>
          Edit retailers?
        </label>
        </div>}
        <div className='Admin-content'>
        {removePost &&
            <PreviewList {...this.props} />}
        {!user &&
            <Login {...this.props} />}
        {addPost &&
            <AddPost {...this.props} funcFileUpload={this.fileUploadHandler}/>}
        {editStory &&
            <AddStory {...this.props} funcFileUpload={this.fileUploadHandler}/>}
        {editRetailers &&
          <div className='editRetailers'>
            <RetailersList {...this.props} />
            <Addretailers {...this.props} funcFileUpload={this.fileUploadHandler}/>
            </div>}
        </div>
         <Link to='#home'><button className='homeBtn' onClick={this.home}>Home</button></Link>
      </div>
    )
  }
}

export default Admin
