import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './AdminPost/Addpost.js'
import PreviewList from './AdminPost/Removepost.js'
import RetailersList from './AdminRetailers/Removeretailer.js'
import AddStory from './AdminStory/Addstory.js'
import Addretailers from './AdminRetailers/Addretailer.js'
import { HashLink as Link } from 'react-router-hash-link';
import AdminSelectTodo from './AdminSelectToDo/Adminselect.js'
import firebase from './../../Utils/firebase.js'

class Admin extends Component {

  home = () => {
    const {toggleAdmin} = this.props
    toggleAdmin(false)
  }

  onLogout = () => {
    const { setMessage, setEmail, setPassword, setUser,toggleRemovePost, toggleAddPost, toggleEditStory, toggleEditRetailers} = this.props
   firebase.auth()
   .signOut()
   .then(setMessage("signed out"))
   setEmail('')
   setPassword('')
   setMessage('')
   setUser('')
   toggleRemovePost(false)
   toggleAddPost(false)
   toggleEditStory(false)
   toggleEditRetailers(false)
  }

  render () {
    const { user, removePost, addPost, editStory, editRetailers } = this.props
    return (
      <div className='Admin-wrapper' id='admin'>
        {user &&
          <button className='signoutBtn' onClick={this.onLogout}><span>Logout</span></button>
        }
        <h2>Administration</h2>
        {!user &&
          <Login {...this.props} />}
        {user &&
          <AdminSelectTodo {...this.props} />}
          <div className='Admin-content'>
            {removePost &&
              <PreviewList {...this.props} />}
            {addPost &&
              <AddPost {...this.props}/>}
            {editStory &&
              <AddStory {...this.props} />}
            {editRetailers &&
            <div className='editRetailers'>
              <RetailersList {...this.props} />
              <Addretailers {...this.props} />
            </div>}
          </div>
         <Link to='#home'><button className='homeBtn' onClick={this.home}>Home</button></Link>
      </div>
    )
  }
}

export default Admin
