
import HttpService from '../../services/HttpService'
import { playerInformation, } from '../types'

export const getPlayerInformation = (playerId) => {
  return async dispatch => {
    const http = new HttpService()
        
    dispatch({ type: playerInformation.GET_PLAYER_INFORMATION_PENDING, })

    const tokenId = "user-token"
    const path = 'v1/player-information?playerId='+playerId
    await new Promise((resolve, reject) => {
      http.getData(http.domain+'/sanctum/csrf-cookie').then( 
        http.getData(path, tokenId).then(res => {
          resolve(dispatch({
            type: playerInformation.GET_PLAYER_INFORMATION_SUCCESS,
            payload: res.data.data,
          }))                
        }, error => {
          reject(dispatch({ 
            type : playerInformation.GET_PLAYER_INFORMATION_ERROR, 
            payload: error,
          }))
        })
      ).catch(error => {
        reject(dispatch({ 
          type : playerInformation.GET_PLAYER_INFORMATION_ERROR, 
          payload: error,
        }))
      })
    })
  }
}
