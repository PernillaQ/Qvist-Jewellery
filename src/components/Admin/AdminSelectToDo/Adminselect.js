import React, { Component } from 'react'
import './../Admin.css'

class AdminSelectTodo extends Component {

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
      <div className='Admin-toDo'>
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
      </div>
    )
  }
}

export default AdminSelectTodo
