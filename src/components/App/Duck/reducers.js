import { createReducer } from 'reduxsauce'
import { Types } from './actions'
import { INITIAL_STATE } from './initialState'

// Reducer sets state based on type, with or without payload.
const _toggleCollectionIntroView = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    collectionIntroView: action.value
  }
}
const _toggleTheCity = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    theCity: action.value
  }
}

const _toggleTheDesert = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    theDesert: action.value
  }
}

const _toggleShowAllJewels = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    showAllJewels: action.value
  }
}

const _setDetailView = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    detailView: action.value
  }
}

const _toggleAdmin = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    admin: action.value
  }
}

const _setUser = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    user: action.value
  }
}
const _setEmail = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    email: action.value
  }
}

const _setPassword = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    password: action.value
  }
}

const _setMessage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    message: action.value
  }
}

const _setCollectionOptions = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    collectionOptions: action.value
  }
}

const _setNewCollection = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    newCollection: action.value
  }
}

const _setAddCollecion = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    addCollection: action.value
  }
}
const _setCollection = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    collection: action.value
  }
}

const _setAllCityPosts = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    allCityPosts: action.value
  }
}

const _setAllDesertPosts = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    allDesertPosts: action.value
  }
}

const _setDetailId = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    detailId: action.value
  }
}

const _setTitle = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    title: action.value
  }
}

const _setContent = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    content: action.value
  }
}

const _setFile = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    file: action.value
  }
}

const _setSelectedImage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selectedImage: action.value
  }
}

const _setUrl = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    url: action.value
  }
}

const _toggleIntroImage = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    introImage: action.value
  }
}

// redux sauce - map actiontype to reducer.
const HANDLERS = {
  [Types.TOGGLE_COLLECTION_INTRO_VIEW]: _toggleCollectionIntroView,
  [Types.TOGGLE_THE_CITY]: _toggleTheCity,
  [Types.TOGGLE_THE_DESERT]: _toggleTheDesert,
  [Types.TOGGLE_SHOW_ALL_JEWELS]: _toggleShowAllJewels,
  [Types.SET_DETAIL_VIEW]: _setDetailView,
  [Types.TOGGLE_ADMIN]: _toggleAdmin,
  [Types.SET_USER]: _setUser,
  [Types.SET_EMAIL]: _setEmail,
  [Types.SET_PASSWORD]: _setPassword,
  [Types.SET_MESSAGE]: _setMessage,
  [Types.SET_COLLECTION_OPTIONS]: _setCollectionOptions,
  [Types.SET_NEW_COLLECTION]: _setNewCollection,
  [Types.SET_ADD_COLLECTION]: _setAddCollecion,
  [Types.SET_COLLECTION]: _setCollection,
  [Types.SET_ALL_CITY_POSTS]: _setAllCityPosts,
  [Types.SET_ALL_DESERT_POSTS]: _setAllDesertPosts,
  [Types.SET_DETAIL_ID]: _setDetailId,
  [Types.SET_TITLE]: _setTitle,
  [Types.SET_CONTENT]: _setContent,
  [Types.SET_FILE]: _setFile,
  [Types.SET_SELECTED_IMAGE]: _setSelectedImage,
  [Types.SET_URL]: _setUrl,
  [Types.TOGGLE_INTRO_IMAGE]: _toggleIntroImage
}

export default createReducer(INITIAL_STATE, HANDLERS)
