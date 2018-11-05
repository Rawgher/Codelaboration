import React from 'react'
import NavBar from '../NavBar/NavBar'
import Title from '../Title/Title'

const contactForm = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <Title />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <NavBar />
      </div>
      <div className="col-md-6" id="EGA-formColumn">
        <form action="https://formspree.io/xezlapem" method="POST">
          <div class="form-group">
            <label for="email">Your Email:</label>
            <input type="email" class="form-control" id="email" name="_email" />
          </div>

          <div class="form-group">
            <label for="issueDesc">Describe the issue:</label>
            <textarea
              type="description"
              class="form-control"
              id="issueDesc"
              name="_issue"
            />
          </div>

          <div class="form-group">
            <label for="feedback">Any postive feedback:</label>
            <textarea
              type="description"
              class="form-control"
              id="feedback"
              name="_feedback"
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
)

export default contactForm
