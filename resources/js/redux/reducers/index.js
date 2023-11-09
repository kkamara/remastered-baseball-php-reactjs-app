import { combineReducers, } from 'redux'
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import playerListReducer from './playerListReducer'
import playerInformationReducer from './playerInformationReducer'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  playerList: playerListReducer,
  playerInformation: playerInformationReducer,
})
