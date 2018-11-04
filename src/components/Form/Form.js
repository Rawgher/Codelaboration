import React from 'react'
import './Form.css'
import NavBar from '../NavBar/NavBar'
import Title from '../Title/Title'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collabName: '',
      collabDesc: '',
      codersNeeded: '',
      techUsed: '',
      timeline: '',
      skillLevel: '',
      css: '',
      cPlusPlus: '',
      html: '',
      react: '',
      javascript: '',
      redux: '',
      node: '',
      python: '',
      git: '',
      doc: '',
      angular: '',
      vue: '',
      jamstack: '',
      severless: '',
      mern: '',
      mean: '',
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'appForm', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      collabName,
      collabDesc,
      codersNeeded,
      css,
      cPlusPlus,
      html,
      javascript,
      react,
      redux,
      node,
      python,
      git,
      doc,
      angular,
      vue,
      jamstack,
      serverless,
      mern,
      mean,
      timeline,
      skillLevel,
    } = this.state

    // const Form = () => (
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Title />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NavBar />
          </div>
          <div className="col-md-8" id="EGA-formColumn">
            <form name="appForm" onSubmit={this.handleSubmit} netlify>
              <div className="container" />
              <div className="row">
                <div className="col-md-6">
                  {/* <form name="appForm" method="POST" action="/success" data-netlify="true"> */}
                  <div className="form-group">
                    <label for="collabName">Collab Name:</label>
                    <input
                      type="name"
                      className="form-control"
                      id="collabName"
                      name="collabName"
                      value={collabName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="collabDesc">App Description:</label>
                    <textarea
                      type="description"
                      className="form-control"
                      id="collabDesc"
                      name="collabDesc"
                      value={collabDesc}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="codersNeeded">Coders Needed:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="codersNeeded"
                      name="codersNeeded"
                      value={codersNeeded}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="timeline">Project Timeline:</label>
                    <input
                      type="description"
                      className="form-control"
                      id="timeline"
                      name="timeline"
                      value={timeline}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="techUsed" className="rdp_marRight">
                      Technologies Used:
                    </label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={css}
                        onChange={this.handleChange}
                        id="css"
                        name="css"
                      />
                      <label className="form-check-label" for="css">
                        CSS
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={cPlusPlus}
                        onChange={this.handleChange}
                        id="c++"
                        name="c++"
                      />
                      <label className="form-check-label" for="c++">
                        C++
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={html}
                        onChange={this.handleChange}
                        id="html"
                        name="html"
                      />
                      <label className="form-check-label" for="html">
                        HTML
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="javascript"
                        value={javascript}
                        onChange={this.handleChange}
                        id="javascript"
                      />
                      <label className="form-check-label" for="javascript">
                        Javascript
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="react"
                        value={react}
                        onChange={this.handleChange}
                        id="react"
                      />
                      <label className="form-check-label" for="react">
                        React
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="redux"
                        value={redux}
                        onChange={this.handleChange}
                        id="redux"
                      />
                      <label className="form-check-label" for="redux">
                        Redux
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="node"
                        value={node}
                        onChange={this.handleChange}
                        id="node"
                      />
                      <label className="form-check-label" for="node">
                        Node
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="python"
                        value={python}
                        onChange={this.handleChange}
                        id="python"
                      />
                      <label className="form-check-label" for="python">
                        Python
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="git"
                        value={git}
                        onChange={this.handleChange}
                        id="git"
                      />
                      <label className="form-check-label" for="git">
                        Git
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="doc"
                        value={doc}
                        onChange={this.handleChange}
                        id="doc"
                      />
                      <label className="form-check-label" for="doc">
                        Doc
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="angular"
                        value={angular}
                        onChange={this.handleChange}
                        id="angular"
                      />
                      <label className="form-check-label" for="angular">
                        Angular
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="vue"
                        value={vue}
                        onChange={this.handleChange}
                        id="vue"
                      />
                      <label className="form-check-label" for="vue">
                        Vue
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="jamstack"
                        value={jamstack}
                        onChange={this.handleChange}
                        id="jamstack"
                      />
                      <label className="form-check-label" for="jamstack">
                        Jamstack
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="serverless"
                        value={serverless}
                        onChange={this.handleChange}
                        id="serverless"
                      />
                      <label className="form-check-label" for="serverless">
                        Serverless
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="mern"
                        value={mern}
                        onChange={this.handleChange}
                        id="mern"
                      />
                      <label className="form-check-label" for="mern">
                        MERN
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="mean"
                        value={mean}
                        onChange={this.handleChange}
                        id="mean"
                      />
                      <label className="form-check-label" for="mean">
                        MEAN
                      </label>
                    </div>
                    <br />
                    <br />
                    <br />

                    <div className="form-group">
                      <label for="skillLevel">Desired Skill Level:</label>
                      <input
                        type="description"
                        className="form-control"
                        id="skillLevel"
                        name="skillLevel"
                        value={skillLevel}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
