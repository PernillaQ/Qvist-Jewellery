import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css'
//import api from './../../Utils/firebase.js';

class Login extends Component{
  /*state = {
    message:''
  }*/

// when user sign in
   componentDidMount(){
     const { setUser } = this.props
    firebase.auth()
     .onAuthStateChanged((user) => {
        if(user){
            // If user exists save user in state
            setUser(user)
        }
        else{
            // If not..
         setUser('')
        }
     })
   }

   onSubmit = e => {
     const { email, password, setMessage } = this.props
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(setMessage("signed in:" + email))
     .catch(error => setMessage(error));
    e.preventDefault();
   }

   // listner function.value save in event -store in state. name email, name password
onChange = e => {
  const {setEmail, setPassword} = this.props
  if (e.target.name === 'email'){
    setEmail(e.target.value)
  }
  if (e.target.name === 'password'){
    setPassword(e.target.value)
  }
}
    render(){

      const { user, email, password, message} = this.props
            console.log( email, password, message)
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
                    <input type="submit" value="Log in"/>}
                </form>
              </div>
            </div>
        )
    }
}

export default Login;
