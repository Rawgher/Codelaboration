import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/form">Go to form</Link>
    <Link to="/contact-us">Contact Us</Link>
  </Layout>
)

export default SecondPage
