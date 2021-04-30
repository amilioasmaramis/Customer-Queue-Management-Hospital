import axios from '../config-api/axios'

export function setIsLogin(payload) {
  return { type: 'LOGIN/SET_SETISLOGIN', payload }
}

export function setAccessToken(payload) {
  return { type: 'ACCESS_TOKEN/SET_ACCESS_TOKEN', payload }
}

export function setCustomers(payload) {
  return { type: 'CUSTOMER/SET_CUSTOMER', payload }
}


export function registerUser(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/users/register',
        method: 'POST',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password
        }
      })
    } catch(err) {
      alert(`${err.response.data.message}`)
      console.log(err.response.data, 'catch error register')
    }
  }
}

export function loginUser(payload) {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: '/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      dispatch(setAccessToken(data.access_token))
      localStorage.setItem('username', data.username)
      localStorage.setItem('access_token', data.access_token)
      dispatch(setIsLogin(true))
    } catch(err) {
      console.log(err.response.data, 'catch error login')
      alert(`${err.response.data.message}`)
    }
  }
}
