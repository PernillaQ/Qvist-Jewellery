import { connect } from 'react-redux'
import { appSelectors, appCreators } from './../App/Duck'
import Admin from './Admin.js'

const mapStateToProps = state => {
  const user = appSelectors.getUser(state)
  const email = appSelectors.getEmail(state)
  const password = appSelectors.getPassword(state)
  const message = appSelectors.getMessage(state)
  const allPosts = appSelectors.getAllPosts(state)
  const retailers = appSelectors.getRetailers(state)
  const title = appSelectors.getTitle(state)
  const content = appSelectors.getContent(state)
  const location = appSelectors.getLocation(state)
  const website = appSelectors.getWebsite(state)
  const file = appSelectors.getFile(state)
  const selectedImage = appSelectors.getSelectedImage(state)
  const url = appSelectors.getUrl(state)
  const introImage = appSelectors.getIntroImage(state)
  const newCollection = appSelectors.getNewCollection(state)
  const collection = appSelectors.getCollection(state)
  const addCollection = appSelectors.getAddCollection(state)
  const collectionOptions = appSelectors.getCollectionOptions(state)
  const detailView = appSelectors.getDetailView(state) // ?
  const removePost = appSelectors.getRemovePost(state)
  const addPost = appSelectors.getAddPost(state)
  const editStory = appSelectors.getEditStory(state)
  const editRetailers = appSelectors.getEditRetailers(state)

  return {
    user,
    email,
    password,
    message,
    allPosts,
    retailers,
    title,
    content,
    location,
    website,
    file,
    selectedImage,
    url,
    introImage,
    newCollection,
    collection,
    addCollection,
    collectionOptions,
    detailView,
    removePost,
    addPost,
    editStory,
    editRetailers
  }
}

const mapDispatchToProps = dispatch => {
  const toggleAdmin = (value) => dispatch(appCreators.toggleAdmin(value))
  const setUser = (value) => dispatch(appCreators.setUser(value))
  const setEmail = (value) => dispatch(appCreators.setEmail(value))
  const setPassword = (value) => dispatch(appCreators.setPassword(value))
  const setMessage = (value) => dispatch(appCreators.setMessage(value))
  const setTitle = (value) => dispatch(appCreators.setTitle(value))
  const setContent = (value) => dispatch(appCreators.setContent(value))
  const setLocation = (value) => dispatch(appCreators.setLocation(value))
  const setWebsite = (value) => dispatch(appCreators.setWebsite(value))
  const setFile = (value) => dispatch(appCreators.setFile(value))
  const setSelectedImage = (value) => dispatch(appCreators.setSelectedImage(value))
  const setUrl = (value) => dispatch(appCreators.setUrl(value))
  const toggleIntroImage = (value) => dispatch(appCreators.toggleIntroImage(value))
  const setNewCollection = (value) => dispatch(appCreators.setNewCollection(value))
  const setCollection = (value) => dispatch(appCreators.setCollection(value))
  const setAddCollection = (value) => dispatch(appCreators.setAddCollection(value))
  const setDetailView = (value) => dispatch(appCreators.setDetailView(value)) // ?
  const toggleRemovePost = (value) => dispatch(appCreators.toggleRemovePost(value))
  const toggleAddPost = (value) => dispatch(appCreators.toggleAddPost(value))
  const toggleEditStory = (value) => dispatch(appCreators.toggleEditStory(value))
  const toggleEditRetailers = (value) => dispatch(appCreators.toggleEditRetailers(value))

  return {
    toggleAdmin,
    setUser,
    setEmail,
    setPassword,
    setMessage,
    setTitle,
    setContent,
    setLocation,
    setWebsite,
    setFile,
    setSelectedImage,
    setUrl,
    toggleIntroImage,
    setNewCollection,
    setCollection,
    setAddCollection,
    setDetailView,
    toggleRemovePost,
    toggleAddPost,
    toggleEditStory,
    toggleEditRetailers
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)
