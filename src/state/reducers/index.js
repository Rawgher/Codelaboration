import { LOAD_PROFILE_SUCCESS } from '../../actions/profile'

export const initialState = {
  site: {},
  user: {
    id: null,
    name: null,
    email: null,
    postedCollabs: {},
    appliedCollabs: {}
  },
  collabs: {} 
}


const reducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type){
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.profile
        }
      }
    default: 
      return state
  }
}

export default reducer
