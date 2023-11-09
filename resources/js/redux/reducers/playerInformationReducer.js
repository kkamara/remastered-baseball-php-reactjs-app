import { playerInformation, } from '../types'

const initState = {
  data: null,
  error: null,
  loading: false,
}

export default function playerInformationReducer (state = initState, action) {
  switch (action.type) {
    
    case playerInformation.GET_PLAYER_INFORMATION_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    
    case playerInformation.GET_PLAYER_INFORMATION_PENDING:
      return {
        ...state,
        loading: true,
      }
    
    case playerInformation.GET_PLAYER_INFORMATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
