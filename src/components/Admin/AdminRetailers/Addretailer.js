import React, { Component } from 'react';
import firebase from './../../../Utils/firebase.js';

class Editretailers extends Component{
addAll = (e) => {
	e.preventDefault();
	this.fileUploadHandler()
	this.addRetailer(e);
}

fileUploadHandler = () => {
  const { selectedImage, file , setUrl } = this.props
  let uploadTask = firebase.storage().ref(`images/${selectedImage}`).put(file)
  uploadTask.on('state_changed',(snapshot) => {console.log("a file was uploaded")}
 	, (error) => { console.log('file not uploadedd' + error)},
  () => {
  firebase.storage().ref('images').child(selectedImage).getDownloadURL()
  .then(url => { setUrl(url) })
  })
}

addRetailer = (e) => {
e.preventDefault();
const {title, location, selectedImage, url, website } = this.props
const objectToPush = {
  title:title,
  location:location,
  website: website,
  filename:selectedImage,
  url:url
}

 firebase.database().ref(`retailers`).push(objectToPush)
 .then(()=> { console.log('Pushed!' + title) }) // title
 .then(()=>(this.clear()))
 .catch(error => { console.log('You messed up', error) })
 }

 clear = () => {
   const {setTitle, setLocation, setFile, setUrl, setSelectedImage, setWebsite} = this.props
   setTitle('')
   setLocation('')
   setWebsite('')
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
  const {setTitle, setLocation, setWebsite} = this.props
  if (e.target.name === 'title'){
    setTitle(e.target.value)
  }
  if (e.target.name === 'location'){
    setLocation(e.target.value)
  }
  if (e.target.name === 'website'){
    setWebsite(e.target.value)
  }
}

render() {
   const {title, location, website, url} = this.props
	return(
		  <div className ="Editretailers-wrapper">
        <h3>Add a retailer</h3>
				{title &&
				<div className='AddRetailer-preview-beforepost'>
					<img src={url}alt="a Piece of jewellery"/>
					<h4>{title}</h4>
					<p>{location}</p>
					</div>}
				<div className='Editretailers-uploadImg'>
          <label htmlFor="inputtypefile">Choose an image</label>
		      <input type="file" onChange={this.fileSelectedHandler} id='inputtypefile'/>
          <button onClick={this.fileUploadHandler}>Upload</button>
				</div>
	      <form onSubmit={this.addAll}>
          <input type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.onChange}/>
          <input type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={this.onChange}/>
          <input type="url"
          name="website"
          placeholder="www.retailerswebsite.com"
          value={website}
          onChange={this.onChange}/>
          <input type="submit" value="Add Retailers" />
        </form>
    </div>
    )
 }
}

export default Editretailers;
