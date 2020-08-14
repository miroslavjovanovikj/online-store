import React from 'react';
import '../styles/HomePage.css'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePage = () => {
  return(
    <Container className="HomePage">
      <Row>
        <Col lg={4} sm={12} md={6}>
          <div className="HomePage-menu">
            <div className="HomePage-menu-item">
              <div className="HomePage-content">
                <h1 className="HomePage-title">HATS</h1>
                <span className="HomePage-subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={12} md={6}>
          <div className="HomePage-menu">
            <div className="HomePage-menu-item">
              <div className="HomePage-content">
                <h1 className="HomePage-title">JACKETS</h1>
                <span className="HomePage-subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={12} md={12}>
          <div className="HomePage-menu">
            <div className="HomePage-menu-item">
              <div className="HomePage-content">
                <h1 className="HomePage-title">SNEAKERS</h1>
                <span className="HomePage-subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="HomePage-menu">
            <div className="HomePage-menu-item">
              <div className="HomePage-content">
                <h1 className="HomePage-title">MAN</h1>
                <span className="HomePage-subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="HomePage-menu">
            <div className="HomePage-menu-item">
              <div className="HomePage-content">
                <h1 className="HomePage-title">WOMAN</h1>
                <span className="HomePage-subtitle">SHOP NOW</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default HomePage;
