import { createActions } from 'reduxsauce'

// actiontype, payload (to be state).
const { Types, Creators } = createActions({
  toggleTheCity: ['value'],
  toggleTheDesert: ['value'],
  toggleShowAllJewels: ['value'],
  setDetailIndex: ['value'],
  setUser: ['value'],
  setEmail: ['value'],
  setPassword: ['value'],
  setMessage: ['value'],
  toggleAdmin: ['value'],
  setCollectionOptions: ['value'],
  setNewCollection: ['value'],
  setAddCollection: ['value'],
  setCollection: ['value'],
  setTitle: ['value'],
  setContent: ['value'],
  setFile: ['value'],
  setSelectedImage: ['value'],
  setUrl: ['value']
}, {})

export { Types, Creators }
