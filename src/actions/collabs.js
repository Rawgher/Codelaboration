// import axios from 'axios'

// export const LOAD_COLLAB_SUCCESS = 'LOAD_COLLAB_SUCCESS'
// const COLLAB_URL = '/.netlify/functions/collabs'

// export const loadCollabSuccess = collabs => ({
//   type: LOAD_COLLAB_SUCCESS,
//   collabs,
// })

// export const loadCollab = () => dispatch => {
//   axios.get(COLLAB_URL).then(response => {
//     if (response.status === 200 && response.data) {
//       const collabs = response.data
//       console.log('collabs', collabs)
//       dispatch(loadCollabSuccess(collabs))
//     } else {
//       console.log('error loading collab', response)
//     }
//   })
// }
