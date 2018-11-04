import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { initialState } from './reducers'

const createStore = () => reduxCreateStore(reducer, initialState, applyMiddleware(thunk))

export default createStore
