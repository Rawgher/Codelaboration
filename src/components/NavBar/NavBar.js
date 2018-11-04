import React, { Component } from 'react'
import './NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="nav flex-column">
              <a className="nav-link active EGA-a" href="#">
                Home
              </a>
              <a className="nav-link EGA-a" href="#">
                Contact us
              </a>
              <a className="nav-link EGA-a" href="#">
                Profile
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
