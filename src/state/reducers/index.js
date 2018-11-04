import { LOAD_PROFILE_SUCCESS } from '../../actions/profile'
// import { LOAD_COLLAB_SUCCESS } from '../../actions/collabs'

export const initialState = {
  site: {},
  user: {
    id: null,
    name: null,
    email: null,
    postedCollabs: {},
    appliedCollabs: {},
  },
  collabs: {},
}

const reducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.profile,
        },
      }
    // case LOAD_COLLAB_SUCCESS:
    //   return {
    //     ...state,
    //     collabs: {
    //       ...state.collabs,
    //       ...action.collabs,
    //     },
    //   }
    default:
      return state
  }
}

export default reducer
