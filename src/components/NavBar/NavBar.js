import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'gatsby'

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
              <Link to="/" className="nav-link active EGA-a">
                Home
              </Link>
              <Link to="/contact-us" className="nav-link active EGA-a">
                Contact Us
              </Link>
              <Link to="/user" className="nav-link active EGA-a">
                Profile
              </Link>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default NavBar
