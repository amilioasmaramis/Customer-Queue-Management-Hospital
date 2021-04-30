import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import customerReducer from './reducers/CustomerReducer'

const rootReducer =  combineReducers({
  customer: customerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
