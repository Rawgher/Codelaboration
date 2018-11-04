import React, { Component } from 'react'
import './ActiveCollab.css'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import info2 from '../../utils/info2.json'

class ActiveCollab extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    info2,
  }

  render() {
    return (
      <div className="container">
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
        <div className="row">
          <div className="col-md-12">
            <SearchBar />
          </div>
        </div>
        <div className="row" id="EGA-activeCollabMain">
          <div className="col-md-3">
            <NavBar />
          </div>

          <div className="col-md-9" id="EGA-cardWrapper">
            {this.state.info2.map(info => (
              <Card
                id={info.id}
                key={info.id}
                collabName={info.collabName}
                image={info.image}
                appDesc={info.appDesc}
                longAppDesc={info.longAppDesc}
                coders={info.coders}
                tech={info.tech}
                timeline={info.timeline}
                skillLevel={info.skillLevel}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default ActiveCollab
