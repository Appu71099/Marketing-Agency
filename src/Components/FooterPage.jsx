import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterPage() {
  return (
      <Navbar bg="light" data-bs-theme="light" className="mt-auto py-3 border-top">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
        
        {/* Left - Contact Info */}
        <div className="mb-2 mb-md-0">
          <div><strong>Email:</strong> example@example.com</div>
          <div><strong>Contact:</strong> +91-1234567890</div>
        </div>

        {/* Center - Company Name */}
        <div className="mb-2 mb-md-0">
          <strong>© 2025 Global Connect
</strong>
        </div>

        {/* Right - LinkedIn */}
        <Nav>
          <Nav.Link
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </Nav.Link>
        </Nav>

      </Container>
    </Navbar>
  )
}
