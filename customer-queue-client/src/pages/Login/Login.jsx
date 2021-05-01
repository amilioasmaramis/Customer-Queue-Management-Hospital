import React, { useEffect, useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { loginUser, registerUser } from '../../store/action'

export default function Login() {
  const [active, setActive] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const isLogin = useSelector(state => state.customer.isLogin)

  const signInClick = () => {
    setActive(false)
  }

  const signUpClick = () => {
    setActive(true)
  }

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      history.push('/')
    }
  }, [history])

  useEffect(() => {
    if (isLogin) {
      history.push('/')
    }
  }, [isLogin, history])
  
  const handleSubmitRegister = (e) => {
    e.preventDefault()
    dispatch(registerUser({username, email, password}))
    setActive(false)
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(loginUser({email, password}))
  }

  return (
    <section>
      <div className={active ? "container active" : "container"}>
        <div className="user signinBx">
          <div className="imgBx"><img src="https://images.unsplash.com/photo-1556742095-adaf2611556c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlZ2lzdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /></div>
          <div className="formBx">
            <form action="" onSubmit={(e) => handleSubmitLogin(e)}>
              <h2>Sign In</h2>
              <input 
                type="text" 
                name="" 
                placeholder="Username" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="password" 
                name="" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" name="" value="Login" />
              <p className="signup">
                Don't have an account ?
                <a href="#" onClick={signUpClick}>Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form action="" onSubmit={(e) => handleSubmitRegister(e)}>
              <h2>Create an account</h2>
              <input 
                type="text" 
                name="" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="email" 
                name="" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                type="password" 
                name="" 
                placeholder="Create Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input 
                type="password" 
                name="" 
                placeholder="Confirm Password"
                required 
              />
              <input type="submit" name="" value="Sign Up" />
              <p className="signup">
                Already have an account ?
                <a href="#" onClick={signInClick}>Sign in.</a>
              </p>
            </form>
          </div>
          <div className="imgBx"><img src="https://images.unsplash.com/photo-1556742208-999815fca738?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlZ2lzdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /></div>
        </div>
      </div>
    </section>
  )
}