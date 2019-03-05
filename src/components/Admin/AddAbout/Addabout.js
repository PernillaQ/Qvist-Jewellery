import React, { Component } from 'react';
import firebase from './../../../Utils/firebase.js';


class AddStory extends Component{
// Add img to storage and add a post to firebase.
addAll = (e) => {
	e.preventDefault();
	this.addFile();
	this.addStory(e);
}

addFile = () => { //.name
  const { selectedImage, file , setUrl } = this.props
  let uploadTask = firebase.storage().ref(`images/${selectedImage}`).put(file)
  uploadTask.on('state_changed',(snapshot) => {console.log("a file was uploaded")}
 	, (error) => { console.log('file not uploadedd' + error)},
  () => {
  firebase.storage().ref('images').child(selectedImage).getDownloadURL()
  .then(url => { setUrl(url) })
  })
}

addStory = (e) => {
e.preventDefault();
const { content, selectedImage, url } = this.props
const objectToPush = {
  content:content,
  filename:selectedImage,
  url:url,
}

 firebase.database().ref(`story`).push(objectToPush)
 .then(()=> { console.log('Pushed!') })
 .then(()=>(this.clear()))
 .catch(error => { console.log('You messed up', error) })
 }

 clear = () => {
   const { setContent, setFile, setUrl, setSelectedImage } = this.props
   setContent('')
   setUrl('')
   setFile('')
   setSelectedImage('')
 }

 fileSelectedHandler = (e) => {
  const { setSelectedImage, setFile } = this.props
  setFile(e.target.files[0])
  setSelectedImage(e.target.files[0].name)
}

onChange = e => {
  e.preventDefault()
  const { setContent } = this.props
  	setContent(e.target.value)
}

render() {
   const { content, url } = this.props
	return(
		  <div className ="AddStory-wrapper">
        <h3>Edit story</h3>
				<div className='AddStory-uploadImg'>
        <label htmlFor="inputtypefile">Choose an image</label>
		    <input type="file" onChange={this.fileSelectedHandler} id='inputtypefile'/>
        <button onClick={this.addFile}>Upload</button>
				</div>
        {content !== '' ?
          <img src={url}alt="a Piece of jewellery"/>
        :''}
	      <form onSubmit={this.addAll}>
          <textarea
          id="textarea3"
          type="text"
          placeholder = "Add content"
          value={content}
          onChange={this.onChange}
          name="content"/>
          <input type="submit" value="Add Post" />
        </form>
    </div>
    )
 } // End of render()
} //End

export default AddStory;
