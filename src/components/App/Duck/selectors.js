// returns state.
const getApp = state => state.app

const getCollectionIntroView = (state) => {
  return getApp(state).collectionIntroView
}

const getShowAllJewels = (state) => {
  return getApp(state).showAllJewels
}

const getDetailView = (state) => {
  return getApp(state).detailView
}

const getAdmin = (state) => {
  return getApp(state).admin
}

const getRemovePost = (state) => {
  return getApp(state).removePost
}

const getAddPost = (state) => {
  return getApp(state).addPost
}

const getUser = (state) => {
  return getApp(state).user
}

const getEmail = (state) => {
  return getApp(state).email
}

const getPassword = (state) => {
  return getApp(state).password
}

const getMessage = (state) => {
  return getApp(state).message
}

const getCollectionOptions = (state) => {
  return getApp(state).collectionOptions
}

const getNewCollection = (state) => {
  return getApp(state).newCollection
}

const getAddCollection = (state) => {
  return getApp(state).addCollection
}

const getCollection = (state) => {
  return getApp(state).collection
}

const getAllPosts = (state) => {
  return getApp(state).allPosts
}

const getDetailId = (state) => {
  return getApp(state).detailId
}

const getTitle = (state) => {
  return getApp(state).title
}

const getContent = (state) => {
  return getApp(state).content
}

const getFile = (state) => {
  return getApp(state).file
}

const getSelectedImage = (state) => {
  return getApp(state).selectedImage
}

const getUrl = (state) => {
  return getApp(state).url
}

const getIntroImage = (state) => {
  return getApp(state).introImage
}

export default {
  getCollectionIntroView,
  getShowAllJewels,
  getDetailView,
  getAdmin,
  getRemovePost,
  getAddPost,
  getUser,
  getEmail,
  getPassword,
  getMessage,
  getCollectionOptions,
  getNewCollection,
  getAddCollection,
  getCollection,
  getAllPosts,
  getDetailId,
  getTitle,
  getContent,
  getFile,
  getSelectedImage,
  getUrl,
  getIntroImage
}
