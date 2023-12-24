import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import './Home.scss';
import { PiSignOutBold } from "react-icons/pi";

const Home = () => {
  const { logoutHandler } = useAuth();
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
          <div className="div">
            <h1>
              Press the icon to logout
            </h1>
            <div className="home-container">
              <div className="button-container" onClick={logoutHandler}>
              <PiSignOutBold /> 
              </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
