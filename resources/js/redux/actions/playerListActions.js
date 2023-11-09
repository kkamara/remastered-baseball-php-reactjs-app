
import HttpService from '../../services/HttpService'
import { playerList, } from '../types'

export const getPlayerList = () => {
  return async dispatch => {
    const http = new HttpService()
        
    dispatch({ type: playerList.GET_PLAYER_LIST_PENDING, })

    const tokenId = "user-token"
    const path = 'v1/player-list'
    await new Promise((resolve, reject) => {
      http.getData(http.domain+'/sanctum/csrf-cookie').then( 
        http.getData(path, tokenId).then(res => {
          resolve(dispatch({
            type: playerList.GET_PLAYER_LIST_SUCCESS,
            payload: res.data.data.body,
          }))                
        }, error => {
          reject(dispatch({ 
            type : playerList.GET_PLAYER_LIST_ERROR, 
            payload: error,
          }))
        })
      ).catch(error => {
        reject(dispatch({ 
          type : playerList.GET_PLAYER_LIST_ERROR, 
          payload: error,
        }))
      })
    })
  }
}
