import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import './navbar.css'

import { setIsLogin } from '../../store/action'

export default function Navbar() {
  const [active, setActiveNavbar] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const responsiveClickNavbar = () => {
    setActiveNavbar(true)
  }

  const logout = (e) => {
    e.preventDefault()
    localStorage.clear()
    history.push('/login')
    dispatch(setIsLogin(false))
  }

  return (
    <nav class="navbar">
      <span onClick={responsiveClickNavbar} class="navbar-toggle" id="js-navbar-toggle">
        <i class="fas fa-bars"></i>
      </span>
      <a href="#" class="logo">Hospital</a>
      <ul class="main-nav" id="js-menu-active">
        <li>
          <a href="#" class="nav-links">Visitor</a>
        </li>
        <li>
          <a onClick={(e) => logout(e)} class="nav-links">Logout</a>
        </li>
      </ul>
    </nav>
  )
}