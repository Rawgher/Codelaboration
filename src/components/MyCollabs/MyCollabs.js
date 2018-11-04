import React, { Component } from 'react'
import './MyCollabs.css'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card'
import Title from '../Title/Title'
import info from '../../utils/info.json'

class MyCollabs extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    info,
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
            {this.state.info.map(info => (
              <Card
                id={info.id}
                key={info.id}
                collabName={info.collabName}
                image={info.image}
                appDesc={info.appDesc}
                coders={info.coders}
                tech={info.tech}
                timeline={info.timeline}
                skillLevel={info.skillLevel}
              />
              /* <Card />
            <Card />
            <Card />
            <Card /> */
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default MyCollabs
