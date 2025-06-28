import React from 'react'
import { Button, Card,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/HomePage.css'; // Assuming you have a CSS file for custom styles
export default function HomePage() {
  return (
    <div className="hero-wrapper">
      <Container>
        <Card className="hero-card text-center">
          <Card.Body>
            <Card.Title as="h1" className="hero-heading">
              Connect & Grow Globally
            </Card.Title>
            <Card.Text as="h5" className="hero-subtext">
              We help businesses expand their reach across borders with data-driven digital marketing strategies tailored for international success.
            </Card.Text>

            <div className="hero-buttons mt-4">
              <Button variant="light" size="lg" className="me-3">
                Start Your Journey
              </Button>
              <Button variant="outline-light" size="lg">
                Our Services
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
