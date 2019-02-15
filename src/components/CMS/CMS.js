import React, { Component } from 'react'
import './CMS.css'
import Login from './../Login/login.js'
import AddPost from './Post/AddPost.js'

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
    const { user } = this.props
    return (
      {!user &&
        <div className='login-wrapper'>
          <Login {...this.props} />
        </div>}
        {user &&
          <div className='post-wrapper'>
          <AddPost {this.props} />
          </div>
        }
      <div className='App'>
        <Header />
        <Navbar />
        <div className='triangle' />
        <Collections {...this.props}/>
      {/*  <div className='App-gradientsCorrector' />*/}
        <Retailers />
        <Login {...this.props} />
        <About />
        <Contact />
        {/* <div className='parallax' /> */}
      </div>
    )
  }
}

export default App
