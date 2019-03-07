import React, { Component } from 'react'
import './App.css'
import Header from './../Header/Header.js'
import Navbar from './../Navigation/Navigation.js'
import Collections from './../Collections/CollectionsContainer.js'
import About from './../About/AboutContainer.js'
import Retailers from './../Retailers/RetailersContainer.js'
import Contact from './../Contact/Contact.js'
import Admin from './../Admin/AdminContainer.js'
import Footer from './../Footer/FooterContainer.js'

class App extends Component {
  render () {
    const { admin } = this.props
    return (
      <div className='App'>
        {!admin &&
          <div className='App-main'>
            <Header />
            <Navbar />
            <div className='App-triangle' />
            <Collections />
            <Retailers />
            <About />
            <Contact />
            <Footer {...this.props} />
          </div>}
        {admin &&
        <Admin {...this.props} />
        }
      </div>

    )
  }
}

export default App
