import React, { Component } from 'react'
import './MyCollabs.css'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card'
import Title from '../Title/Title'

class MyCollabs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row" id="EGA-myCollabsMain">
          <div className="col-md-3">
            <NavBar />
          </div>

          <div className="col-md-9" id="EGA-cardWrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    )
  }
}
export default MyCollabs
