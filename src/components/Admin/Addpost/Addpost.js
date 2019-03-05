import React, { Component } from 'react';
import firebase from './../../../Utils/firebase.js';
//import api from './../Utils/firebase.js'

class AddPost extends Component{
// Add img to storage and add a post to firebase.
addAll = (e) => {
	e.preventDefault();
	this.fileUploadHandler();
	this.addPost(e);
}

fileUploadHandler = () => { //.name
  const { selectedImage, file , setUrl } = this.props
  let uploadTask = firebase.storage().ref(`images/${selectedImage}`).put(file)
  uploadTask.on('state_changed',(snapshot) => {console.log("a file was uploaded")}
 	, (error) => { console.log('file not uploadedd' + error)},
  () => {
  firebase.storage().ref('images').child(selectedImage).getDownloadURL()
  .then(url => { setUrl(url) })
  })
}

addPost = (e) => {
e.preventDefault();
const {title, content, selectedImage, url, introImage, newCollection, collection} = this.props
const objectToPush = {
  title:title,
  content:content,
  filename:selectedImage,
  url:url,
  introimage:introImage
}

let chosenCollection = ''

newCollection !== '' ? chosenCollection = newCollection : chosenCollection = collection

objectToPush.collection = chosenCollection

 firebase.database().ref(`collections/${chosenCollection}`).push(objectToPush)
 .then(()=> { console.log('Pushed!' + title) }) // title
 .then(()=>(this.clear()))
 .catch(error => { console.log('You messed up', error) })
 }

 clear = () => {
   const {toggleIntroImage, setTitle, setContent, setFile, setUrl, setSelectedImage} = this.props
   setTitle('')
   setContent('')
   setUrl('')
   setFile('')
   setSelectedImage('')
   toggleIntroImage(false)
 }

 fileSelectedHandler = (e) => {
  const { setSelectedImage, setFile } = this.props
  setFile(e.target.files[0])
  setSelectedImage(e.target.files[0].name)
}

createOption = () => {
  const {collectionOptions} = this.props // allCollections
  let allCollections = collectionOptions
  return allCollections.map(collection =>
  <option key={collection} value={collection}>{collection}</option> )
}

handleInputChange= (e)=> {
  const {setAddCollection, toggleIntroImage} = this.props

    if (e.target.checked === true)
    {
        if(e.target.name === 'addCollection'){
          setAddCollection(true)
        }
        if( e.target.name === 'addIntroImage'){
          toggleIntroImage(true)
        }
    }
    else{
        setAddCollection(false)
        toggleIntroImage(false)
    }
  }

onChange = e => {
  e.preventDefault()
  const {setTitle, setContent, setNewCollection} = this.props
  if (e.target.name === 'title'){
    setTitle(e.target.value)
  }
  if (e.target.name === 'content'){
    setContent(e.target.value)
  }
  if (e.target.name === 'newCollection'){
    setNewCollection(e.target.value)
  }
}

handleChange = e => {
  e.preventDefault()
  const {setCollection} = this.props
  setCollection(e.target.value)
}

render() {
   const {title, content, url, introImage, addCollection, newCollection, collection} = this.props
//  const {addCollection} = this.state
	return(
		  <div className ="Addpost-wrapper">
        <h3>Add a post</h3>
				<div className='AddPost-uploadImg'>
        <label htmlFor="inputtypefile">Choose an image</label>
		    <input type="file" onChange={this.fileSelectedHandler} id='inputtypefile'/>
        <button onClick={this.fileUploadHandler}>Upload</button>
				</div>
        {title !== '' ?
          <img src={url}alt="a Piece of jewellery"/>
        :''}
	      <form onSubmit={this.addAll}>
          <input type="text"
          name="title"
          placeholder="Add a title"
          value={title}
          onChange={this.onChange}/>
          {!addCollection && <label>
              Choose subject:
                <select value={collection} onChange={this.handleChange}>
                  {this.createOption()}
                </select>
              </label>}
          <label>
            <input name="addCollection" className='checkbox4' type="checkbox" checked={addCollection} onChange={this.handleInputChange} />
						Add a new collection?
					</label>
          <label>
            <input name="addIntroImage" className='checkbox5' type="checkbox" checked={introImage} onChange={this.handleInputChange} />
						Set as introimage
					</label>
          {addCollection &&
          <input type="text"
          name="newCollection"
          placeholder="Add a collection"
          value={newCollection}
          onChange={this.onChange}/>}
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

export default AddPost;
