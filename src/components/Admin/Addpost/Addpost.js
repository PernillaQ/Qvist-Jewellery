import React, { Component } from 'react';
import firebase from './../../../Utils/firebase.js';
//import api from './../Utils/firebase.js'

class AddPost extends Component{

componentWillMount() {
/*  const { setCollectionOptions } = this.props //setAllCollections
    firebase.database().ref(`collections`).on('value', (snapshot) => {
    const allTheCollections = this.toArray(snapshot.val());
    setCollectionOptions(allTheCollections)
  })*/
}

toArray = (firebaseObject) => {
 let array = []
 for(let item in firebaseObject){
 array.push( item )
 }
 return array;
}

// Add img to storage and add a post to firebase.
addAll = (e) => {
	e.preventDefault();
	this.fileUploadHandler();
	this.addPost(e);
}

fileUploadHandler = () => { //.name
  const { selectedImage,file , setUrl } = this.props
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

if ( newCollection !== '' ){
  chosenCollection = newCollection
}
else {
  chosenCollection = collection
}

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
  //this.setState({[e.target.name]: e.target.value});
}

handleChange = e => {
  e.preventDefault()
  const {setCollection} = this.props
  setCollection(e.target.value)
}

render() {
   const {title, content, url,introImage, addCollection, newCollection, collection} = this.props
//  const {addCollection} = this.state
	return(
		  <div className ="post-wrapper">
        <h3>Add a post</h3>
        <p>Wait for image to show under uploadbutton, before submitting post</p>
        <label htmlFor="inputtypefile">Choose an image</label>
		    <input type="file" onChange={this.fileSelectedHandler} id='inputtypefile'/>
        <button onClick={this.fileUploadHandler}>Upload</button>
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
            Add a new collection?
            <input name="addCollection" type="checkbox" checked={addCollection} onChange={this.handleInputChange} />
          </label>
          <label>
            Set as introimage
            <input name="addIntroImage" type="checkbox" checked={introImage} onChange={this.handleInputChange} />
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
