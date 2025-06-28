import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import '../Style/WhyChoose.css'; // Assuming you have a CSS file for custom styles
export default function WhyChoose() {

    const features = [
        {
            title: '24/7 Support',
            description: 'Round-the-clock support across all time zones with local language assistance',
        },
        {
            title: 'Multilingual Team',
            description: 'Native speakers and cultural experts in 15+ languages and markets',
        },
        {
            title: 'Data-Driven Approach',
            description: 'Advanced analytics and AI-powered insights for optimal campaign performance',
        },
        {
            title: 'Global Network',
            description: 'Strategic partnerships and local expertise in key international markets',
        },
        {
            title: 'Proven Results',
            description: 'Track record of 500+ successful international expansions and growing',
        },
        {
            title: 'Personal Approach',
            description: 'Dedicated account managers who understand your business and goals',
        },
    ];
    return (
        <section className="why-choose py-5">
            <Container>
                <h2 className="text-center fw-bold">Why Choose GlobalConnect</h2>
                <p className="text-center text-muted mb-5">
                    What makes us the preferred partner for international growth
                </p>
                <Row>
                    {features.map((item, idx) => (
                        <Col key={idx} xs={12} sm={6} lg={4} className="mb-4">
                            <Card className="feature-card p-3 h-100 text-start">
                                <div className="icon-box mb-3 mx-auto">
                                    <span className="icon-placeholder">▢</span>
                                </div>
                                <Card.Body className="p-5 m-3" style={{alignItems: 'center', textAlign: 'center'}}>
                                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                                    <Card.Text className="text-muted">{item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
