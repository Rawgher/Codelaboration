import React, { Component } from 'react'
import './Title.css'

class Title extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div id="EGA-splashMain">
            <h1
              className="EGA-opacity EGA-codelaborationTitleAcPage"
              id="EGA-codelaborationTitle"
            >
              <span id="EGA-codeSpan">CODE</span>
              <span id="EGA-laborationSpan">LABORATION</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Title
