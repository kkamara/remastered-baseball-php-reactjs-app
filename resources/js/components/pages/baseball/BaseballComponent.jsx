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

  const handlePageChange = ({ selected, }) => {
    const newPage = selected + 1
    if (selected > state.users.data.last_page) {
      return
    }
    dispatch(getUsers(newPage))
  }

  if (!state.auth.loading && typeof state.auth.data === 'object' && null !== state.auth.data) {
    console.log('authenticated', state.auth.data)
  }
  console.log("playerList", state.playerList)
  if (state.auth.loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className='container'>
        <br />
        <br />
        <button className='btn btn-primary'>
          Test button
        </button>
      </div>
    </>       
  )
}
