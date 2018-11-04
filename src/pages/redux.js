import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadProfile } from '../actions/profile'
// import { loadCollabs } from '../actions/collabs'
class ReduxTestPage extends Component {
  componentWillMount() {
    this.props.loadProfile()
    // this.props.loadCollab()
  }
  render() {
    return (
      <div>
        Hello, This is a redux test page User Props:{' '}
        {JSON.stringify(this.props.user)}
        {/* collabs: {JSON.stringify(this.props.collabs)} */}
        {/* apps: {JSON.stringify(this.props.user)} */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    user: state.user,
    // collabs: state.collabs,
  }
}

// function mapDispatchToProps (dispatch) {
//   return {

//   }
// }

export default connect(
  mapStateToProps,
  { loadProfile }
  // { loadCollabs }
)(ReduxTestPage)
