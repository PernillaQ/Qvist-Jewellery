import { connect } from 'react-redux'
import { appSelectors, appCreators } from './Duck'
import App from './App.js'
//get
// makes the states availible as props.
const mapStateToProps = state => {
  const theCity = appSelectors.getTheCity(state)
  const theDesert = appSelectors.getTheDesert(state)
  const showAllJewels = appSelectors.getShowAllJewels(state)
  const detailIndex = appSelectors.getDetailIndex(state)
  const admin = appSelectors.getAdmin(state)
  const user = appSelectors.getUser(state)
  const email = appSelectors.getEmail(state)
  const password = appSelectors.getPassword(state)
  const title = appSelectors.getTitle(state)
  const content = appSelectors.getContent(state)
  const fileName = appSelectors.getFileName(state)
  const selectedImage = appSelectors.getSelectedImage(state)
  const url = appSelectors.getUrl(state)

  return {
    theCity,
    theDesert,
    showAllJewels,
    detailIndex,
    admin,
    user,
    email,
    password,
    title,
    content,
    fileName,
    selectedImage,
    url
  }
}
//set
const mapDispatchToProps = dispatch => {
  const toggleTheCity = (value) => dispatch(appCreators.toggleTheCity(value))
  const toggleTheDesert = (value) => dispatch(appCreators.toggleTheDesert(value))
  const toggleShowAllJewels = (value) => dispatch(appCreators.toggleShowAllJewels(value))
  const setDetailIndex = (value) => dispatch(appCreators.setDetailIndex(value))
  const toggleAdmin = (value) => dispatch(appCreators.toggleAdmin(value))
  const setUser = (value) => dispatch(appCreators.setUser(value))
  const setEmail = (value) => dispatch(appCreators.setEmail(value))
  const setPassword = (value) => dispatch(appCreators.setPassword(value))
  const setTitle = (value) => dispatch(appCreators.setTitle(value))
  const setContent = (value) => dispatch(appCreators.setContent(value))
  const setFileName = (value) => dispatch(appCreators.setFileName(value))
  const setSelectedImage = (value) => dispatch(appCreators.setSelectedImage(value))
  const setUrl = (value) => dispatch(appCreators.setUrl(value))

  return {
    toggleTheCity,
    toggleTheDesert,
    toggleShowAllJewels,
    setDetailIndex,
    toggleAdmin,
    setUser,
    setEmail,
    setPassword,
    setTitle,
    setContent,
    setFileName,
    setSelectedImage,
    setUrl
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
