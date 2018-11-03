import React from 'react'

const contactForm = () => (
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

    <button type="submit">Send</button>
  </form>
)

export default contactForm
