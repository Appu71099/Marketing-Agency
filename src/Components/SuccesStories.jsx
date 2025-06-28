import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/SuccessPage.css'
export default function SuccesStories() {
 
    const stories = [
  {
    badge: 'TC',
    brand: 'TechCorp Inc.',
    region: 'US USA → 🌍 EU Europe',
    stat1: { value: '300%', label: 'ROI Increase' },
    stat2: { value: '12', label: 'New Markets' },
  },
  {
    badge: 'FB',
    brand: 'Fashion Brand',
    region: 'GB UK → 🌍 Asia-Pacific',
    stat1: { value: '250%', label: 'Sales Growth' },
    stat2: { value: '8', label: 'Countries' },
  },
  {
    badge: 'ES',
    brand: 'E-commerce Store',
    region: 'CA Canada → 🌍 Global',
    stat1: { value: '400%', label: 'Traffic Boost' },
    stat2: { value: '15', label: 'Languages' },
  },
];

//Write flecbox property justify-content: space-between;
 
 
    return (
    <section className="success-stories py-5">
      <Container>
        <h2 className="text-center fw-bold">Success Stories</h2>
        <p className="text-center text-muted mb-5">
          Real results from our global campaigns
        </p>
        <Row>
          {stories.map((story, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4} className="mb-4">
              <Card className="story-card p-5 m-3 h-200" >
                <div className="d-flex justify-content-center mb-3">
                    
                  <div className="story-badge me-3">{story.badge}</div>
                  
                  <div>
                    <div className="fw-bold">{story.brand}</div>
                    <small className="text-muted">{story.region}</small>
                  </div>
                </div>
                <Card.Body className="pt-0">
                  <div className="stat-block mb-4">
                    <Card style={{ backgroundColor: '#f0f8ff', border: 'none'}}>
                        <Card.Body className="text-center">
                            <h3 className="fw-bold text-primary mb-0">{story.stat1.value}</h3>
                            <small className="text-muted">{story.stat1.label}</small>
                        </Card.Body>
                    </Card>
                    
                  </div>
                  <div className="stat-block">

                    <Card style={{ backgroundColor: '#f0f8ff',border: 'none' }}>
                        <Card.Body className="text-center">
                            <h3 className="fw-bold text-success mb-0">{story.stat2.value}</h3>
                            <small className="text-muted">{story.stat2.label}</small>
                        </Card.Body>
                    </Card>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
