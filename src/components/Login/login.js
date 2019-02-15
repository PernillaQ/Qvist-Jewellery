import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css'

class Login extends Component{

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

   onLogin = () => {
    const { email, password } = this.props
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(console.log("signed in:", email))
    .catch(error => console.log(error));
   }
   /*
   e.preventDefault();
const { email, password } = this.state;
if (validateLogin(email, password)) {
  api.signIn(email, password)
    .catch(({message}) => {
      this.setState({
        message: { type: 'ERROR', body: message },
        email: '',
        password: ''
      });
    });
} else {
  this.setState({
    message: { type: 'ERROR', body: 'Wrong password or email' },
    email: '',
    password: ''
  });
}*/

   onLogout = () => {
    firebase.auth()
    .signOut()
    .then(console.log("signed out"))
   }

   onSubmit = e => {
     const { email, password } = this.props
    e.preventDefault();
    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(console.log("created user"))
    .catch(error => console.log(error))
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
      const { user, email, password } = this.props
        return(
              <div className="login" id="login">
                {user &&
                  <h2>Welcome</h2>}
                {!user &&
                  <h2>Log in</h2>}
                <form onSubmit={this.onSubmit}>
                  {!user &&
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.onChange}/>}
                  {!user &&
                    <input type="password" name="password" placeholder="Password" value={password} onChange={this.onChange}/>}
                  {!user &&
                    <input type="submit" value="Register"/>}
                </form>
                  {!user &&
                    <button onClick={this.onLogin}>log in</button>}
                  {user &&
                    <button onClick={this.onLogout}>log out</button>}
              </div>
        )
    }
}

export default Login;
