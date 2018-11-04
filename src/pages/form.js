import React from 'react'
import Forms from '../components/Form'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const FormPage = () => (
  <Layout>
    <div>
      <Forms />
    </div>
    <Link to="/form">Go to form</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/user">User page</Link>
  </Layout>
)

export default FormPage
