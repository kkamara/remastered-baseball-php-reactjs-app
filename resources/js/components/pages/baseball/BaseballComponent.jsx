import React, { useEffect, } from 'react'
import { useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import moment from 'moment'
import { getPlayerList, } from '../../../redux/actions/playerListActions'
import { authorize } from '../../../redux/actions/authActions'

import "./BaseballComponent.scss"

export default function BaseballComponent() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const state = useSelector(state => ({
    auth: state.auth,
    playerList: state.playerList,
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  if (!state.auth.loading && typeof state.auth.data === 'object' && null !== state.auth.data) {
    console.log('authenticated', state.auth.data)
  }
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
                >
                  <option value="">None selected</option>
                </select>
              </div>
              <input 
                value="Go"
                type="submit" 
                className="btn btn-lg btn-success" 
              />
            </form>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>       
  )
}
