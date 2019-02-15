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

const getTitle = (state) => {
  return getApp(state).title
}

const getContent = (state) => {
  return getApp(state).content
}

const getFileName = (state) => {
  return getApp(state).fileName
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
  getTitle,
  getContent,
  getFileName,
  getSelectedImage,
  getUrl
}
