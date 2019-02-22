import { createActions } from 'reduxsauce'

// actiontype, payload (to be state).
const { Types, Creators } = createActions({
  toggleCollectionIntroView: ['value'],
  toggleTheCity: ['value'],
  toggleTheDesert: ['value'],
  toggleShowAllJewels: ['value'],
  setDetailView: ['value'],
  setUser: ['value'],
  setEmail: ['value'],
  setPassword: ['value'],
  setMessage: ['value'],
  toggleAdmin: ['value'],
  setCollectionOptions: ['value'],
  setNewCollection: ['value'],
  setAddCollection: ['value'],
  setCollection: ['value'],
  setAllCityPosts: ['value'],
  setAllDesertPosts: ['value'],
  setDetailId: ['value'],
  setTitle: ['value'],
  setContent: ['value'],
  setFile: ['value'],
  setSelectedImage: ['value'],
  setUrl: ['value'],
  toggleIntroImage: ['value']
}, {})

export { Types, Creators }
