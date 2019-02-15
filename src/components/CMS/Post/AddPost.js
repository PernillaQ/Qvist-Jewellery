import React, { Component } from 'react';
import firebase from './../Utils/firebase.js';
//import api from './../Utils/firebase.js'

class AddPost extends Component{

 state ={
 title: '',
 content: '',
 filename: '',
 selectedImage: null,
 url: ''
 }
// Add img to storage and add a post to firebase.
addAll = (e) => {
	e.preventDefault();
	this.fileUploadHandler();
	this.addPost(e);
}

addPost = (e) => {
e.preventDefault();
 const objectToPush = {
 title: this.state.title,
 content: this.state.content,
 filename:this.state.selectedImage.name,
 url:this.state.url
 }

 firebase.database().ref(`collections`).push(objectToPush)
 .then(()=> { console.log('Pushed!' + this.state.title) })
 .catch(error => { console.log('You messed up', error) })
 this.setState({title:'', content:'', url:''});
 }

 fileSelectedHandler = (e) => {
 if(e.target.files[0]) {this.setState({selectedImage: e.target.files[0], filename:e.target.files[0]});}
}

 fileUploadHandler = () => {
 let uploadTask = firebase.storage().ref(`images/${this.state.selectedImage.name}`).put(this.state.selectedImage);
 uploadTask.on('state_changed',(snapshot) => {console.log("a file was uploaded")}
 	, (error) => { console.log('file not uploadedd' + error)},
() => {
 firebase.storage().ref('images').child(this.state.selectedImage.name).getDownloadURL()
 .then(url => {
  this.setState({url}) })
 console.log(this.state.url);
})
}

onChange = e => this.setState({[e.target.name]: e.target.value});

render(){

	return(
		  <div className ="post-wrapper">
        <h3>Add a post</h3>
        <p>Wait for image to show under uploadbutton, before submitting post</p>
		    <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
        {this.state.url !== '' ?
          <img src={this.state.url}alt="a Piece of jewellery"/>
        :''}
	      <form onSubmit={this.addAll}> {/*addAll*/}
          <input type="text"
          name="title"
          placeholder="Add a title"
          value={this.state.title}
          onChange={this.onChange}/>
          <textarea
          id="textarea3"
          type="text"
          placeholder = "Write something.."
          value={this.state.content}
          onChange={this.onChange}
          name="content"/>
          <input type="submit" value="Add Post" />
        </form>
    </div>
    )
  /*else{
        return(null)
      }*/
 } // End of render()
} //End

export default AddPost;
