import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col, Card } from 'react-bootstrap';
import '../Style/ServicePage.css'; // Assuming you have a CSS file for custom styles

export default function ServicePages() {


    const services = [
  {
    title: 'Global SEO',
    description: 'Multi-language SEO strategies to rank in international markets',
  },
  {
    title: 'Social Media',
    description: 'Cross-platform social strategies adapted for different cultures',
  },
  {
    title: 'Global Ads',
    description: 'Targeted advertising campaigns across Google, Facebook, and local platforms',
  },
  {
    title: 'International Branding',
    description: 'Brand positioning and messaging for diverse global audiences',
  },
];

  return (
    <section className="core-services">
  <Container  className="text-center">
    <h1 className="text-center fw-bold mb-3">Our Core Services</h1>
    <p className="text-center mb-5">
      Comprehensive digital marketing solutions designed for global expansion
    </p>

    <Row>
      {services.map((service, index) => (
        <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
          <Card className="service-card h-100 text-start">
            <div className="icon-box mx-auto mt-4">
              <span className="icon-placeholder">▢</span>
            </div>
            <Card.Body>
              <Card.Title className="fw-bold">{service.title}</Card.Title>
              <Card.Text>
                {service.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>
  )
}
