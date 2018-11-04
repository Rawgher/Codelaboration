import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container" id="EGA-searchBarMain">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar ">
              <form className="form-inline" id="EGA-formInline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-warning my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchBar
