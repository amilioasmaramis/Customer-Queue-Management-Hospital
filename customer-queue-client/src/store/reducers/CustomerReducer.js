// Reducers untuk budget dan user

const initialState = {
  access_token: '',
  customers: [],
  isLogin: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case 'ACCESS_TOKEN/SET_ACCESS_TOKEN':
      return { ...state, access_token: payload }

    case "CUSTOMER/SET_CUSTOMER":
      return { ...state, customers: JSON.parse(JSON.stringify(payload)) }

    case "LOGIN/SET_SETISLOGIN":
      return { ...state, isLogin: payload }
    default:
      return state
  }
}

export default reducer
