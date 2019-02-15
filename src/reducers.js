import { combineReducers } from 'redux'
import appReducer from './components/App/Duck'

const rootReducer = combineReducers({
  app: appReducer
})

export default rootReducer
