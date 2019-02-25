import { connect } from 'react-redux'
import { appSelectors, appCreators } from './Duck'
import App from './App.js'

//  get ,makes the states availible as props.
const mapStateToProps = state => {
  const admin = appSelectors.getAdmin(state)
  const user = appSelectors.getUser(state)
  const email = appSelectors.getEmail(state)
  const password = appSelectors.getPassword(state)
  const message = appSelectors.getMessage(state)

  return {
    admin,
    user,
    email,
    password,
    message
  }
}
//  set
const mapDispatchToProps = dispatch => {
  const toggleAdmin = (value) => dispatch(appCreators.toggleAdmin(value))
  const setUser = (value) => dispatch(appCreators.setUser(value))
  const setEmail = (value) => dispatch(appCreators.setEmail(value))
  const setPassword = (value) => dispatch(appCreators.setPassword(value))
  const setMessage = (value) => dispatch(appCreators.setMessage(value))

  return {
    toggleAdmin,
    setUser,
    setEmail,
    setPassword,
    setMessage
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
