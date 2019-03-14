import React, { Component } from 'react'
import './../Admin.css'
import firebase from './../../../Utils/firebase.js'

class PreviewList extends Component {

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
          <button onClick={()=>{this.removePost(post.key, post.value.collection, post.value.filename)}}>x</button>
          </div>
        </div>
        )
    return previewList
  }

  render () {
    let prevList = this.getPreviewList()

    return (
        <div className ='Admin-preview'>
        <h3>Remove a post</h3>
        <h4>Dangerzone</h4>
        { prevList }
      </div>
    )
  }
}

export default PreviewList
