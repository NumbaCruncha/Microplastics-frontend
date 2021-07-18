
import './Footer.css';
import React from 'react';
import {
    Card,
    Row,
    Nav,
    Badge,
    Container,
    Col
} from "react-bootstrap";

  
export default function Footer() {
  return (  
    <div className="Footer">
 
      <Container className="Footer-container">
        <Row className="Footer-row">
          <Col className="Footer-col">
            <Badge>About Us</Badge>
            <Nav.Link href="#">Aim</Nav.Link>
            <Nav.Link href="#">Vision</Nav.Link>
            <Nav.Link href="#">Testimonials</Nav.Link>
          </Col>
          <Col className="Footer-col">
            <Badge>Services</Badge>
            <Nav.Link href="#">Writing</Nav.Link>
            <Nav.Link href="#">Internships</Nav.Link>
            <Nav.Link href="#">Coding</Nav.Link>
            <Nav.Link href="#">Teaching</Nav.Link>
          </Col>
          <Col className="Footer-col">
            <Badge>Contact</Badge>
            <Nav.Link href="#">Michael Kean</Nav.Link>

          </Col>
          <Col className="Footer-col">
            <Badge>Social Media</Badge>
            <Nav.Link href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </Nav.Link>
          </Col>
        </Row>
        
      </Container>
      <h5 href="signal.co.nz"><a>Powered by @Signal</a></h5>
    </div>
  );
};
