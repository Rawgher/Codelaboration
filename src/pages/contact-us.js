import React from 'react'
import ContactForms from '../components/ContactForm'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ContactUs = () => (
  <Layout>
    <ContactForms />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/form">Go to form</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/user">User page</Link>
  </Layout>
)

export default ContactUs
