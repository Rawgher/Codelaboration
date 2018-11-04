import axios from 'axios'

export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS'
const PROFILE_URL = '/.netlify/functions/profile'

export const loadProfileSuccess = (profile) => ({
    type: LOAD_PROFILE_SUCCESS,
    profile
})

export const loadProfile = () => (dispatch) => {
  axios.get(PROFILE_URL).then(response => {
    if (response.status === 200 && response.data) {
        const profile = response.data
        console.log('profile', profile)
        // dispatch(loadProfileSuccess(profile))
    } else {
        console.log('error loading profile', response)
    }
  })
}
