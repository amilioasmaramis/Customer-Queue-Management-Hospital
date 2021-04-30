import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history.push('/login')
    }
  }, [history])

  return (
    <h1>INI HALAMAN HOME</h1>
  )
}