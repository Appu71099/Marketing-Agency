import React from 'react'
import { Card, Container } from 'react-bootstrap';

import '../Style/AboutPage.css'; // Assuming you have a CSS file for custom styles

export default function AboutPage() {
    return (
        <div className="about-wrapper">
            <Container>
                <Card className="about-card text-center">
                    <Card.Body>
                        <Card.Title as="h1" className="about-heading">
                            Connecting Businesses Worldwide
                        </Card.Title>
                        <Card.Text  className="about-subtext">
                            With over 8 years of experience and presence in 25+ countries, we've helped 500+ businesses achieve international growth through strategic digital marketing.
                        </Card.Text>


                        <Container style={{margin:'20px auto' ,padding:'20px' }}>
                            <Card style={{backgroundColor:'#00a7c6', color:'white',boxShadow:'0 4px 8px rgba(0,0,0,0.1)'}}>
                                <Card.Body>
                                    <Card.Title as="h2" >
                                        25+ Countries
                                    </Card.Title>
                                    <Card.Text  className="about-subtext">
                                        Global Reach & Local Expertise
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Container>


                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
