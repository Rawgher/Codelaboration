import { createStore as reduxCreateStore } from 'redux'
import reducer from './reducers'

const createStore = () => reduxCreateStore(reducer)

export default createStore
