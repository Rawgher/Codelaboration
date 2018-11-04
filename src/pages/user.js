import React from 'react'
import { Link } from 'gatsby'
import Tabs from '../components/Tabs'
import Layout from '../components/layout'

const User = () => (
  <Layout>
    <Tabs />
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/form">Go to form</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/user">User page</Link>
  </Layout>
)

export default User
