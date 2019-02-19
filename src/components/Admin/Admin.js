import React, { Component } from 'react'
import './Admin.css'
import Login from './../Login/login.js'
import AddPost from './Addpost/Addpost.js'
import { HashLink as Link } from 'react-router-hash-link';

class Admin extends Component {

  home = () => {
    const {toggleAdmin} = this.props
    toggleAdmin(false)
  }

  render () {
    const { user } = this.props
    return (

      <div className='admin'>
        <div className='admin-content'>
        <h2>Administration</h2>
          {!user &&
            <Login {...this.props} />}
          {user &&
          <div className='admin-addpost'>
            <AddPost {...this.props} />
          </div>}
        </div>

         <Link to='#home'><button onClick={this.home}>Home</button></Link>
      </div>
    )
  }
}

export default Admin
