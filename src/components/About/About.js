import React, { Component } from 'react'
import './About.css'
import firebase from './../../Utils/firebase.js'
import welding from './../App/svetsloppan.png'

class About extends Component {

  componentWillMount () {
    firebase.database().ref(`story`).on('value', (snapshot) => {
      this.toArray(snapshot.val())
    })
  }

   toArray = (firebaseObject) => {
    const { setStoryImg, setStoryContent} = this.props
     let story = []

     for(let item in firebaseObject){
        story.push({key:item , value:firebaseObject[item]})
        }
        setStoryContent(story[0].value.content)
        setStoryImg(story[0].value.url)
   }

  render () {
    const {storyContent, storyImg} = this.props
    return (
      <div className='About-wrapper'>
        <div className='About-h2-wrapper' id='about'>
          <h2>Story</h2>
        </div>
        <img src={storyImg} alt='A portrait of Pernilla Qvist founder of Qvist jewellery' />
        <img src={welding} alt='A welding residual' />
        <p>{storyContent}</p>
      </div>
    )
  }
}

export default About
