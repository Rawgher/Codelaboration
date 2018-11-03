import React from 'react'

const Form = () => (
  <form action="https://formspree.io/xgzlalkm" method="POST">
    <label>
      Your email:
      <input type="text" name="_replyto" />
    </label>
    <label>
      Your message:
      <textarea name="message" />
    </label>

    <button type="submit">Send</button>
  </form>
)

export default Form
