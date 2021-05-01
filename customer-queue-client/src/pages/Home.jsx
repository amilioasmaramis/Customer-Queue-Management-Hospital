import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { fetchCustomer } from '../store/action'

import Navbar from '../components/Navbar/Navbar'
import Customer from '../components/Customer/Customer'

export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  const customers = useSelector(state => state.customer.customers)
  console.log(customers)

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history.push('/login')
    }
  }, [history])

  useEffect(() => {
    dispatch(fetchCustomer())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Customer customers={customers} />
    </div>
  )
}