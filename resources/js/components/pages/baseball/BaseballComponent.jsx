import React, { useEffect, useState, } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { PhotoView } from 'react-image-previewer';
import moment from 'moment'
import { getPlayerList, } from '../../../redux/actions/playerListActions'
import { getPlayerInformation, } from '../../../redux/actions/playerInformationActions'
import { authorize } from '../../../redux/actions/authActions'

import "./BaseballComponent.scss"

export default function BaseballComponent() {
  const [playerId, setPlayerId] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    auth: state.auth,
    playerList: state.playerList,
    playerInformation: state.playerInformation,
  }))

  useEffect(() => {
    dispatch(authorize())
    dispatch(getPlayerList())
  }, [])

  useEffect(() => {
    if (state.auth.error) {
      localStorage.removeItem('user-token')
      window.location.href = '/user/login'
    }
  }, [state.auth,])

  const handleChangePlayerId = (e) => {
    setPlayerId(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    dispatch(getPlayerInformation(playerId))
  }

  const renderPlayerIdOptions = () => {
    if (!state.playerList.data) {
      return null
    }
    return state.playerList.data.map(({ longName, playerID}, key) => (
      <option key={key} value={playerID}>{longName}</option>
    ))
  }

  const renderPlayerInformation = () => {
    if (!state.playerInformation.data) {
      return null
    }
    const {
      longName,
      bat,
      throw: throwingHand,
      playerID,
      mlbIDFull,
      height,
      lastGamePlayed,
      pos,
      mlbLink,
      bDay,
      espnID,
      mlbHeadshot,
      espnHeadshot,
      weight,
      jerseyNum,
      team,
    } = state.playerInformation.data
    return <div className="card baseball-card">
      <div className="card-header">
        <div className="row">
          {mlbHeadshot ? <PhotoView src={mlbHeadshot}>
              <img 
                src={mlbHeadshot} 
                alt="mlb-headshot" 
                className="headshot"
              />
            </PhotoView> : null}
          {espnHeadshot ? <PhotoView src={espnHeadshot}>
              <img 
                src={espnHeadshot} 
                alt="espn-headshot"  
                className="headshot"
              />
            </PhotoView> : null}
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <p className="lead">{longName}</p>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">
                  <strong>Bat:</strong> {bat}
                </th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }

  if (!state.auth.loading && typeof state.auth.data === 'object' && null !== state.auth.data) {
    console.log('authenticated', state.auth.data)
  }
  console.log("playerInformation", state.playerInformation.data)
  if (state.auth.loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className='container baseball-container'>
        <div className="row">
          <div className="col-md-6">
            <form className="form" onSubmit={handleFormSubmit}>
              <div className="form-group player-id-container">
                <label htmlFor="playerId">Choose player</label>
                <select 
                  className='form-control'
                  name="playerId" 
                  id="player-id"
                  onChange={handleChangePlayerId}
                  value={playerId}
                >
                  <option value="">None selected</option>
                  {renderPlayerIdOptions()}
                </select>
              </div>
              <input 
                value="Go"
                type="submit" 
                className="btn btn-lg btn-success" 
              />
            </form>
          </div>
          <div className="col-md-6">
            {renderPlayerInformation()}
          </div>
        </div>
      </div>
    </>       
  )
}
