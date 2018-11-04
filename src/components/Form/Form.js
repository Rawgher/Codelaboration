import React from 'react'
import './Form.css'

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
      javascript: '',
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error))

    e.preventDefault()
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
      timeline,
      skillLevel,
    } = this.state

    // const Form = () => (
    return (
      <form onSubmit={this.handleSubmit}>
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
              value={javascript}
              onChange={this.handleChange}
              id="javascript"
            />
            <label className="form-check-label" for="javascript">
              Javascript
            </label>
          </div>
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
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    )

    //   <p>
    //     <label>
    //       Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
    //     </label>
    //   </p>
    //   <p>
    //     <label>
    //       Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
    //     </label>
    //   </p>
    //   <p>
    //     <label>
    //       Message: <textarea name="message" value={message} onChange={this.handleChange} />
    //     </label>
    //   </p>
    //   <p>
    //     <button type="submit">Send</button>
    //   </p>
    // </form>
  }
}

export default Form
