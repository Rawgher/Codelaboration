import React, { Component } from 'react'
import { connect } from 'react-redux'
class ReduxTestPage extends Component {
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
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTestPage)
