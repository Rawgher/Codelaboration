import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'
import './splash.css'
import Title from '../Title/Title'

class SplashComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topLine: 'topLine',
      bottomLine: 'bottomLine',
      topLineVertical: 'topLineVertical',
      bottomVert: 'bottomVert',
    }
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          topLine: 'topLine topLineDeployed',
          bottomLine: 'bottomLine bottomLineDeployed',
        })
      }.bind(this),
      500
    )
    setTimeout(
      function() {
        this.setState({
          topLineVertical: 'topLineVertical topLineVerticalDeployed',
        })
      }.bind(this),
      100
    )
    setTimeout(
      function() {
        this.setState({
          bottomVert: 'bottomvert bottomVertDeployed',
        })
      }.bind(this),
      100
    )
  }

  render() {
    return (
      <div className="container">
        <Title />
        <div className="row" />
        <div className="col-md-12">
          <Link to="/form">
            <Button className="EGA-buttonColor" id="EGA-createCollabButton">
              CREATE COLLAB
            </Button>
          </Link>
          <Link to="/active-collabs">
            <Button className="EGA-buttonColor" id="EGA-activeCollabsButton">
              ACTIVE COLLABS
            </Button>
          </Link>
          <div id="topLine" className={this.state.topLine} />
          <div id="topLineVertical" className={this.state.topLineVertical} />
          <div id="bottomLine" className={this.state.bottomLine} />
        </div>
        <div className="row" />
        <div className="col-md-12">
          <Link to="/documentation" id="EGA-documentation">
            DOCUMENTATION
          </Link>
        </div>
      </div>
    )
  }
}
export default SplashComponent
