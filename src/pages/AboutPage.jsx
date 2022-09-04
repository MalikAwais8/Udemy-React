import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <h1>
        
        About Us
        </h1>
        <p>This is a page where you see about us</p>
        <p>write your review on Home Page</p>
        <Link to="/">Go Back to Home</Link>

      </Card>
  )
}

export default AboutPage
