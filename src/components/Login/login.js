import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css'

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
          {!user &&
              <div className="Login" id="login">
                  <h3>Log in</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.onChange}/>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.onChange}/>
                    <input type="submit" value="Log in"/>
                    <p>{message}</p>
                </form>
              </div>}
            </div>
        )
    }
}

export default Login;
