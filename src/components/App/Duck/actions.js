import { createActions } from 'reduxsauce'

// actiontype, payload (to be state).
const { Types, Creators } = createActions({
  toggleCollectionIntroView: ['value'],
  toggleShowAllJewels: ['value'],
  setDetailView: ['value'],
  setUser: ['value'],
  setEmail: ['value'],
  setPassword: ['value'],
  setMessage: ['value'],
  toggleAdmin: ['value'],
  toggleRemovePost: ['value'],
  toggleAddPost: ['value'],
  toggleEditStory: ['value'],
  toggleEditRetailers: ['value'],
  setStoryContent: ['value'],
  setStoryImg: ['value'],
  setCollectionOptions: ['value'],
  setNewCollection: ['value'],
  setAddCollection: ['value'],
  setCollection: ['value'],
  setAllPosts: ['value'],
  setRetailers: ['value'],
  setDetailId: ['value'],
  setTitle: ['value'],
  setContent: ['value'],
  setLocation: ['value'],
  setWebsite: ['value'],
  setFile: ['value'],
  setSelectedImage: ['value'],
  setUrl: ['value'],
  toggleIntroImage: ['value']
}, {})

export { Types, Creators }
