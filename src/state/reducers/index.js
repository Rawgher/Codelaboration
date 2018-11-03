const initialState = {
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
  switch (action.type){
    default: 
      return state
  }
}

export default reducer
