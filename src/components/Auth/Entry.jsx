import { useNavigate } from "react-router-dom"
import './Entry.scss'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Entry = () => {
  const navigate = useNavigate();
  
  const handleClickLogin = () => {
    navigate('/login');
  }

  const handleClickRegister = () => {
    navigate('/register');
  }

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
            <h1>
              Login or Sign up
            </h1>
            <div className="div">
              <div className="button-group">
                <div className="button" onClick={handleClickLogin}>Login</div>
                <div className="buttonV2" onClick={handleClickRegister}>Sign up</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>    
  )
}

export default Entry
