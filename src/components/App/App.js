import React, { Component } from 'react'
import './App.css'
import Header from './../Header/Header.js'
import Navbar from './../Navigation/Navigation.js'
import Collections from './../Collections/Collections.js'
import About from './../About/About.js'
import Retailers from './../Retailers/Retailers.js'
import Contact from './../Contact/Contact.js'
import Admin from './../Admin/Admin.js'
import Footer from './../Footer/Footer.js'

/*render() {
    if(this.state.user === 'none')
    {
      return (
        <div className='mainContainer'>
          <Loginform/>
        </div>
      );
    }
    else if(this.state.userType === 'admin'){
      return (
        <div className='mainContainer'>
          <Button onClick={this.logout}>logga ut</Button>
          <Admin userType={this.state.userType}/>
        </div>
      );
    }
    else{
      return (
        <Router>
          <div className='mainContainer'>
            <div className='mainMenu'>
              <nav>
                <ul>
                  <li><Link to="/">Feed</Link></li>
                  <li><Link to="/calendar">Kalender</Link></li>
                  <li><Link to="/rules">Regler</Link></li>
                  <li>TBA ramverk</li>
                </ul>
              </nav>
              <Button onClick={this.logout}>logga ut</Button>
            </div>

            <Route exact path="/" render={(props) => <DashboardRedirect {...props}/>}/>
            <Route exact path="/calendar" render={(props) => <Calendar {...props}/>}/>
            <Route exact path="/rules" render={(props) => <Rules {...props}/>}/>
          </div>
        </Router>
      );
    }
  }
*/
class App extends Component {
  render () {
    const { admin } = this.props
    return (
      <div className='App'>
        {!admin &&
          <div className='main'>
        <Header />
        <Navbar />
        <div className='triangle' />
        <Collections {...this.props}/>
        <Retailers />
        <About {...this.props}/>
        <Contact />
        <Footer {...this.props} />
      </div>}
        {admin &&
          <div className='admin-wrapper'>
          <Admin {...this.props} />
          </div>
        }
      </div>

    )
  }
}

export default App
