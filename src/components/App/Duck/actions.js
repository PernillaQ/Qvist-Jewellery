import { createActions } from 'reduxsauce'

// actiontype, payload (to be state).
const { Types, Creators } = createActions({
  toggleTheCity:['value'],
  toggleTheDesert:['value'],
  toggleShowAllJewels:['value'],
  setDetailIndex: ['value'],
  setUser:['value'],
  setEmail:['value'],
  setPassword:['value'],
  toggleAdmin:['value'],
  setTitle:['value'],
  setContent:['value'],
  setFileName: '',
  setSelectedImage: null,
  setUrl: ''
}, {})

export { Types, Creators }
