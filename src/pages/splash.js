import React from 'react'
import SplashComponent from '../components/splash.js/splash'
import Layout from '../components/layout'

const SplashPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-md-12" id="EGA-splashBackground">
          <SplashComponent />
        </div>
      </div>
    </div>
  </Layout>
)

export default SplashPage
