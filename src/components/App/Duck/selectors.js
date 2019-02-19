// returns state.
const getApp = state => state.app

const getTheCity = (state) => {
  return getApp(state).theCity
}

const getTheDesert = (state) => {
  return getApp(state).theDesert
}

const getShowAllJewels = (state) => {
  return getApp(state).showAllJewels
}

const getDetailIndex = (state) => {
  return getApp(state).detailIndex
}

const getAdmin = (state) => {
  return getApp(state).admin
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

export default {
  getTheCity,
  getTheDesert,
  getShowAllJewels,
  getDetailIndex,
  getAdmin,
  getUser,
  getEmail,
  getPassword,
  getMessage,
  getCollectionOptions,
  getNewCollection,
  getAddCollection,
  getCollection,
  getTitle,
  getContent,
  getFile,
  getSelectedImage,
  getUrl
}
