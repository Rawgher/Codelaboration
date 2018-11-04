import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProfile } from '../actions/profile'
class ReduxTestPage extends Component {
  componentWillMount () {
    this.props.loadProfile()
  }
  render () {
    return (
      <div>
        Hello, This is a redux test page
        User Props: {JSON.stringify(this.props.user)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log('state', state)
  return {
    user: state.user
  }
}

// function mapDispatchToProps (dispatch) {
//   return { 

//   }
// }

export default connect(mapStateToProps, { loadProfile })(ReduxTestPage)
