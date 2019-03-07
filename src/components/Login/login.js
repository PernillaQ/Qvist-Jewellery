import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css'
//import api from './../../Utils/firebase.js';

class Login extends Component{

   componentDidMount(){
     const { setUser } = this.props
    firebase.auth()
     .onAuthStateChanged((user) => {
        user? setUser(user):setUser('')
      })
   }

   onSubmit = e => {
     const { email, password, setMessage } = this.props
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(setMessage("signed in:" + email))
     .catch(error => setMessage(error.message));
    e.preventDefault();
   }

onChange = e => {
  const {setEmail, setPassword} = this.props
  e.target.name === 'email'? setEmail(e.target.value) : setPassword(e.target.value)
}

    render(){
      const { user, email, password, message} = this.props
      console.log(message)
        return(
          <div className='Login-wrapper'>
              <div className="Login" id="login">
                {!user &&
                  <h3>Log in</h3>}
                <form onSubmit={this.onSubmit}>
                  {!user &&
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.onChange}/>}
                  {!user &&
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.onChange}/>}
                  {!user &&
                    <p>{message}</p>}
                  {!user &&
                    <input type="submit" value="Log in"/>}
                </form>
              </div>
            </div>
        )
    }
}

export default Login;
