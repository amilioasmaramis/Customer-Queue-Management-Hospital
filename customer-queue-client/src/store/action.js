import axios from '../config-api/axios'

export function setIsLogin(payload) {
  return { type: 'LOGIN/SET_SETISLOGIN', payload }
}

export function setAccessToken(payload) {
  return { type: 'ACCESS_TOKEN/SET_ACCESS_TOKEN', payload }
}

export function setCustomers(payload) {
  return { type: 'CUSTOMERS/SET_CUSTOMERS', payload }
}

export function setCustomer(payload) {
  return { type: 'CUSTOMER/SET_CUSTOMER', payload }
}

export function setInputSearch(payload) {
  return { type: "INPUTSEARCH/SETINPUTSEARCH", payload}
}

export function setSearch(payload) {
  return { type: "SEARCH/SETSEARCHPASIEN", payload}
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

export function fetchCustomer(payload) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: '/customers/',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      dispatch(setCustomers(response.data.dataCustomer))
      dispatch(setSearch(response.data.dataCustomer))
    } catch(err) {
      console.log(err)
    }
  }
}

export function postCustomer(payload) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: '/customers/',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          nama: payload.nama,
          umur: payload.umur,
          jenisKelamin: payload.jenisKelamin,
          pekerjaan: payload.pekerjaan,
          namaIbu: payload.namaIbu,
          kota: payload.kota,
          agama: payload.agama,
          golDarah: payload.golDarah,
          noKtp: payload.noKtp,
          tujuanPasien: payload.tujuanPasien
        }
      })
      console.log(response)
      dispatch(fetchCustomer())
    } catch(err) {
      console.log(err, '<<<< dari action')
      alert(`${err.response.data.message}`)
    }
  }
}

export function updateStatusIsServed(payload) {
  return async (dispatch) => {
    try {
      const response = await axios({
        url: '/customers/' + payload.id,
          method: 'PUT',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
      })
      dispatch(fetchCustomer())
    } catch(err) {
      console.log(err, '<<<< dari action')
      alert(`${err.response.data.message}`)
    }
  }
}