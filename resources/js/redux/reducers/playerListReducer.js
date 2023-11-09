import { playerList, } from '../types'

const initState = {
  data: null,
  error: null,
  loading: false,
}

export default function playerListReducer (state = initState, action) {
  switch (action.type) {
    
    case playerList.GET_PLAYER_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    
    case playerList.GET_PLAYER_LIST_PENDING:
      return {
        ...state,
        loading: true,
      }
    
    case playerList.GET_PLAYER_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
