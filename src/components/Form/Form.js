import React from 'react'
import './Form.css'

const Form = () => (
  <form name="contact" method="POST" data-netlify="true">
    <div className="form-group">
      <label for="collabName">Collab Name:</label>
      <input
        type="name"
        className="form-control"
        id="collabName"
        name="collabName"
      />
    </div>
    <div className="form-group">
      <label for="collabDesc">App Description:</label>
      <textarea
        type="description"
        className="form-control"
        id="collabDesc"
        name="collabDesc"
      />
    </div>
    <div className="form-group">
      <label for="codersNeeded">Coders Needed:</label>
      <input
        type="number"
        className="form-control"
        id="codersNeeded"
        name="codersNeeded"
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
          value="CSS"
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
          value="C++"
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
          value="HTML"
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
          value="Javascript"
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
      />
    </div>
    <div className="form-group">
      <label for="skillLevel">Desired Skill Level:</label>
      <input
        type="description"
        className="form-control"
        id="skillLevel"
        name="skillLevel"
      />
    </div>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)

export default Form
