import { connect } from 'react-redux'
import { appSelectors, appCreators } from './Duck'
import App from './App.js'
//  get
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
  const message = appSelectors.getMessage(state)
  const collectionOptions = appSelectors.getCollectionOptions(state)
  const newCollection = appSelectors.getNewCollection(state)
  const addCollection = appSelectors.getAddCollection(state)
  const collection = appSelectors.getCollection(state)
  const allCityPosts = appSelectors.getAllCityPosts(state)
  const allDesertPosts = appSelectors.getAllDesertPosts(state)
  const title = appSelectors.getTitle(state)
  const content = appSelectors.getContent(state)
  const file = appSelectors.getFile(state)
  const selectedImage = appSelectors.getSelectedImage(state)
  const url = appSelectors.getUrl(state)
  const introImage = appSelectors.getIntroImage(state)

  return {
    theCity,
    theDesert,
    showAllJewels,
    detailIndex,
    admin,
    user,
    email,
    password,
    message,
    collectionOptions,
    newCollection,
    addCollection,
    collection,
    allCityPosts,
    allDesertPosts,
    title,
    content,
    file,
    selectedImage,
    url,
    introImage
  }
}
//  set
const mapDispatchToProps = dispatch => {
  const toggleTheCity = (value) => dispatch(appCreators.toggleTheCity(value))
  const toggleTheDesert = (value) => dispatch(appCreators.toggleTheDesert(value))
  const toggleShowAllJewels = (value) => dispatch(appCreators.toggleShowAllJewels(value))
  const setDetailIndex = (value) => dispatch(appCreators.setDetailIndex(value))
  const toggleAdmin = (value) => dispatch(appCreators.toggleAdmin(value))
  const setUser = (value) => dispatch(appCreators.setUser(value))
  const setEmail = (value) => dispatch(appCreators.setEmail(value))
  const setPassword = (value) => dispatch(appCreators.setPassword(value))
  const setMessage = (value) => dispatch(appCreators.setMessage(value))
  const setCollectionOptions = (value) => dispatch(appCreators.setCollectionOptions(value))
  const setNewCollection = (value) => dispatch(appCreators.setNewCollection(value))
  const setAddCollection = (value) => dispatch(appCreators.setAddCollection(value))
  const setCollection = (value) => dispatch(appCreators.setCollection(value))
  const setAllCityPosts = (value) => dispatch(appCreators.setAllCityPosts(value))
  const setAllDesertPosts = (value) => dispatch(appCreators.setAllDesertPosts(value))
  const setTitle = (value) => dispatch(appCreators.setTitle(value))
  const setContent = (value) => dispatch(appCreators.setContent(value))
  const setFile = (value) => dispatch(appCreators.setFile(value))
  const setSelectedImage = (value) => dispatch(appCreators.setSelectedImage(value))
  const setUrl = (value) => dispatch(appCreators.setUrl(value))
  const toggleIntroImage = (value) => dispatch(appCreators.toggleIntroImage(value))

  return {
    toggleTheCity,
    toggleTheDesert,
    toggleShowAllJewels,
    setDetailIndex,
    toggleAdmin,
    setUser,
    setEmail,
    setPassword,
    setMessage,
    setCollectionOptions,
    setNewCollection,
    setAddCollection,
    setCollection,
    setAllCityPosts,
    setAllDesertPosts,
    setTitle,
    setContent,
    setFile,
    setSelectedImage,
    setUrl,
    toggleIntroImage
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
