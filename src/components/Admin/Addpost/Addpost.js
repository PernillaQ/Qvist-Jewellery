import React, { Component } from 'react';
import firebase from './../../../Utils/firebase.js';
//import api from './../Utils/firebase.js'

class AddPost extends Component{

 state ={
 title: '',
 content: '',
 allCollections:[],
 newCollection:'',
 addCollection:false,
 collection:'',
 filename: '',
 selectedImage: '',
 url: ''
}

componentWillMount() {
    firebase.database().ref(`collections`).on('value', (snapshot) => {
    const allCollections = this.toArray(snapshot.val());
    this.setState({allCollections: allCollections}, ()=>{console.log(this.state.allCollections)})
  })
}

toArray(firebaseObject) {
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

addPost = (e) => {
e.preventDefault();
/*const{ title, content, fileName, url , setTitle, setContent, setUrl} = this.props
const objectToPush = {
  title: title,
  content: content,
  filename: fileName,
  url: url
}*/
 const objectToPush = {
 title: this.state.title,
 content: this.state.content,
 filename:this.state.selectedImage.name,
 url:this.state.url
 }

let chosenCollection = ''

if ( this.state.newCollection !== '' ){
  chosenCollection = this.state.newCollection
}
else {
  chosenCollection = this.state.collection
}
 firebase.database().ref(`collections/${chosenCollection}`).push(objectToPush)
 .then(()=> { console.log('Pushed!' + this.state.title) }) // title
 .then(()=> this.setState({title:'', content:'', url:'', filename:'', selectedImage:''}))
 .catch(error => { console.log('You messed up', error) })
 }

 fileSelectedHandler = (e) => {
   //const {setSelectedImage, setFileName} = this.props
 if(e.target.files[0]) { // selectedImage(e.target.files[0]), fileName(e.target.files[0])
   this.setState({selectedImage: e.target.files[0], filename:e.target.files[0]})
   ;}
}

 fileUploadHandler = () => {
   // const {selectedImage, url} = this.props  selectedImage.name   selectedImage
 let uploadTask = firebase.storage().ref(`images/${this.state.selectedImage.name}`).put(this.state.selectedImage);
 uploadTask.on('state_changed',(snapshot) => {console.log("a file was uploaded")}
 	, (error) => { console.log('file not uploadedd' + error)},
() => {
 firebase.storage().ref('images').child(this.state.selectedImage.name).getDownloadURL()
 .then(url => {
  this.setState({url}) })
 console.log(this.state.url);// url(url)
})
}

createOption = () => {
  let allCollections = this.state.allCollections;
  return allCollections.map(collection =>
  <option key={collection} value={collection}>{collection}</option> )
}
handleInputChange= (e)=> {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (target.checked === true)
    {
        this.setState({addCollection:true})
    }
    else {
      this.setState({addCollection:false})
    }
  }

onChange = e => this.setState({[e.target.name]: e.target.value});

handleChange = e => this.setState({collection: e.target.value});

render(){
  const {addCollection} = this.state
  console.log(this.state.allCollections)
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
          {!addCollection && <label>
              Choose subject:
                <select value={this.state.collection} onChange={this.handleChange}>
                  {this.createOption()}
                </select>
              </label>}
          <label>
            Add a new collection?
            <input name="addCollection" type="checkbox" checked={this.state.addCollection} onChange={this.handleInputChange} />
          </label>
          {addCollection &&
          <input type="text"
          name="newCollection"
          placeholder="Add a collection"
          value={this.state.newCollection}
          onChange={this.onChange}/>}
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
 } // End of render()
} //End

export default AddPost;
